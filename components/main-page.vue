<template>
  <div>
    <!-- Header -->
    <div class="flex items-center justify-start gap-4">
      <font-awesome-icon
        :icon="currentMenu.icon ?? 'circle-dot'"
        :class="['text-2xl text-primary']"
      />
      <span class="text-xl py-2.5 text-primary">
        {{ currentMenu?.name ?? "รายการข้อมูล" }} ({{
          currentMenu?.subtitle ?? "รายการข้อมูล"
        }})</span
      >
    </div>
    <div class="pb-5">
      <hr class="h-1 bg-primary border-0 rounded" />
    </div>

    <!-- Data Chart 2 Grid -->
    <div class="grid grid-cols-3 gap-x-4 gap-y-4">
      <div class="mt-4">
        <ChartPie />
      </div>

      <div class="mt-4">
        <ChartLine />
      </div>

      <div class="mt-4">
        <ChartRadial />
      </div>
    </div>

    <!-- Data Chart full width -->
    <div class="w-full">
      <div class="mt-4">
        <ChartBar />
      </div>
    </div>
    <div class="w-full">
      <div class="mt-4">
        <ChartColumn />
      </div>
    </div>

    <!-- Data Table -->
    <div class="mt-12">
      <TableData />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  setup() {},
  mounted() {
    this.settingDataByPath();
  },
  data() {
    return {
      menuList: mockMenus,
      currentMenu: {} as any,
    };
  },
  methods: {
    settingDataByPath() {
      const currentPath = this.$route.path;

      this.menuList.find((e) => {
        const findChildMenu = e.children?.find(
          (child) => child.path == currentPath
        );
        if (!!findChildMenu) {
          this.currentMenu = { ...findChildMenu };
          return;
        }
        if (e.path == currentPath) {
          this.currentMenu = { ...e };
          return;
        }
      });
    },
  },
  watch: {
    $route(to, from) {
      this.settingDataByPath();
    },
  },
};
</script>