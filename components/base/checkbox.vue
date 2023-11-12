<template>
  <div class="w-full h-full flex items-center justify-start">
    <div class="flex items-center justify-start">
      <input
        :id="parseDefaultField.key"
        type="checkbox"
        :value="inputValue"
        @input="handleChange"
        @blur="handleBlur"
        class="w-4 h-4 border text-primary bg-white border-appgray dark:focus:ring-appgray rounded focus:ring-3 focus:ring-primary-200 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 disabled:text-appblack"
        :required="parseDefaultField.required"
        :disabled="parseDefaultField.disabled"
      />
      <label
        :for="parseDefaultField.key"
        class="ml-2 mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {{ parseDefaultField.label }}
      </label>
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
import { computed } from "vue";
import { useField } from "vee-validate";

const props = defineProps({
  field: { type: Object, required: true },
});

const parseDefaultField = computed(() => {
  const inputFieldGrid = new InputFieldGrid({});
  const inputField = new InputField({});
  return { ...inputFieldGrid, ...inputField, ...props.field };
});

const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
  meta,
} = useField(props.field.key, undefined, {
  initialValue: props.field.value,
});
</script>