<template>
  <div>
    <nav
      class="fixed md:pl-80 top-0 z-30 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="grid grid-cols-6 px-3 py-3 lg:px-5 lg:pl-3">
        <div class="col-span-5">
          <div class="h-full flex items-center justify-start">
            <button
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span class="sr-only">Open sidebar</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>

            <BaseDropdown :field="field" />
          </div>
        </div>
        <div class="col-1">
          <div class="h-full flex items-center justify-end">
            <div class="flex items-center ml-3">
              <div>
                <button
                  type="button"
                  class="flex items-center gap-2 text-sm bg-transparent rounded-full focus:ring-2 focus:ring-primary-50 pr-2"
                  aria-expanded="false"
                  data-dropdown-toggle="dropdown-user"
                >
                  <span class="sr-only">Open user menu</span>
                  <BaseAvatar
                    key="avatarAddSugarcaneFarmer"
                    label="อัพโหลดรูปภาพ"
                    src=""
                    size="w-8 h-8"
                    :preview="true"
                  />
                  <div
                    class="text-sm text-gray-900 dark:text-white"
                    role="none"
                  >
                    {{ dataProfile?.username ?? "e-va" }}
                  </div>
                  <div>
                    <font-awesome-icon
                      icon="chevron-down"
                      :class="['w-4 h-4 text-black']"
                    />
                  </div>
                </button>
              </div>
              <div
                class="w-48 z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                id="dropdown-user"
              >
                <ul class="py-1" role="none">
                  <li>
                    <a
                      href="/profile"
                      class="w-full block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                      >โปรไฟล์</a
                    >
                  </li>
                  <li>
                    <button
                      class="w-full block px-4 py-2 text-sm text-gray-700 text-start hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      @click="logout"
                    >
                      ออกจากระบบ
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
export default {
  async setup() {
    const globalProfileDataCookie = useCookie<any>("globalProfileData");
    const dataProfile = globalProfileDataCookie.value;

    return { dataProfile, globalProfileDataCookie };
  },
  data() {
    return {
      field: {
        key: "projectCode",
        width: "w-full",
        label: "",
        type: "dropdown",
        value: "1",
        children: [
          {
            key: "1",
            label:
              "โครงการ1 ก่อสร้างกำแพงคอนกรีต สาย รย.1035 แยก ทล. 3 - นิคมอุตสาหกรรมมาบตาพุด  อ.บ้านฉาง  จ.ระยอง",
            value: "1",
          },
          {
            key: "2",
            label:
              "โครงการ2 ก่อสร้างกำแพงคอนกรีต สาย รย.1035 แยก ทล. 3 - นิคมอุตสาหกรรมมาบตาพุด  อ.บ้านฉาง  จ.ระยอง",
            value: "2",
          },
        ],
      },
    };
  },
  mounted() {},
  methods: {
    logout() {
      this.globalProfileDataCookie = null;

      setTimeout(() => navigateTo("/login"), 800);
    },
  },
};
</script>