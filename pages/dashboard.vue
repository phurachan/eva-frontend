<template>
  <div>
    <div
      class="flex items-start justify-between pb-4 border-b-[3px] border-b-primary rounded-t dark:border-gray-600"
    >
      <h3 class="pt-2 text-xl font-semibold text-primary dark:text-white">
        Dashboard
      </h3>
    </div>
    <div class="grid grid-cols-3 py-10 gap-y-4 gap-x-4">
      <div class="col-span-3">
        <a
          href="#"
          class="block p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h3 class="text-lg font-semibold text-primary dark:text-white">
            Variable Message Sign
          </h3>
          <p class="pt-2 text-appgray">
            ระบบป้ายปรับเปลี่ยนข้อความ แสดงข้อมูลต่างๆ แนะนำและเตือนผู้ใช้ทาง
            เพื่อให้สามารถใช้ทางได้อย่างสะดวก และปลอดภัยตลอดการเดินทาง
          </p>
        </a>
      </div>
      <div class="col-span-2 grid grid-cols-2 gap-y-4 gap-x-4">
        <div class="col-span-2">
          <div class="h-full grid grid-cols-2 gap-y-4 gap-x-4">
            <a
              href="#"
              class="block p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <div class="grid grid-cols-3 items-center">
                <div class="col-1">
                  <ChartDonut id="contractOld" :percent="(500 / 1000) * 100" />
                </div>
                <div class="col-span-2 flex items-center">
                  <div class="flex-col">
                    <span class="text-appblack">จำนวนการส่งข้อความขึ้นป้าย vms / lms</span>
                    <div class="flex pt-2">
                      <span class="text-primary text-xl">500 / </span
                      ><span class="text-appgray text-xl">1,000 </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="#"
              class="block p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <div class="grid grid-cols-3 items-center">
                <div class="col-1">
                  <ChartDonut id="contractNew" :percent="(100 / 1000) * 100" />
                </div>

                <div class="col-span-2">
                  <div class="flex-col">
                    <span class="text-appblack">จำนวนรถที่ความเร็วเกินกำหนด</span>
                    <div class="flex pt-2">
                      <span class="text-primary text-xl">100 / </span
                      ><span class="text-appgray text-xl">1,000 </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="col-span-2">
          <ChartArea />
        </div>
      </div>

      <div class="glow h-full">
        <div
          class="h-full block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <div
            class="flex items-center justify-start gap-2 pb-4 border-b-[3px] border-b-primary rounded-t dark:border-gray-600"
          >
            <font-awesome-icon
              icon="calendar"
              :class="['h-4 w-4 text-primary']"
            />
            <h3 class="font-semibold text-primary dark:text-white">
              รายการนัดหมาย
            </h3>
          </div>
          <div class="pt-4">
            <ClientOnly fallback-tag="span" fallback="">
              <BaseDatePicker
                :field="{ key: 'eventDatepicker' }"
                text-color="text-primary"
                border-color="border-primary"
              />
            </ClientOnly>
          </div>

          <div class="grid grid-cols-1 gap-y-4 pt-4">
            <a
              v-for="event in dataEventList"
              :key="`event_${event.no}`"
              href="#"
              class="block p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <div
                class="flex items-center justify-start gap-2 pb-4 border-b-[3px] border-b-primary rounded-t dark:border-gray-600"
              >
                <h3 class="font-semibold text-primary dark:text-white">
                  {{ event.date }} | {{ event.time }}
                </h3>
              </div>
              <span class="text-appblack block pt-4">{{ event.name }}</span>
              <span class="text-appblack block pt-2"
                >เวลา : {{ event.time }}</span
              >
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { faChartArea } from "@fortawesome/free-solid-svg-icons";

definePageMeta({
  layout: "back-office",
});

/// mock data list in evets
const dataEventList = [
  {
    no: "01",
    name: "ตรวจสอบ ป้ายประชาสัมพันธ์",
    date: "27/10/66",
    time: "10:00",
  },
  {
    no: "02",
    name: "ตรวจสอบ เครื่องวัดสภาพอากาศ",
    date: "27/10/66",
    time: "10:00",
  },
  {
    no: "03",
    name: "ตรวจสอบ กล้องตรวจจับความเร็ว",
    date: "27/10/66",
    time: "10:00",
  },
];
</script>