<script setup lang="ts">
import Chat from "@/components/Chat.vue";
import ChatInput from "@/components/ChatInput.vue";
import ChatList from "@/components/ChatList.vue";
import VStack from "@/components/stacks/VStack.vue";
</script>

<template>
  <main class="w-full h-full flex flex-row overflow-hidden">
    <ChatList class="basis-1/7 shrink-0" />
    <VStack class="basis-6/7 max-h-screen w-full overflow-hidden">
      <Chat class="basis-6/7 w-full max-w-full overflow-hidden" />
      <div
        class="basis-1/7 w-full h-full flex flex-col items-center justify-center py-2"
      >
        <ChatInput />
      </div>
    </VStack>
  </main>
</template>
