<template>
  <div
    class="flex items-center justify-center h-[100vh] bg-contain bg-[url(/images/bg-base.png)] bg-no-repeat"
  >
    <div class=""></div>
    <div
      class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
    >
      <Form @submit="onSubmit">
        <base-logo></base-logo>
        <div class="mb-6">
          <label
            for="username"
            class="block mb-2 text-sm font-medium text-appblack dark:text-white"
            >ชื่อผู้ใช้งาน</label
          >
          <input
            type="text"
            id="username"
            @input="inputFieldUsername.handleChange"
            @blur="inputFieldUsername.handleBlur"
            maxlength="10"
            class="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="ชื่อผู้ใช้งาน"
          />

          <span
            class="inline text-sm text-red-500"
            v-show="
              inputFieldUsername.errorMessage?.value ||
              inputFieldUsername.meta.valid
            "
          >
            {{ inputFieldUsername.errorMessage.value }}
          </span>
        </div>

        <div class="mb-6">
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-appblack dark:text-white"
            >รหัสผ่าน</label
          >
          <input
            type="password"
            id="password"
            @input="inputFieldPassword.handleChange"
            @blur="inputFieldPassword.handleBlur"
            maxlength="10"
            class="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="********"
          />

          <span
            class="inline text-sm text-red-500"
            v-show="
              inputFieldPassword.errorMessage?.value ||
              inputFieldPassword.meta.valid
            "
          >
            {{ inputFieldPassword.errorMessage.value }}
          </span>
        </div>
        <button
          type="submit"
          :disabled="
            !inputFieldUsername.meta.valid || !inputFieldPassword.meta.valid
          "
          class="w-full text-white bg-primary hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:bg-disabled disabled:text-appgray"
        >
          เข้าสู่ระบบ
        </button>
      </Form>

      <BaseAlertModal id="loginAlertModal" />
    </div>
  </div>
</template>

<script lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import { Form, useField } from "vee-validate";
import * as zod from "zod";
import BaseLogo from "~/components/base-logo.vue";

export default {
  setup() {
    const globalProfileDataCookie = useCookie<any>("globalProfileData");

    const fieldSchemaUsername = toTypedSchema(
      zod
        .string({ required_error: "กรุณากรอกชื่อผู้ใช้งาน" })
        .min(1, "กรุณากรอกชื่อผู้ใช้งาน")
    );
    const fieldSchemaPassword = toTypedSchema(
      zod
        .string({ required_error: "กรุณากรอกรหัสผ่าน" })
        .min(1, "กรุณากรอกรหัสผ่าน")
    );

    const inputFieldUsername = useField("username", fieldSchemaUsername, {
      initialValue: "",
    });

    const inputFieldPassword = useField("password", fieldSchemaPassword, {
      initialValue: "",
    });

    return {
      globalProfileDataCookie,
      inputFieldUsername,
      inputFieldPassword,
    };
  },
  components: { Form, BaseLogo },
  data() {
    return {};
  },
  computed: {
    inputValueUsername() {
      return this.inputFieldUsername.value;
    },
    inputValuePassword() {
      return this.inputFieldPassword.value;
    },
  },
  mounted() {},
  methods: {
    async onSubmit(values: any) {
      if (
        this.inputFieldUsername.meta.valid &&
        this.inputFieldPassword.meta.valid
      ) {
        this.globalProfileDataCookie = { username: this.inputValueUsername };

        setTimeout(() => navigateTo("/"), 800);
      }
    },
  },
};
</script>

