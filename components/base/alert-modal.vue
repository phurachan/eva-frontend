<template>
  <!-- Main modal -->
  <div
    :id="id"
    tabindex="-1"
    aria-hidden="true"
    class="fixed top-0 left-0 right-0 z-[49] hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative w-full max-w-md max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal body -->
        <div class="p-12 space-y-6">
          <div class="flex items-center justify-center">
            <font-awesome-icon
              :icon="globalAlertModalOptionsState.icon"
              :class="[
                globalAlertModalOptionsState.iconSize,
                globalAlertModalOptionsState.iconColor,
              ]"
            />
          </div>
          <div class="flex items-center justify-center">
            <span :class="globalAlertModalOptionsState.titleClass">
              {{ globalAlertModalOptionsState.title }}
            </span>
          </div>
          <div class="w-full flex justify-center mt-10 gap-2">
            <button
              v-if="
                globalAlertModalOptionsState.btnCancelText &&
                globalAlertModalOptionsState.btnCancelText !== ''
              "
              type="button"
              class="text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-20 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              @click="onReject"
            >
              {{ globalAlertModalOptionsState.btnCancelText }}
            </button>
            <button
              type="button"
              class="text-white bg-primary hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-20 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              @click="onSubmit"
            >
              {{ globalAlertModalOptionsState.btnSubmitText }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Modal, type ModalOptions } from "flowbite";
import { onMounted } from "vue";

const props = defineProps({
  id: { type: String, default: "BaseAlertModal" },
});

const globalAlertModalOptionsState = useState<any>(
  "globalAlertModalOptions",
  () => new ModalOption({})
);
const globalAlertModalState = useState<any>("globalAlertModal");

const options: ModalOptions = {
  placement: "center",
  backdrop: "dynamic",
  backdropClasses:
    "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-[46]",
  closable: true,
  onHide: () => {
    // console.log(props.id, " modal is hidden");
    globalAlertModalOptionsState.value.onHide();
  },
  onShow: () => {
    // console.log(props.id, " modal is shown");
    globalAlertModalOptionsState.value.onShow();
  },
  onToggle: () => {
    // console.log(props.id, " modal has been toggled");
  },
};
let modal: Modal;

onMounted(() => {
  const $targetEl = document.getElementById(props.id);
  modal = new Modal($targetEl, options);
  globalAlertModalState.value = {
    modal: modal,
    show: (config: any = {}) => {
      globalAlertModalOptionsState.value = new ModalOption({ ...config });
      modal.show();
    },
    hide: () => {
      modal.hide();
    },
  };

  emit("onCreated", modal);
});

const emit = defineEmits<{
  onCreated: [modal: Modal];
}>();

function onSubmit() {
  globalAlertModalOptionsState.value.onSubmit();
  modal.hide();
}

function onReject() {
  globalAlertModalOptionsState.value.onReject();
  modal.hide();
}

function onHide() {
  globalAlertModalOptionsState.value.onHide();
  modal.hide();
}
</script>