<script setup lang="ts">
import HStack from "../stacks/HStack.vue";
import VStack from "../stacks/VStack.vue";

const isVisible = defineProps<{ isVisible: boolean }>();
</script>

<template>
  <TransitionGroup
    v-if="true"
    class="w-3xs h-max"
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
  >
    <VStack
      class="absolute left-80 border border-dark/10 py-1 bg-secondly rounded-lg w-max"
    >
      <HStack class="px-4 py-1">
        <button class="hover:bg-border py-2 px-4 rounded-lg w-full text-left">
          Переименовать
        </button>
      </HStack>
      <HStack class="px-4 py-2">
        <button
          class="hover:bg-border py-2 px-4 rounded-lg w-full text-left text-red-500"
        >
          Удалить
        </button>
      </HStack>
    </VStack>
  </TransitionGroup>
</template>
