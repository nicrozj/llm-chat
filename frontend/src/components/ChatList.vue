<script setup lang="ts">
import ItemChatList from "./ItemChatList.vue";
import VStack from "./stacks/VStack.vue";
import { useChats } from "@/composables/useChats";

const { chats, currentChat, getNewChat } = useChats();
</script>

<template>
  <VStack
    class="h-screen overflow-hidden border-r-[1px] border-border gap-1 p-4 min-w-3xs"
  >
    <button
      class="flex hover:bg-blue-500 bg-blue-400 text-white transition-colors rounded-lg duration-75 items-center cursor-pointer px-4 py-2"
      @click="currentChat = getNewChat()"
    >
      <span class="truncate w-full">Новый чат</span>
    </button>
    <VStack class="mt-10 gap-1">
      <ItemChatList v-for="chat in chats" @click="currentChat = chat">
        {{ chat.title }}
      </ItemChatList>
    </VStack>
  </VStack>
</template>
