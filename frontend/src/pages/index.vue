<script setup lang="ts">
import Chat from "@/components/Chat.vue";
import ChatInput from "@/components/ChatInput.vue";
</script>

<template>
  <main class="w-full h-screen flex flex-col items-center justify-center">
    <Chat></Chat>
    <ChatInput class="mt-10" />
  </main>
</template>
