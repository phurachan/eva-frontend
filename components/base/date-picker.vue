<template>
  <div>
    <label
      :for="parseDefaultField.key"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      {{ parseDefaultField.label }}
    </label>

    <!-- <div class="relative">
      <div
        class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none"
      >
        <UIBaseHeroIcon
          name="calendar-days"
          size="h-6 w-6"
          :color="textColor ? textColor : 'text-appblack'"
        />
      </div> -->
    <!-- <input
        datepicker
        type="text"
        :id="parseDefaultField.key"
        :value="inputValue"
        class="pl-12 p-2.5 bg-gray-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 disabled:bg-disabled"
        :placeholder="parseDefaultField.placeholder"
        :required="parseDefaultField.required"
        :disabled="parseDefaultField.disabled"
        @input="handleChange"
        @blur="handleBlur"
        :class="[
          parseDefaultField.width === 'half'
            ? 'w-[49%]'
            : parseDefaultField.width === 'full'
            ? 'w-full'
            : parseDefaultField.width,
          textColor,
          borderColor,
        ]"
      /> -->
    <div
      :class="[
        parseDefaultField.width === 'half'
          ? 'w-[49%]'
          : parseDefaultField.width === 'full'
          ? 'w-full'
          : parseDefaultField.width,
      ]"
    >
      <VueDatePicker
        local="th-TH"
        v-model="inputValue"
        :disabled="parseDefaultField.disabled"
      />
    </div>
    <!-- </div> -->

    <span
      class="inline text-sm text-red-500"
      v-show="errorMessage && meta.valid"
    >
      {{ errorMessage }}
    </span>
  </div>
</template>
  
<script setup lang="ts">
import { onMounted, computed } from "vue";
import { useField } from "vee-validate";
import VueDatePicker from "@vuepic/vue-datepicker";
import Datepicker from "flowbite-datepicker/Datepicker";
// import th from "flowbite-datepicker/locales/th";

const props = defineProps({
  field: { type: Object, required: true },
  textColor: {
    type: String,
    default: "text-appblack",
  },
  borderColor: {
    type: String,
    default: "border-disabled",
  },
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

onMounted(() => {
  inputValue.value = Datepicker.formatDate(
    new Date(parseDefaultField.value.value),
    "dd/mm/yyyy"
  );
  // const $datepickerEl = document.getElementById(parseDefaultField.value.key);
  // Object.assign(Datepicker.locales, th);
  // new Datepicker($datepickerEl, {
  //   autohide: true,
  //   format: "dd/mm/yyyy",
  //   language: "th",
  // });
});
</script>

<style>
.datepicker-cell.selected {
  background-color: #1482c1;
}
</style>