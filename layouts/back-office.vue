<template>
  <div>
    <LayoutNavbar />
    <LayoutSidebar />
    <div class="p-4 ml-80">
      <div class="p-4 mt-14">
        <slot></slot>
      </div>
    </div>

    <BaseAlertModal />

    <div class="p-4 ml-80">
      <footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4 mb-2">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <hr
            class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
          />
          <span
            class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"
            >© <a href="/" class="hover:underline">E-VA</a>, All Right Reserved.
            Designed By Network Link</span
          >
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
</script>