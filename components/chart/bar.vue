<template>
  <a
    class="block h-full p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
  >
    <div
      class="flex justify-between border-gray-200 border-b dark:border-gray-700 pb-3"
    >
      <dl>
        <dt class="text-base font-normal text-gray-500 dark:text-gray-400 pb-1">
          กำไร
        </dt>
        <dd
          class="leading-none text-3xl font-bold text-gray-900 dark:text-white"
        >
          $5,405
        </dd>
      </dl>
      <div>
        <span
          class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-green-900 dark:text-green-300"
        >
          <svg
            class="w-2.5 h-2.5 me-1.5"
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
          อัตรากำไร 23.5%
        </span>
      </div>
    </div>

    <div class="grid grid-cols-2 py-3">
      <dl>
        <dt class="text-base font-normal text-gray-500 dark:text-gray-400 pb-1">
          รายได้
        </dt>
        <dd
          class="leading-none text-xl font-bold text-green-500 dark:text-green-400"
        >
          $23,635
        </dd>
      </dl>
      <dl>
        <dt class="text-base font-normal text-gray-500 dark:text-gray-400 pb-1">
          ค่าใช้จ่าย
        </dt>
        <dd
          class="leading-none text-xl font-bold text-red-600 dark:text-red-500"
        >
          -$18,230
        </dd>
      </dl>
    </div>

    <div id="bar-chart"></div>
    <div
      class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between"
    >
      <div class="flex justify-between items-center pt-5">
        <!-- filter date -->
        <ChartFilterDate id="filterBarChart" />
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
      var options = {
        series: [
          {
            name: "รายได้",
            color: "#31C48D",
            data: ["1420", "1620", "1820", "1420", "1650", "2120"],
          },
          {
            name: "ค่าใช้จ่าย",
            data: ["788", "810", "866", "788", "1100", "1200"],
            color: "#F05252",
          },
        ],
        chart: {
          sparkline: {
            enabled: false,
          },
          type: "bar",
          width: "100%",
          height: 400,
          toolbar: {
            show: false,
          },
        },
        fill: {
          opacity: 1,
        },
        plotOptions: {
          bar: {
            horizontal: true,
            columnWidth: "100%",
            borderRadiusApplication: "end",
            borderRadius: 6,
            dataLabels: {
              position: "top",
            },
          },
        },
        legend: {
          show: true,
          position: "bottom",
        },
        dataLabels: {
          enabled: false,
        },
        tooltip: {
          shared: true,
          intersect: false,
          formatter: function (value: any) {
            return "$" + value;
          },
        },
        xaxis: {
          labels: {
            show: true,
            style: {
              fontFamily: "Sarabun",
              cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
            },
            formatter: function (value: any) {
              return "$" + value;
            },
          },
          categories: ["มิ.ย.", "ส.ค.", "ก.ย.", "ตุ.ค.", "พ.ย.", "ธ.ค."],
          axisTicks: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
        },
        yaxis: {
          labels: {
            show: true,
            style: {
              fontFamily: "Sarabun",
              cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
            },
          },
        },
        grid: {
          show: true,
          strokeDashArray: 4,
          padding: {
            left: 2,
            right: 2,
            top: -20,
          },
        },
      };

      if (
        document.getElementById("bar-chart") &&
        typeof ApexCharts !== "undefined"
      ) {
        const chart = new ApexCharts(
          document.getElementById("bar-chart"),
          options
        );
        chart.render();
      }
    },
  },
  watch: {
    $route(to, from) {
      //   this.createChart();
    },
  },
};
</script>
  