<script setup lang="ts">
import { onMounted, ref } from "vue";
import ItemChatList from "./ItemChatList.vue";
import VStack from "./stacks/VStack.vue";
import { useChats } from "@/composables/useChats";
import { useModels } from "@/composables/useModels";

const { chats, currentChat, getNewChat } = useChats();
const { getModels, allModels, selectedModel } = useModels();

onMounted(async () => {
  allModels.value = await getModels();
});
</script>
<template>
  <VStack
    class="h-screen border-r-[1px] border-border gap-2 p-4 min-w-3xs overflow-y-scroll"
  >
    <select
      v-model="selectedModel"
      class="px-4 rounded-lg ring-2 ring-border py-2"
    >
      <option v-for="model in allModels">
        {{ model["id"] }}
      </option>
    </select>
    <button
      class="flex hover:bg-blue-500 bg-blue-400 text-white transition-colors rounded-lg duration-75 items-center cursor-pointer px-4 py-2"
      @click="currentChat = getNewChat()"
    >
      <span class="truncate w-full">Новый чат</span>
    </button>
    <VStack class="mt-10 gap-1">
      <ItemChatList
        v-for="chat in chats.slice().reverse()"
        :chat="chat"
        @click="currentChat = chat"
      >
        {{ chat.title }}
      </ItemChatList>
    </VStack>
  </VStack>
</template>
