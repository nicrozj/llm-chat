<script setup lang="ts">
import ItemChatList from "./ItemChatList.vue";
import VStack from "./stacks/VStack.vue";
import { useChats } from "@/composables/useChats";

const { chats, currentChat } = useChats();
</script>

<template>
  <VStack
    class="h-screen overflow-hidden border-r-[1px] border-border gap-4 p-4"
  >
    <ItemChatList v-for="chat in chats" @click="currentChat = chat">
      {{ chat.title }}
    </ItemChatList>
  </VStack>
</template>
