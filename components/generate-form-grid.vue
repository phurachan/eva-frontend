<template>
  <div class="grid mb-6 grid-cols-2 gap-x-8 gap-y-6">
    <div
      v-for="field in parseDefaultFields"
      :key="`field_${field.key}`"
      :class="{ 'col-span-2': field.flex === 'full' }"
    >
      <div v-if="field.type === 'text'">
        <BaseInputField
          :field="field"
          @onClickSuffix="onClickSuffix"
          @onInput="(value) => onChange(field.key, value)"
          @onComplete="(value) => onComplete(field.key, value)"
        />
      </div>
      <div v-else-if="field.type === 'radio'">
        <BaseRadio :field="field" />
      </div>
      <div v-else-if="field.type === 'checkbox'" class="w-full h-full">
        <BaseCheckbox :field="field" />
      </div>
      <div v-else-if="field.type === 'datepicker'">
        <ClientOnly fallback-tag="span" fallback="">
          <BaseDatePicker :field="field" />
        </ClientOnly>
      </div>
      <div v-else-if="field.type === 'dropdown'">
        <BaseDropdown :field="field" />
      </div>
      <div v-else-if="field.type === 'file'">
        <ClientOnly> <BaseInputFile :field="field" /></ClientOnly>
      </div>

      <div v-else-if="field.type === 'textarea'">
        <BaseTextarea :field="field" />
      </div>
      <div v-else></div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { onMounted, computed } from "vue";

const props = defineProps({
  fields: { type: Array<Object>, required: true },
});

const parseDefaultFields = computed(() => {
  const inputFieldGrid = new InputFieldGrid({});
  const inputField = new InputField({});
  return props.fields.map((e) => ({ ...inputFieldGrid, ...inputField, ...e }));
});

const emit = defineEmits<{
  onInit: [value: Object];
  onChange: [value: Object];
  onComplete: [value: Object];
  onClickSuffix: [value: string];
}>();

let valueState = useState<Object>("generateFormValues", () => ({}));

onMounted(() => {
  parseDefaultFields.value.map((e) => {
    valueState.value = {
      ...valueState.value,
      [e.key]: "",
    };
  });

  // emit("onInit", { handleSubmit: handleSubmit, errors: errors });
});

function onClickSuffix(value: string) {
  emit("onClickSuffix", value);
}

function onChange(key: string, value: string) {
  valueState.value = {
    ...valueState.value,
    [key]: value,
  };
  emit("onChange", { keyChange: key, data: valueState.value });
}

function onComplete(key: string, value: string) {
  valueState.value = {
    ...valueState.value,
    [key]: value,
  };
  emit("onComplete", { keyChange: key, data: valueState.value });
}
</script>