<template>
  <div>
    <div class="grid grid-cols-2">
      <div class="inline-flex items-end">
        <label for="table-search" class="sr-only">Search</label>
        <div class="relative mt-1 w-[60%]">
          <BaseInputField
            :field="{
              key: 'table-search',
              width: 'full',
              placeholder: 'ค้นหา',
              prefixIcon: 'magnifying-glass',
            }"
          />
        </div>
      </div>
      <div class="inline-flex items-center justify-end">
        <button
          type="button"
          class="gap-2 px-3 py-2.5 text-sm font-medium text-white inline-flex items-center bg-primary hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          @click="() => onClickAdd()"
        >
          <font-awesome-icon icon="plus" :class="['text-lg text-white']" />
          เพิ่มข้อมูล
        </button>
      </div>
    </div>
    <BaseTable :options="tableOptions" :data-list="dataList">
      <template v-slot:id="dataProps">
        <div class="flex items-center justify-center">
          {{ dataProps.data.index + 1 }}
        </div>
      </template>
      <template v-slot:name="dataProps">
        <div class="flex items-center justify-center">
          {{ getName(dataProps.data.index) }}
        </div>
      </template>
      <template v-slot:description="dataProps">
        <div class="flex items-center justify-center">
          {{ getDescription(dataProps.data.index) }}
        </div>
      </template>
      <template v-slot:activeStatus="dataProps">
        <div
          :class="[
            dataProps.data.activeStatus === 'Y'
              ? 'text-green-500'
              : 'text-red-500',
            'text-center',
          ]"
        >
          {{ dataProps.data.activeStatus === "Y" ? "ใช้งานปกติ" : "ไม่ใช้งาน" }}
        </div>
      </template>
      <template v-slot:btnAction="dataProps">
        <div class="flex items-center justify-center">
          <button
            type="button"
            class="gap-2 px-1.5 py-2.5 text-sm font-medium text-black inline-flex items-center bg-white-700 focus:outline-none rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700"
            @click="() => onClickEdit(dataProps.data)"
          >
            <font-awesome-icon icon="edit" :class="['text-lg text-primary']" />
          </button>
          <button
            type="button"
            class="gap-2 px-1.5 py-2.5 text-sm font-medium text-black inline-flex items-center bg-white-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            @click="() => onClickDelete(dataProps.data)"
          >
            <font-awesome-icon icon="trash" :class="['text-lg text-primary']" />
          </button>
        </div>
      </template>
    </BaseTable>
    <BasePagination :count="15" />

    <!-- modal เพิ่มข้อมูล -->
    <Form
      as=""
      v-slot="props"
      :validationSchema="validationSchema"
      :initialValues="formValues"
    >
      <BaseModal
        :title="typeSelect == 'create' ? 'เพิ่มข้อมูล' : 'แก้ไขข้อมูล'"
        width="max-w-5xl"
        :show-footer="false"
        @on-created="(m) => (modal = m)"
        @on-hide="() => props.resetForm()"
      >
        <div class="px-[5%]">
          <form @submit="(e) => onSubmit(e, props)">
            <GenerateFormGrid :fields="fieldsModal" />
            <div class="w-full flex justify-center mt-10">
              <button
                class="text-white bg-primary hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-16 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                บันทึก
              </button>
            </div>
          </form>
        </div>
      </BaseModal>
    </Form>
  </div>
</template>

<script  lang="ts">
import { useState } from "nuxt/app";
import { Form } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as zod from "zod";

