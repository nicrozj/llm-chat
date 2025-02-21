<script setup lang="ts">
import HStack from "./stacks/HStack.vue";
import { useChats } from "@/composables/useChats";

const { currentChat } = useChats();
</script>

<template>
  <HStack
    class="gap-4 overflow-hidden hover:bg-border transition-colors rounded-lg duration-75 cursor-pointer px-4 py-2"
  >
    <slot></slot>
  </HStack>
</template>
