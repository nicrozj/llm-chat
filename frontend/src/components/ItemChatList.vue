<script setup lang="ts">
import HStack from "./stacks/HStack.vue";
import { useChats, type Chat } from "@/composables/useChats";

const { removeChat } = useChats();
const { chat } = defineProps<{ chat: Chat }>();
</script>

<template>
  <HStack
    class="relative gap-4 hover:bg-border transition-colors items-center rounded-lg duration-75 cursor-pointer px-4 h-12 py-2 group"
  >
    <span class="truncate w-full"><slot></slot></span>
    <button
      @click="removeChat(chat)"
      class="items-center justify-center size-8 rounded-lg text-white hidden group-hover:flex hover:bg-dark/10"
    >
      <span
        class="material-symbols-outlined text-[18px]! text-dark cursor-pointer"
      >
        delete
      </span>
    </button>
  </HStack>
</template>
