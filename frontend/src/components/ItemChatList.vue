<script setup lang="ts">
import HStack from "./stacks/HStack.vue";
</script>

<template>
  <HStack
    class="gap-4 overflow-hidden bg-secondly hover:bg-border transition-colors rounded-lg duration-75 border border-border"
  >
    <button
      @click="console.log(123)"
      class="w-full h-full cursor-pointer px-4 py-2"
    >
      <slot></slot>
    </button>
  </HStack>
</template>
