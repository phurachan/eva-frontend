<template>
  <div>
    <label
      :for="parseDefaultField.key"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      {{ parseDefaultField.label }}
    </label>

    <div
      class="flex gap-2 p-2 bg-white border border-gray-200 rounded-lg"
      :class="[
        parseDefaultField.width === 'half'
          ? 'w-[49%]'
          : parseDefaultField.width === 'full'
          ? 'w-full'
          : parseDefaultField.width,
      ]"
    >
      <div>
        <button
          :for="parseDefaultField.key"
          type="button"
          class="inline-flex gap-2 items-center text-[#1482C1] bg-white border border-[#1482C1] focus:outline-none hover:bg-gray-100 focus:ring-1 focus:ring-[#1482C1] font-medium rounded-lg text-sm px-5 py-2.5 mr-2"
          @click="onClick"
        >
          <font-awesome-icon
            icon="arrow-up"
            :class="['h-4 w-4 text-white-500']"
          />
          {{
            parseDefaultField.label && parseDefaultField.label !== ""
              ? parseDefaultField.label
              : "อัพโหลด"
          }}
        </button>
        <input
          :id="parseDefaultField.key"
          type="file"
          class="hidden"
          @change="onChange"
        />
      </div>

      <div v-if="parseDefaultField.canEditDescFile" class="flex grow gap-2">
        <input
          :id="`input_${parseDefaultField.key}`"
          type="text"
          class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
          v-model="descState"
          :placeholder="parseDefaultField.placeholder"
          @change="onChangeDesc"
        />

        <div v-if="valueState" class="flex grow gap-2 items-center justify-end">
          <button type="button" @click="openFile">
            <font-awesome-icon icon="eye" :class="['h-5 w-5 text-[#1482C1]']" />
          </button>
          <button type="button" @click="removeFile">
            <font-awesome-icon icon="trash" :class="['h-5 w-5 text-red-500']" />
          </button>
        </div>
      </div>
      <div
        v-else
        class="flex grow px-3 py-2 bg-white border border-gray-200 rounded-lg"
      >
        <span v-if="valueState" class="truncate">{{ valueState.name }}</span>
        <span v-if="!valueState" class="text-gray-400 truncate">{{
          parseDefaultField.placeholder
        }}</span>
        <div v-if="valueState" class="flex grow gap-2 items-center justify-end">
          <button type="button" @click="openFile">
            <font-awesome-icon icon="eye" :class="['h-5 w-5 text-[#1482C1]']" />
          </button>
          <button type="button" @click="removeFile">
            <font-awesome-icon icon="trash" :class="['h-5 w-5 text-red-500']" />
          </button>
        </div>
      </div>
    </div>

    <span
      class="inline text-sm text-red-500"
      v-show="errorMessage || meta.valid"
    >
      {{ errorMessage }}
    </span>

    <BaseModal
      title="แสดงไฟล์"
      :show-footer="false"
      @onCreated="onCreatedModal"
    >
      <img
        v-if="!!srcFileState && valueState.type.startsWith('image/')"
        :src="srcFileState"
        class="w-full h-full"
      />
      <embed
        v-if="!!srcFileState && !valueState.type.startsWith('image/')"
        :src="srcFileState"
        class="w-full h-[800px]"
      />
    </BaseModal>
  </div>
</template>
  
<script setup lang="ts">
import { useField } from "vee-validate";
import { Modal } from "flowbite";
import { onMounted, computed } from "vue";

let modal: Modal;

function onCreatedModal(modalObj: Modal) {
  modal = modalObj;
}

const props = defineProps({
  field: { type: Object, required: true },
  classList: { type: [Array<String>, String, Object], default: () => [] },
});

const parseDefaultField = computed(() => {
  const inputFieldGrid = new InputFieldGrid({});
  const inputField = new InputField({});
  return { ...inputFieldGrid, ...inputField, ...props.field };
});

const emit = defineEmits<{
  onChange: [value: any];
}>();

let valueState = useState<any>(
  `baseInputFileSeleced_${parseDefaultField.value.key}`,
  () => ""
);
let descState = useState<any>(
  `baseInputFileDesc_${parseDefaultField.value.key}`,
  () => ""
);
let srcFileState = useState<any>(
  `baseInputFileSrcFile_${parseDefaultField.value.key}`,
  () => ""
);

const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
  meta,
} = useField(props.field.key, undefined, {
  initialValue: props.field.value,
});

onMounted(() => {
  valueState.value = parseDefaultField.value.value;
});

function onChange($event: any) {
  if (!!$event.target?.files?.length) {
    valueState.value = $event.target.files[0];
    if (!parseDefaultField.value.canEditDescFile || descState.value === "") {
      descState.value = valueState.value.name;
    }
    emit("onChange", {
      file: valueState.value,
      description: descState.value,
    });
  }
}

function onChangeDesc($event: any) {
  descState.value = $event.target.value;
  emit("onChange", {
    file: valueState.value,
    description: descState.value,
  });
}

function onClick() {
  const ele = document.getElementById(parseDefaultField.value.key);
  ele?.click();
}

function removeFile() {
  const ele = document.getElementById(
    parseDefaultField.value.key
  ) as HTMLInputElement;
  if (!!ele?.files?.length) {
    ele.value = "";
    ele.files = null;
  }
  valueState.value = null;
  srcFileState.value = null;
  descState.value = "";

  emit("onChange", {
    file: valueState.value,
    description: descState.value,
  });
}

function openFile() {
  readFile(valueState.value);
}

function readFile(file: File) {
  const reader = new FileReader();
  reader.addEventListener("load", (event: any) => {
    srcFileState.value = event.target.result;
    modal.show();
  });
  reader.readAsDataURL(file);
}
</script>