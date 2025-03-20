<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from "vue";

import RequestBubble from "./RequestBubble.vue";
import ResponseBubble from "./ResponseBubble.vue";
import VStack from "./stacks/VStack.vue";
import LoadingSpinner from "./LoadingSpinner.vue";
import HStack from "./stacks/HStack.vue";
import RateResponse from "./RateResponse.vue";

import { useMessages } from "@/composables/useMessages";
import { useChats } from "@/composables/useChats";
import { marked } from "marked";

const { isLoading } = useMessages();
const { currentChat } = useChats();
const chatContainer = ref<HTMLElement | null>(null);

const scrollToBottom = async () => {
  await nextTick();
  if (chatContainer.value) {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
  }
};

watch(
  () => currentChat.value?.messages,
  () => {
    scrollToBottom();
  },
  { deep: true },
);

watch(
  () => isLoading.value,
  (newVal, oldVal) => {
    if (!newVal && oldVal) {
      scrollToBottom();
    }
  },
);

onMounted(() => {
  scrollToBottom();
});
</script>
<template>
  <section ref="chatContainer" class="overflow-y-scroll h-full scroll-smooth">
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
          <ResponseBubble v-else-if="message.type == 'response'" class="prose">
            <template #response>
              <div v-html="marked(message.content)"></div>
              <RateResponse />
            </template>
          </ResponseBubble>
          <HStack
            class="gap-4 items-center justify-start"
            v-if="isLoading && currentChat.messages.length - 1 == index"
          >
            <LoadingSpinner class="h-max" />
            <span>Думаю...</span>
          </HStack>
        </VStack>
      </VStack>
    </div>
  </section>
</template>