export default {
  async setup() {
    const globalAlertModalState = useState<any>("globalAlertModal");

    const validationSchema = toTypedSchema(
      zod.object({
        name1: zod
          .string({ required_error: "กรุณากรอกชื่อหลัก" })
          .min(1, "กรุณากรอกชื่อหลัก"),
        name2: zod
          .string({ required_error: "กรุณากรอกชื่อรอง" })
          .min(1, "กรุณากรอกชื่อรอง"),
      })
    );

    return { globalAlertModalState, validationSchema };
  },
  component: {
    Form,
  },
  mounted() {
    this.settingDataByPath();
  },
  data() {
    return {
      typeSelect: "",
      formValues: {},
      menuList: mockMenus,
      currentMenu: {} as any,
      modal: null as any,
      dataList: [
        {
          amount: "5,230",
          activeStatus: "Y",
        },
        {
          amount: "1,020",
          activeStatus: "N",
        },
      ],
      tableOptions: [
        {
          width: "w-[5%]",
          field: "id",
          label: "ลำดับ",
          dataAlign: "text-sm text-center",
        },
        {
          width: "w-[25%]",
          field: "name",
          label: "ชื่อ",
        },
        {
          width: "w-[20%]",
          headerAlign: "text-left",
          dataAlign: "text-left text-sm",
          field: "description",
          label: "รายละเอียด",
        },
        {
          width: "w-[15%]",
          headerAlign: "text-right",
          dataAlign: "text-right text-sm",
          field: "amount",
          label: "จำนวน",
        },

        {
          width: "w-[15%]",
          field: "activeStatus",
          label: "สถานะการใช้งาน",
        },
        {
          width: "w-[15%]",
          dataAlign: "text-right",
          field: "btnAction",
          label: "",
        },
      ],
      fieldsModal: [
        {
          key: "name1",
          label: "ชื่อหลัก",
          placeholder: "ชื่อหลัก",
        },
        {
          key: "name2",
          label: "ชื่อรอง",
          placeholder: "ชื่อรอง",
        },
        {
          flex: "full",
          key: "description",
          label: "รายละเอียด",
          type: "textarea",
          placeholder: "รายละเอียด",
        },
        {
          width: "w-[60%]",
          key: "amount",
          label: "จำนวน",
          disabled: true,
          placeholder: "2,000",
        },

        {
          flex: "full",
          key: "activeStatus",
          label: "สถานะการใช้งาน",
          type: "radio",
          value: "Y",
          placeholder: "",
          children: [
            {
              key: "Y",
              label: "ใช้งาน",
              value: "Y",
            },
            {
              key: "N",
              label: "ไม่ใช้งาน",
              value: "N",
            },
          ],
        },
      ],
    };
  },
  methods: {
    getName(index: any) {
      return `${this.currentMenu.name} ${index + 1}`;
    },
    getDescription(index: any) {
      return `${this.currentMenu.name} ${index + 1} (${
        this.currentMenu.subtitle
      } ${index + 1})`;
    },
    settingDataByPath() {
      const currentPath = this.$route.path;

      this.menuList.find((e) => {
        const findChildMenu = e.children?.find(
          (child) => child.path == currentPath
        );
        if (!!findChildMenu) {
          this.currentMenu = { ...findChildMenu };
          return;
        }
        if (e.path == currentPath) {
          this.currentMenu = { ...e };
          return;
        }
      });
    },
    onClickAdd() {
      this.formValues = {
        name1: "",
        name2: "",
        description: "",
        amount: "2,000",
        activeStatus: "Y",
      };
      this.typeSelect = "create";
      this.modal.show();
    },
    onClickEdit(value: any) {
      this.formValues = {
        ...value,
        name1: this.getName(value.index),
        name2: "",
        description: this.getDescription(value.index),
      };

      this.typeSelect = "edit";

      this.modal.show();
    },

    onClickDelete(value: any) {
      this.globalAlertModalState.show({
        title: `ต้องการลบ '${this.getName(value.index) ?? ""}'  ใช่หรือไม่`,
        titleClass: "text-red-500 text-base mb-4",
        btnSubmitText: "ตกลง",
        onSubmit: () => this.dataList.splice(value.index, 1),
        btnCancelText: "ยกเลิก",
        icon: "trash",
        iconSize: "text-[40px]",
        iconColor: "text-white bg-red-500 rounded-full py-6 px-[1.6rem]",
      });
    },

    // บันทึกเพิ่มผู้ใช้งาน
    onSubmit(event: any, props: any) {
      props.handleSubmit(event, (values: any) => {
        if (props.meta.valid) {
          this.modal.hide();
          props.resetForm();

          if (this.typeSelect == "create") {
            this.dataList.push({
              amount: "2,000",
              activeStatus: "Y",
              ...values,
            });
            this.globalAlertModalState.show({
              title: "ทำการเพิ่มเมนูสำเร็จ",
              titleClass: "text-green-500 text-base mb-4",
              btnSubmitText: "ตกลง",
              btnCancelText: "",
              iconSize: "text-[40px]",
              iconColor:
                "text-white bg-green-500 rounded-full py-6 px-[1.6rem]",
            });
          } else {
            this.globalAlertModalState.show({
              title: "ทำการแก้ไขข้อมูลผู้ใช้งานสำเร็จ",
              titleClass: "text-green-500 text-base mb-4",
              btnSubmitText: "ตกลง",
              btnCancelText: "",
              iconSize: "text-[40px]",
              iconColor:
                "text-white bg-green-500 rounded-full py-6 px-[1.6rem]",
            });
          }
        }
      });
    },
  },
  watch: {
    $route(to, from) {
      this.settingDataByPath();
    },
  },
};
</script>