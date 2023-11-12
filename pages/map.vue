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

    <!-- maps -->
    <iframe
      width="100%"
      height="800"
      style="border: 0"
      loading="lazy"
      allowfullscreen
      referrerpolicy="no-referrer-when-downgrade"
      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA8od3U-9l9TKtzHX03S_YJZm0X6_2P2Kw
    &q=Space+Needle,Seattle+WA"
    >
    </iframe>
  </div>
</template>


<script lang="ts">
export default {
  setup() {
    definePageMeta({
      layout: "back-office",
    });
  },
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
};
</script>