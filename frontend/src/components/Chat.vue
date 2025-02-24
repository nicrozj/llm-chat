<script setup lang="ts">
import RequestBubble from "./RequestBubble.vue";
import ResponseBubble from "./ResponseBubble.vue";
import VStack from "./stacks/VStack.vue";
import LoadingSpinner from "./LoadingSpinner.vue";
import HStack from "./stacks/HStack.vue";
import { useMessages } from "@/composables/useMessages";
import { useChats } from "@/composables/useChats";
import { marked } from "marked";
const { messages, isLoading } = useMessages();
const { currentChat } = useChats();
</script>
<template>
  <section class="overflow-y-scroll">
    <div class="flex mx-20">
      <VStack class="gap-4 w-full p-4">
        <VStack
          v-if="currentChat && currentChat.messages"
          v-for="(message, index) in currentChat.messages"
          :key="index"
        >
          <RequestBubble
            v-if="message.type == 'request'"
            class="prose"
            v-html="marked(message.content)"
          >
          </RequestBubble>
          <ResponseBubble
            v-else-if="message.type == 'response'"
            class="prose"
            v-html="marked(message.content)"
          >
          </ResponseBubble>
          <HStack
            class="gap-4 items-center justify-start"
            v-if="isLoading && messages.length - 1 == index"
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
