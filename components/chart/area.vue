<template>
  <a
    class="block h-full p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
  >
    <div class="flex justify-between">
      <div>
        <h5
          class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2"
        >
          32.4k
        </h5>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">
          ปริมาณรถ
        </p>
      </div>
      <div
        class="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center"
      >
        12%
        <svg
          class="w-3 h-3 ms-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13V1m0 0L1 5m4-4 4 4"
          />
        </svg>
      </div>
    </div>
    <div id="area-chart"></div>
    <div
      class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between"
    >
      <div class="flex justify-between items-center pt-5">
        <!-- filter date -->
        <ChartFilterDate id="filterAreaChart" />

        <a
          href="#"
          class="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2"
        >
          ดูรายละเอียด
          <svg
            class="w-2.5 h-2.5 ms-1.5 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </a>
      </div>
    </div>
  </a>
</template>
  
<script lang="ts">
import ApexCharts from "apexcharts";

export default {
  mounted() {
    this.createChart();
  },
  methods: {
    createChart() {
      // ApexCharts options and config
      // window.addEventListener("load", function () {
      let options = {
        chart: {
          height: "100%",
          maxWidth: "100%",
          type: "area",
          fontFamily: "Sarabun",
          dropShadow: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        tooltip: {
          enabled: true,
          x: {
            show: false,
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.55,
            opacityTo: 0,
            shade: "#1C64F2",
            gradientToColors: ["#1C64F2"],
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 6,
        },
        grid: {
          show: false,
          strokeDashArray: 4,
          padding: {
            left: 2,
            right: 2,
            top: 0,
          },
        },
        series: [
          {
            name: "ปริมาณรถ",
            data: [6500, 6418, 6456, 6526, 6356, 6456],
            color: "#1A56DB",
          },
        ],
        xaxis: {
          categories: [
            "01 กุมภาพันธ์",
            "02 กุมภาพันธ์",
            "03 กุมภาพันธ์",
            "04 กุมภาพันธ์",
            "05 กุมภาพันธ์",
            "06 กุมภาพันธ์",
            "07 กุมภาพันธ์",
          ],
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          show: false,
        },
      };

      if (
        document.getElementById("area-chart") &&
        typeof ApexCharts !== "undefined"
      ) {
        const chart = new ApexCharts(
          document.getElementById("area-chart"),
          options
        );
        chart.render();
      }
    },
  },
  watch: {
    $route(to, from) {
      // this.createChart();
    },
  },
};
</script>
  