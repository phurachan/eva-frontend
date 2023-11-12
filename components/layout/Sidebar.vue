<template>
  <div>
    <aside
      id="logo-sidebar"
      class="fixed top-0 left-0 z-40 w-80 h-screen transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidebar"
    >
      <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <base-logo size="text-[40px]" align="left"></base-logo>
        <ul class="space-y-2 font-medium pt-4">
          <li v-for="(menu, index) in menuList" :key="`menu_${index}`">
            <button
              v-if="!!menu.children?.length"
              type="button"
              class="w-full flex items-center p-2 text-appgray rounded-lg hover:bg-gray-100 group"
              :class="
                menuActive.startsWith(menu.path ?? '')
                  ? 'text-primary'
                  : 'text-appgray'
              "
              :aria-controls="`dropdown-collapse-${menu.name}`"
              :data-collapse-toggle="`dropdown-collapse-${menu.name}`"
              @click="() => onToggleMenu(menu)"
            >
              <font-awesome-icon
                :icon="menu.icon"
                :class="[
                  'text-xl',
                  menuActive.startsWith(menu.path ?? '')
                    ? 'text-primary'
                    : 'text-appgray',
                ]"
              />
              <span class="ml-3 line-clamp-3 text-start">{{ menu.name }}</span>
              <div class="grow text-end">
                <font-awesome-icon
                  :icon="
                    toggleMenus.includes(menu.path ?? '')
                      ? 'chevron-down'
                      : 'chevron-right'
                  "
                  :class="[
                    'text-xl',
                    menuActive === menu.path ? 'text-primary' : 'text-appgray',
                  ]"
                />
              </div>
            </button>
            <button
              v-else
              type="button"
              class="w-full flex items-center p-2 text-appgray rounded-lg hover:bg-gray-100 group"
              :class="
                menuActive === menu.path ? 'text-primary' : 'text-appgray'
              "
              @click="() => onSelectMenu(menu)"
            >
              <font-awesome-icon
                :icon="menu.icon"
                :class="[
                  'text-xl',
                  menuActive === menu.path ? 'text-primary' : 'text-appgray',
                ]"
              />
              <span class="ml-3 line-clamp-3 text-start">{{ menu.name }}</span>
            </button>
            <template v-if="!!menu.children?.length">
              <ul
                :id="`dropdown-collapse-${menu.name}`"
                class="py-2 space-y-2"
                :class="{
                  hidden: !toggleMenus.includes(menu.path ?? ''),
                }"
              >
                <li
                  v-for="(menuChild, indexChild) in menu.children"
                  :key="`menuChild_${indexChild}`"
                >
                  <button
                    type="button"
                    class="w-full flex items-start p-2 rounded-lg hover:bg-gray-100 group"
                    :class="
                      menuActive === menuChild.path
                        ? 'text-primary'
                        : 'text-appgray'
                    "
                    @click="() => onSelectMenu(menuChild)"
                  >
                    <font-awesome-icon
                      icon="circle-dot"
                      :class="[
                        'pt-1 ml-6 text-sm',
                        menuActive.startsWith(menu.path ?? '')
                          ? 'text-primary'
                          : 'text-appgray',
                      ]"
                    />
                    <span class="ml-2 line-clamp-3 text-start">{{ menuChild.name }}</span>
                  </button>
                </li>
              </ul>
            </template>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<script lang="ts">
export default {
  async setup() {
    const globalProfileCookie = useCookie<any>("globalProfile");

    return { globalProfileCookie };
  },
  data() {
    return {
      menuActive: "",
      toggleMenus: [] as Array<String>,
    };
  },
  computed: {
    menuList() {
      return mockMenus ?? [];
    },
  },
  mounted() {
    this.menuActive = location.pathname;
    const findMenuActive = this.menuList.find(
      (m: any) => !!m.children?.find((mc: any) => mc.path === location.pathname)
    );
    if (findMenuActive) {
      this.toggleMenus.push(findMenuActive.path ?? "");
    }
  },
  methods: {
    logout() {
      this.globalProfileCookie = undefined;

      navigateTo("/login");
    },
    onSelectMenu(menu: any) {
      this.menuActive = menu.path ?? "";

      navigateTo(menu.path);
    },
    onToggleMenu(menu: any) {
      if (this.toggleMenus.includes(menu.path ?? "")) {
        const findIndex = this.toggleMenus.indexOf(menu.path ?? "");
        this.toggleMenus.splice(findIndex, 1);
      } else {
        this.toggleMenus.push(menu.path ?? "");
      }
    },
  },
};
</script>