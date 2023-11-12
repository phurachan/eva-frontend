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
      <select
        :id="parseDefaultField.key"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:bg-disabled"
        @change="handleChange"
        @blur="handleBlur"
        :disabled="parseDefaultField.disabled"
      >
        <option
          v-for="child in parseDefaultField.children"
          :key="`option_${child.key}`"
          :value="child.value"
          :selected="inputValue == child.value"
        >
          {{ child.label }}
        </option>
      </select>
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
});

const parseDefaultField = computed(() => {
  const inputFieldGrid = new InputFieldGrid({});
  const inputField = new InputField({});
  return { ...inputFieldGrid, ...inputField, ...props.field };
});

const emit = defineEmits<{
  onChange: [value: any];
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

onMounted(() => {
});
</script>