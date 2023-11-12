<template>
  <div
    class="flex items-center gap-4"
    :class="[
      align === 'left'
        ? 'justify-start'
        : align === 'right'
        ? 'justify-end'
        : 'justify-center',
    ]"
  >
    <font-awesome-icon icon="road" :class="[size, color]" />
    <span :class="[size, color]">E-VA</span>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    size: { type: String, default: "text-[60px]" },
    color: { type: String, default: "text-primary" },
    align: {
      type: String,
      default: "center",
      validator(value: String) {
        return ["left", "center", "right"].includes(value.toString());
      },
    },
  },
};
</script>