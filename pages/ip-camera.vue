<template>
  <div>
    <!-- Header -->
    <div class="grid grid-cols-3">
      <div class="col-span-2">
        <div class="flex items-center justify-start gap-4">
          <font-awesome-icon
            :icon="currentMenu.icon ?? 'circle-dot'"
            :class="['text-2xl text-primary']"
          />
          <span class="text-xl py-2.5 text-primary">
            {{ currentMenu?.name ?? "รายการข้อมูล" }} ({{
              currentMenu?.subtitle ?? "รายการข้อมูล"
            }})
          </span>
        </div>
      </div>
      <div class="col-1 pr-2">
        <div class="flex items-center justify-end gap-4">
          <button type="button" @click="() => (layoutState = 'focus')">
            <font-awesome-icon
              icon="square"
              :class="[
                'text-2xl',
                layoutState == 'focus' ? 'text-primary' : 'text-appblack',
              ]"
            />
          </button>
          <button type="button" @click="() => (layoutState = 'grid')">
            <font-awesome-icon
              icon="grip"
              :class="[
                'text-2xl',
                layoutState == 'grid' ? 'text-primary' : 'text-appblack',
              ]"
            />
          </button>
        </div>
      </div>
    </div>
    <div class="pb-5">
      <hr class="h-1 bg-primary border-0 rounded" />
    </div>

    <!-- cameras -->
    <div v-show="layoutState == 'focus'" class="grid gap-4">
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
          alt=""
        />
      </div>
      <div class="grid grid-cols-5 gap-4">
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
            alt=""
          />
        </div>
      </div>
    </div>

    <div
      v-show="layoutState == 'grid'"
      class="grid grid-cols-2 md:grid-cols-3 gap-4"
    >
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  setup() {
    const layoutState = useState<String>("layout", () => "focus");
    definePageMeta({
      layout: "back-office",
    });

    return { layoutState };
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