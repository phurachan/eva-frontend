<template>
  <!-- Main modal -->
  <div
    :id="id"
    tabindex="-1"
    aria-hidden="true"
    class="fixed top-0 left-0 right-0 z-[48] hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative w-full max-h-full" :class="[width]">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div v-if="showHeader" class="p-4">
          <div
            class="flex items-start justify-between pb-4 border-b-[3px] border-b-primary rounded-t dark:border-gray-600"
          >
            <h3 class="pt-2 text-xl font-semibold text-primary dark:text-white">
              {{ title }}
            </h3>
            <button
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              @click="onHide"
            >
              <font-awesome-icon
                icon="xmark"
                :class="['h-6 w-6 text-primary']"
              />
            </button>
          </div>
        </div>
        <!-- Modal body -->
        <div class="p-6 space-y-6">
          <slot></slot>
        </div>
        <!-- Modal footer -->
        <div
          v-if="showFooter"
          class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
        >
          <button
            @click="onSubmit"
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {{ btnSubmitText }}
          </button>
          <button
            @click="onHide"
            type="button"
            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
          >
            {{ btnCancelText }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Modal, type ModalOptions } from "flowbite";
import { onMounted } from "vue";

const props = defineProps({
  title: { type: String, required: true },
  width: { type: String, default: "max-w-7xl" },
  showHeader: { type: Boolean, default: true },
  showFooter: { type: Boolean, default: true },
  id: { type: String, default: "defaultMainModal" },
  btnSubmitText: { type: String, default: "ตกลง" },
  btnCancelText: { type: String, default: "ยกเลิก" },
  onHide: {type: Function, default: () => {}},
  onShow: {type: Function, default: () => {}},
});

const options: ModalOptions = {
  placement: "center",
  backdrop: "dynamic",
  backdropClasses:
    "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-[45]",
  closable: true,
  onHide: () => {
    // console.log(props.id, " modal is hidden");
    props.onHide();
  },
  onShow: () => {
    // console.log(props.id, " modal is shown");
    props.onHide();
  },
  onToggle: () => {
    // console.log(props.id, " modal has been toggled");
  },
};
let modal: Modal;

onMounted(() => {
  const $targetEl = document.getElementById(props.id);
  modal = new Modal($targetEl, options);

  emit("onCreated", modal);
});

const emit = defineEmits<{
  onCreated: [modal: Modal];
  onSubmit: [];
  onHide: [];
}>();

function onSubmit() {
  modal.hide();
  emit("onSubmit");
}

function onHide() {
  modal.hide();
  emit("onHide");
}
</script>