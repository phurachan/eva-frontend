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
      <div
        v-if="parseDefaultField.prefixIcon"
        class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
      >
        <font-awesome-icon
          :icon="parseDefaultField.prefixIcon"
          :class="['h-6 w-6 text-black-500']"
        />
      </div>
      <input
        type="text"
        :id="parseDefaultField.key"
        :value="inputValue"
        :class="[
          !!classList.length
            ? classList
            : 'w-full bg-white border border-gray-300 text-appblack text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 disabled:bg-disabled',
          !!parseDefaultField.prefixIcon
            ? 'pl-10'
            : !!parseDefaultField.suffixIcon
            ? 'pr-10'
            : '',
        ]"
        :placeholder="parseDefaultField.placeholder"
        :required="parseDefaultField.required"
        :disabled="parseDefaultField.disabled"
        @input="handleChange"
        @blur="handleBlur"
        :readonly="parseDefaultField.readonly"
      />
      <button
        v-if="parseDefaultField.suffixIcon"
        type="button"
        class="text-black absolute right-0 bottom-0.5 font-medium rounded-lg text-sm px-2 py-2"
        @click="onClickSuffix"
      >
        <font-awesome-icon
          :icon="parseDefaultField.suffixIcon"
          :class="['h-6 w-6 text-black-500']"
        />
      </button>
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
import { computed } from "vue";

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
  onComplete: [value: string];
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

function onClickSuffix() {
  emit("onClickSuffix", inputValue.value);
}
</script>

<style scoped>
</style>