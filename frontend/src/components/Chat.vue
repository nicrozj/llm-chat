<script setup lang="ts">
import RequestBubble from "./RequestBubble.vue";
import ResponseBubble from "./ResponseBubble.vue";
import VStack from "./stacks/VStack.vue";
</script>

<template>
  <section class="w-5xl flex">
    <VStack class="gap-4 w-full">
      <RequestBubble class="self-end"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa id
        deleniti voluptas pariatur, quos esse, incidunt enim unde doloremque,
        omnis ab. Nihil ab eligendi placeat, excepturi natus architecto totam
        molestiae.</RequestBubble
      >
      <ResponseBubble
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa id
        deleniti voluptas pariatur, quos esse, incidunt enim unde doloremque,
        omnis ab. Nihil ab eligendi placeat, excepturi natus architecto totam
        molestiae.</ResponseBubble
      >
      <RequestBubble class="self-end"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa id
        deleniti voluptas pariatur, quos esse, incidunt enim unde doloremque,
        omnis ab. Nihil ab eligendi placeat, excepturi natus architecto totam
        molestiae.</RequestBubble
      >
    </VStack>
  </section>
</template>
