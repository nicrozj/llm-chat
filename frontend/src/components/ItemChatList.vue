<script setup lang="ts">
import HStack from "./stacks/HStack.vue";
import { useChats } from "@/composables/useChats";
</script>

<template>
  <HStack
    class="gap-4 hover:bg-border transition-colors rounded-lg duration-75 cursor-pointer px-4 py-2"
  >
    <span class="truncate w-full"><slot></slot></span>
  </HStack>
</template>
