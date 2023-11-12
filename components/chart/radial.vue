<template>
  <a
    class="block h-full p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
  >
    <div class="flex justify-between mb-3">
      <div class="flex items-center">
        <div class="flex justify-center items-center">
          <h5
            class="text-xl font-bold leading-none text-gray-900 dark:text-white pe-1"
          >
            ความคืบหน้า
          </h5>
          <svg
            data-popover-target="chart-info"
            data-popover-placement="bottom"
            class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer ms-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm0 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm1-5.034V12a1 1 0 0 1-2 0v-1.418a1 1 0 0 1 1.038-.999 1.436 1.436 0 0 0 1.488-1.441 1.501 1.501 0 1 0-3-.116.986.986 0 0 1-1.037.961 1 1 0 0 1-.96-1.037A3.5 3.5 0 1 1 11 11.466Z"
            />
          </svg>
          <div
            data-popover
            id="chart-info"
            role="tooltip"
            class="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400"
          >
            <div class="p-3 space-y-2">
              <h3 class="font-semibold text-gray-900 dark:text-white">
                การเจริญเติบโต - เพิ่มขึ้น
              </h3>
              <p>
                รายงานช่วยนำทางการเติบโตสะสมของชุมชน กิจกรรม. ตามหลักการแล้ว
                กราฟควรมีแนวโน้มเพิ่มขึ้น เช่น
                แผนภูมิที่ซบเซาบ่งบอกถึงการลดลงอย่างมีนัยสำคัญของชุมชน กิจกรรม.
              </p>
              <h3 class="font-semibold text-gray-900 dark:text-white">
                การคำนวณ
              </h3>
              <p>
                สำหรับกลุ่มวันที่แต่ละรายการ ปริมาณกิจกรรมตลอดเวลาจะเท่ากับ
                คำนวณ ซึ่งหมายความว่ากิจกรรมในช่วงเวลา n มีทั้งหมด
                กิจกรรมจนถึงช่วง n บวกกับกิจกรรมที่สร้างขึ้นโดย
                ชุมชนของคุณในช่วงเวลา
              </p>
              <a
                href="#"
                class="flex items-center font-medium text-blue-600 dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700 hover:underline"
                >อ่านเพิ่มเติม
                <svg
                  class="w-2 h-2 ms-1.5 rtl:rotate-180"
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
            <div data-popper-arrow></div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
      <div class="grid grid-cols-3 gap-3 mb-2">
        <dl
          class="bg-orange-50 dark:bg-gray-600 rounded-lg flex flex-col items-center justify-center h-[78px]"
        >
          <dt
            class="w-8 h-8 rounded-full bg-orange-100 dark:bg-gray-500 text-orange-600 dark:text-orange-300 text-sm font-medium flex items-center justify-center mb-1"
          >
            12
          </dt>
          <dd class="text-orange-600 dark:text-orange-300 text-sm font-medium">
            ที่ต้องทำ
          </dd>
        </dl>
        <dl
          class="bg-teal-50 dark:bg-gray-600 rounded-lg flex flex-col items-center justify-center h-[78px]"
        >
          <dt
            class="w-8 h-8 rounded-full bg-teal-100 dark:bg-gray-500 text-teal-600 dark:text-teal-300 text-sm font-medium flex items-center justify-center mb-1"
          >
            23
          </dt>
          <dd class="text-teal-600 dark:text-teal-300 text-sm font-medium">
            กำลังดำเนินการ
          </dd>
        </dl>
        <dl
          class="bg-blue-50 dark:bg-gray-600 rounded-lg flex flex-col items-center justify-center h-[78px]"
        >
          <dt
            class="w-8 h-8 rounded-full bg-blue-100 dark:bg-gray-500 text-blue-600 dark:text-blue-300 text-sm font-medium flex items-center justify-center mb-1"
          >
            64
          </dt>
          <dd class="text-blue-600 dark:text-blue-300 text-sm font-medium">
            เสร็จสิ้น
          </dd>
        </dl>
      </div>
      <button
        data-collapse-toggle="more-details"
        type="button"
        class="hover:underline text-xs text-gray-500 dark:text-gray-400 font-medium inline-flex items-center"
      >
        แสดงรายละเอียดทั้งหมด
        <svg
          class="w-2 h-2 ms-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      <div
        id="more-details"
        class="border-gray-200 border-t dark:border-gray-600 pt-3 mt-3 space-y-2 hidden"
      >
        <dl class="flex items-center justify-between">
          <dt class="text-gray-500 dark:text-gray-400 text-sm font-normal">
            อัตราความสำเร็จของงานโดยเฉลี่ย:
          </dt>
          <dd
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
            57%
          </dd>
        </dl>
        <dl class="flex items-center justify-between">
          <dt class="text-gray-500 dark:text-gray-400 text-sm font-normal">
            วันจนกว่าการวิ่งจะสิ้นสุด:
          </dt>
          <dd
            class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-gray-600 dark:text-gray-300"
          >
            13 วัน
          </dd>
        </dl>
        <dl class="flex items-center justify-between">
          <dt class="text-gray-500 dark:text-gray-400 text-sm font-normal">
            การประชุมถัดไป:
          </dt>
          <dd
            class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-gray-600 dark:text-gray-300"
          >
            วันอังคาร
          </dd>
        </dl>
      </div>
    </div>

    <!-- Radial Chart -->
    <div class="py-6" id="radial-chart"></div>

    <div
      class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between"
    >
      <div class="flex justify-between items-center pt-5">
        <!-- filter date -->
        <ChartFilterDate id="filterRadialChart" />

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
      const getChartOptions = () => {
        return {
          series: [90, 85, 70],
          colors: ["#1C64F2", "#16BDCA", "#FDBA8C"],
          chart: {
            height: "380px",
            width: "100%",
            type: "radialBar",
            sparkline: {
              enabled: true,
            },
          },
          plotOptions: {
            radialBar: {
              track: {
                background: "#E5E7EB",
              },
              dataLabels: {
                show: false,
              },
              hollow: {
                margin: 0,
                size: "32%",
              },
            },
          },
          grid: {
            show: false,
            strokeDashArray: 4,
            padding: {
              left: 2,
              right: 2,
              top: -23,
              bottom: -20,
            },
          },
          labels: ["เสร็จสิ้น", "กำลังดำเนินการ", "ที่ต้องทำ"],
          legend: {
            show: true,
            position: "bottom",
            fontFamily: "Sarabun",
          },
          tooltip: {
            enabled: true,
            x: {
              show: false,
            },
          },
          yaxis: {
            show: false,
            labels: {
              formatter: function (value: any) {
                return value + "%";
              },
            },
          },
        };
      };

      if (
        document.getElementById("radial-chart") &&
        typeof ApexCharts !== "undefined"
      ) {
        var chart = new ApexCharts(
          document.querySelector("#radial-chart"),
          getChartOptions()
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
  