<template>
  <div class="py-6" :id="id"></div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import ApexCharts from "apexcharts";

const props = defineProps({
  id: { type: String, default: "defaultChartDonut" },
  percent: { type: [String, Number] , required: true, default: () => 0 },
});

onMounted(() => {
  const $targetEl = document.getElementById(props.id);

  if ($targetEl) {
    const chart = new ApexCharts($targetEl, getChartOptions());
    chart.render();
  }
});

function getChartOptions() {
  return {
    series: [Number(props.percent), 100 - Number(props.percent)],
    colors: ["#1482C1", "#EEEEEE"],
    chart: {
      height: 120,
      width: "100%",
      type: "donut",
    },
    stroke: {
      colors: ["#EEEEEE"],
      lineCap: "",
    },
    plotOptions: {
      pie: {
        donut: {
          size: "70%",
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: false,
  };
}
</script>