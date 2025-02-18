<script setup lang="ts">
import { ref } from "vue";

let textarea = ref<HTMLTextAreaElement | null>(null);

const resize = () => {
  if (!textarea.value) return;

  textarea.value.style.height = "";
  textarea.value.style.height = `${Math.min(
    textarea.value.scrollHeight + 2,
    115
  )}px`;
};
</script>

<template>
  <div class="rounded-3xl ring w-xl bg-secondly ring-border p-2 mb-10">
    <textarea
      @input="resize"
      ref="textarea"
      class="p-2 focus:outline-0 resize-none w-full"
      placeholder="Сообщение"
    />
    <div class="flex gap-4 justify-between">
      <div class="flex gap-4">
        <button
          class="size-8 flex justify-center items-center rounded-full bg-dark text-white"
        >
          +
        </button>
        <button
          class="size-8 flex justify-center items-center rounded-full bg-dark text-white"
        >
          +
        </button>
      </div>
      <div>
        <button
          class="size-8 flex justify-center items-center rounded-full bg-dark text-white"
        >
          +
        </button>
      </div>
    </div>
  </div>
</template>
