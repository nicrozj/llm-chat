<script setup lang="ts">
import RequestBubble from "./RequestBubble.vue";
import ResponseBubble from "./ResponseBubble.vue";
import VStack from "./stacks/VStack.vue";
</script>

<template>
  <section class="overflow-y-scroll">
    <div class="flex mx-20">
      <VStack class="gap-4 w-full p-4">
        <RequestBubble>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa id
          deleniti voluptas pariatur, quos esse, incidunt enim unde doloremque,
          omnis ab. Nihil ab eligendi placeat, excepturi natus architecto totam
          molestiae.
        </RequestBubble>
        <ResponseBubble>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa id
          deleniti voluptas pariatur, quos esse, incidunt enim unde doloremque,
          omnis ab. Nihil ab eligendi placeat, excepturi natus architecto totam
          molestiae.
        </ResponseBubble>
        <RequestBubble>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa id
          deleniti voluptas pariatur, quos esse, incidunt enim unde doloremque,
          omnis ab. Nihil ab eligendi placeat, excepturi natus architecto totam
          molestiae.
        </RequestBubble>
        <ResponseBubble>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa id
          deleniti voluptas pariatur, quos esse, incidunt enim unde doloremque,
          omnis ab. Nihil ab eligendi placeat, excepturi natus architecto totam
          molestiae.
        </ResponseBubble>
        <RequestBubble>Lorem ipsum dolor sit amet</RequestBubble>
        <ResponseBubble>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa id
          deleniti voluptas pariatur, quos esse, incidunt enim unde doloremque,
          omnis ab. Nihil ab eligendi placeat, excepturi natus architecto totam
          molestiae.
        </ResponseBubble>
        <RequestBubble>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa id
          deleniti voluptas pariatur, quos esse, incidunt enim unde doloremque,
          omnis ab.
        </RequestBubble>
        <ResponseBubble>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa id
          deleniti voluptas pariatur, quos esse, incidunt enim unde doloremque,
          omnis ab. Nihil ab eligendi placeat, excepturi natus architecto totam
          molestiae.
        </ResponseBubble>
        <RequestBubble> Lorem </RequestBubble>
      </VStack>
    </div>
  </section>
</template>
