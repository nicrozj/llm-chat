<script setup lang="ts">
import RequestBubble from "./RequestBubble.vue";
import ResponseBubble from "./ResponseBubble.vue";
import VStack from "./stacks/VStack.vue";
import { useMessages } from "@/composables/useMessages";

const { messages } = useMessages();
</script>
<template>
  <section class="overflow-y-scroll">
    <div class="flex mx-20">
      <VStack class="gap-4 w-full p-4">
        <div class="flex flex-col" v-for="message in messages">
          <RequestBubble v-if="message.type == 'request'">
            {{ message.content }}
          </RequestBubble>
          <ResponseBubble v-if="message.type == 'response'">
            {{ message.content }}
          </ResponseBubble>
        </div>
      </VStack>
    </div>
  </section>
</template>
