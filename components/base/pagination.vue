<template>
  <div class="w-full p-5 flex align-center justify-center">
    <nav v-if="btnPageCount > 0" aria-label="Pagination">
      <ul class="flex items-center -space-x-px h-10 text-base gap-2">
        <li>
          <button
            type="button"
            class="flex items-center justify-center px-2 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            @click="onClickPrev"
          >
            <font-awesome-icon
              icon="chevron-left"
              :class="['w-5 h-5 text-black']"
            />
          </button>
        </li>
        <li v-if="currentRangeBtnPage.slice(0)[0] > 1">
          <button
            type="button"
            class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            @click="() => onChangePage(1)"
          >
            1
          </button>
        </li>
        <li v-if="currentRangeBtnPage.slice(0)[0] > 1">
          <div
            class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
          >
            . . .
          </div>
        </li>
        <li v-for="page in currentRangeBtnPage" :key="`page_${page}`">
          <button
            type="button"
            class="flex items-center justify-center px-4 h-10 leading-tight border border-gray-300 rounded-md"
            :class="[
              currentPage === page
                ? 'bg-primary text-white hover:opacity-75 hover:text-white'
                : 'bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700',
            ]"
            @click="() => onChangePage(page)"
          >
            {{ page }}
          </button>
        </li>
        <li v-if="allBtnPageCount > currentRangeBtnPage.slice(-1)[0]">
          <div
            class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white"
          >
            . . .
          </div>
        </li>
        <li v-if="allBtnPageCount > currentRangeBtnPage.slice(-1)[0]">
          <button
            type="button"
            class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            @click="() => onChangePage(allBtnPageCount)"
          >
            {{ allBtnPageCount }}
          </button>
        </li>
        <li>
          <button
            type="button"
            class="flex items-center justify-center px-2 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            @click="onClickNext"
          >
            <font-awesome-icon
              icon="chevron-right"
              :class="['w-5 h-5 text-black']"
            />
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>


<script setup lang="ts">
import { onMounted } from "vue";

const props = defineProps({
  key: { type: String, default: () => Date.now().toLocaleString() },
  page: { type: Number, default: () => 1 },
  size: { type: Number, default: () => 10 },
  count: { type: Number, default: () => 0 },
  maxButtonCount: { type: Number, default: () => 5 },
});

let currentPage = useState<number>(
  `basePaginationCurrentPage_${props.key}`,
  () => 1
);
let currentRangeBtnPage = useState<number[]>(
  `basePaginationCurrentRangeBtnPage_${props.key}`,
  () => []
);
let btnPageCount = useState<number>(
  `basePaginationBtnPageCount_${props.key}`,
  () => 5
);
let allBtnPageCount = useState<number>(
  `basePaginationAllBtnPageCount_${props.key}`,
  () => 0
);

const emit = defineEmits<{
  onChangePage: [page: number];
}>();

onMounted(() => {
  currentPage.value = props.page;
  const countPage = props.count / props.size;
  allBtnPageCount.value = parseInt(countPage.toString());
  if (props.count % props.size > 0) {
    allBtnPageCount.value = allBtnPageCount.value + 1;
  }
  // console.log("buttonPageCount: ", allBtnPageCount.value);

  btnPageCount.value =
    allBtnPageCount.value < props.maxButtonCount
      ? allBtnPageCount.value
      : props.maxButtonCount;

  setRangeBtnPage();
});

function setRangeBtnPage() {
  currentRangeBtnPage.value = [];

  let indexCenter = (btnPageCount.value / 2) | 0;
  let pageStart = currentPage.value - indexCenter;
  let pageEnd = currentPage.value + (btnPageCount.value - indexCenter);

  if (pageStart < 1) {
    pageEnd = pageEnd + pageStart * -1;
    pageStart = 1;
  } else {
    pageEnd = pageEnd - 1;
  }

  if (pageEnd > allBtnPageCount.value) {
    pageStart = pageStart - (pageEnd - allBtnPageCount.value);
    pageEnd = allBtnPageCount.value;
  }

  for (let page = pageStart; page <= pageEnd; page++) {
    currentRangeBtnPage.value.push(page);
  }
}

function onClickPrev() {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
  console.log("onClickPrev: ", currentPage.value);
  setRangeBtnPage();
  emit("onChangePage", currentPage.value);
}

function onClickNext() {
  if (currentPage.value < allBtnPageCount.value) {
    currentPage.value++;
  }
  console.log("onClickNext: ", currentPage.value);
  setRangeBtnPage();
  emit("onChangePage", currentPage.value);
}

function onChangePage(page: number) {
  currentPage.value = page;
  console.log("onChangePage: ", currentPage.value);
  setRangeBtnPage();
  emit("onChangePage", currentPage.value);
}
</script>