<template>
  <div>
    <label
      :for="parseDefaultField.key"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      {{ parseDefaultField.label }}
    </label>

    <div
      class="relative"
      :class="[
        parseDefaultField.width === 'half'
          ? 'w-[49%]'
          : parseDefaultField.width === 'full'
          ? 'w-full'
          : parseDefaultField.width,
      ]"
    >
      <textarea
        :id="parseDefaultField.key"
        :value="inputValue"
        @input="handleChange"
        @blur="handleBlur"
        rows="4"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        :placeholder="parseDefaultField.placeholder"
        :required="parseDefaultField.required"
        :disabled="parseDefaultField.disabled"
        :readonly="parseDefaultField.readonly"
      ></textarea>
    </div>

    <span
      class="inline text-sm text-red-500"
      v-show="errorMessage || meta.valid"
    >
      {{ errorMessage }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { useField } from "vee-validate";
import { onMounted, computed } from "vue";

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
  onClickSuffix: [value: string];
  onInput: [value: string];
}>();

const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
  meta,
} = useField(props.field.key, undefined, {
  initialValue: props.field.value,
});

onMounted(() => {});
</script>