
<template>
  <div>
    <table
      class="table-auto w-full rounded bg-white border-separate border-spacing-y-[12px]"
    >
      <thead class="text-xs text-white uppercase bg-primary rounded-md">
        <tr class="rounded-md">
          <th
            v-for="(option, index) in parseDefaultOptions"
            :key="`th_${option.field}`"
            scope="col"
            class="px-1 py-3 border-y-2"
            :class="[
              {
                'rounded-l-md border-l-2': index == 0,
                'rounded-r-md border-r-2': index == parseDefaultOptions.length - 1,
              },
              option.width,
              option.headerAlign
            ]"
          >
            {{ option.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="bg-white rounded-xl border-2 border-gray hover:bg-gray-50"
          v-for="(item, index) in dataList"
          :key="`data_${index}`"
        >
          <td
            v-for="(option, optionIndex) in parseDefaultOptions"
            :key="`td_${option.field}`"
            class="w-4 p-1 border-y-2 border-gray"
            :class="{
              'rounded-l-md border-l-2': optionIndex == 0,
              'rounded-r-md border-r-2': optionIndex == parseDefaultOptions.length - 1,
            }"
          >
            <template v-if="$slots[option.field]">
              <slot
                :name="option.field"
                :key="`option_${index}`"
                :data="{...item, index: index}"
              ></slot>
            </template>
            <div
              v-else-if="option.field && item[option.field]"
              :key="`option_${index}`"
              :class="option.dataAlign"
            >
              {{ item[option.field] }}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
  
<script setup lang="ts">
import { onMounted, computed } from "vue";

const props = defineProps({
  options: { type: Array<Object>, required: true },
  dataList: { type: Array<any>, default: () => [] },
});

const parseDefaultOptions = computed(() => {
  const tableOption = new TableOption({});
  return props.options.map((e: any) => ({ ...tableOption, ...e }));
});

const emit = defineEmits<{
  //   onClickSuffix: [value: string];
  //   onInput: [value: string];
}>();

// let value = useState("value", () => "");

onMounted(() => {
  //   value = props.field.value;
});

// function onInput($event) {
//   value = $event.target.value;
//   emit("onInput", value);
// }

// function onClickSuffix() {
//   emit("onClickSuffix", value);
// }
</script>