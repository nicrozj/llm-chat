<script setup lang="ts">
import Chat from "@/components/Chat.vue";
import ChatInput from "@/components/ChatInput.vue";
import ChatList from "@/components/ChatList.vue";
import VStack from "@/components/stacks/VStack.vue";
</script>

<template>
  <main class="w-full max-h-screen flex">
    <ChatList />
    <VStack class="w-full items-center">
      <Chat class="grow" />
      <ChatInput class="justify-self-end" />
    </VStack>
  </main>
</template>
