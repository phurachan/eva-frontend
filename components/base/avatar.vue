<template>
  <div>
    <div class="flex items-center gap-10">
      <div
        class="rounded-full border-solid bg-[#D9D9D9] flex items-center justify-center p-2"
        :class="[size]"
      >
        <font-awesome-icon icon="user" :class="[size, 'text-appgray']" />
        <img
          v-if="!!srcFileState"
          :src="srcFileState"
          class="object-cover rounded-full"
        />
      </div>
      <template v-if="!preview">
        <button
          type="button"
          class="flex gap-2 items-center text-[#1482C1] bg-white border border-[#1482C1] focus:outline-none hover:bg-gray-100 focus:ring-1 focus:ring-[#1482C1] font-medium rounded-lg text-sm px-5 py-2.5 mr-2"
          @click="onClick"
        >
          <font-awesome-icon
            icon="arrow-up"
            :class="['h-4 w-4 text-white-500']"
          />
          {{ label }}
        </button>
        <input :id="key" type="file" class="hidden" @change="onChange" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

const props = defineProps({
  key: { type: String, default: () => "avatarUpload" },
  label: { type: String, default: () => "อัพโหลด" },
  src: { type: String, default: () => "" },
  preview: { type: Boolean, default: () => false },
  size: { type: String, default: () => "w-[120px] h-[120px]" },
});

let valueState = useState<any>("baseAvatarFileSeleced", () => "");
let srcFileState = useState<any>("baseAvatarFileSrcFile", () => "");

const emit = defineEmits<{
  onChange: [value: any];
}>();

onMounted(() => {
  srcFileState.value = props.src;
});

function onClick() {
  const ele = document.getElementById(props.key);
  ele?.click();
}

function onChange($event: any) {
  if (!!$event.target?.files?.length) {
    valueState.value = $event.target.files[0];
    readFile(valueState.value);

    emit("onChange", {
      file: valueState.value,
    });
  }
}

function readFile(file: File) {
  const reader = new FileReader();
  reader.addEventListener("load", (event: any) => {
    srcFileState.value = event.target.result;
  });
  reader.readAsDataURL(file);
}
</script>