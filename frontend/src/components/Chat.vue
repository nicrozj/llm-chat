<script setup lang="ts">
import RequestBubble from "./RequestBubble.vue";
import ResponseBubble from "./ResponseBubble.vue";
import VStack from "./stacks/VStack.vue";
import { useMessages } from "@/composables/useMessages";
import { useChat } from "@/composables/useChat";
import LoadingSpinner from "./LoadingSpinner.vue";
import HStack from "./stacks/HStack.vue";

const { messages } = useMessages();
const { isLoading } = useChat();
</script>
<template>
  <section class="overflow-y-scroll">
    <div class="flex mx-20">
      <VStack class="gap-4 w-full p-4">
        <VStack v-if="messages.length" v-for="(message, id) in messages">
          <RequestBubble v-if="message.type == 'request'">
            {{ message.content }}
          </RequestBubble>
          <ResponseBubble v-if="message.type == 'response'">
            {{ message.content }}
          </ResponseBubble>
          <HStack
            class="gap-4 items-center justify-start"
            v-if="isLoading && messages.length - 1 == id"
          >
            <LoadingSpinner class="h-max" />
            <span>Думаю...</span>
          </HStack>
        </VStack>
        <VStack class="mt-80 text-xl items-center justify-center" v-else>
          Начните переписку!
        </VStack>
      </VStack>
    </div>
  </section>
</template>
