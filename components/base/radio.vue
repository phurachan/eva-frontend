<template>
  <div>
    <label
      :for="parseDefaultField.key"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      {{ parseDefaultField.label }}
    </label>

    <div class="flex gap-8 pl-5">
      <div
        v-for="option in parseDefaultField.children"
        :key="`field_${parseDefaultField.key}_option_${option.key}`"
        class="items-center mb-4"
      >
        <input
          :checked="option.key == inputValue"
          :id="option.key"
          type="radio"
          :value="inputValue"
          @input="handleChange"
          @blur="handleBlur"
          :name="parseDefaultField.key"
          class="w-4 h-4 text-primary bg-white border-appgray focus:ring-primary-200 dark:focus:ring-appgray dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 disabled:text-appblack"
          :disabled="parseDefaultField.disabled"
        />
        <label
          :for="option.key"
          class="ml-2 text-sm font-medium text-appblack dark:text-gray-300"
        >
          {{ option.label }}
        </label>
      </div>
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
import { onMounted, computed } from "vue";
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

onMounted(() => {});
</script>