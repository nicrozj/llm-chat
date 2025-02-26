<script setup lang="ts">
import { onMounted, ref } from "vue";
import ItemChatList from "./ItemChatList.vue";
import VStack from "./stacks/VStack.vue";
import { useChats } from "@/composables/useChats";

const { chats, currentChat, getNewChat, removeChat } = useChats();

const GROQ_API_KEY = (import.meta as any).env.VITE_API_KEY;

interface Model {
  id: string;
  object: string;
  created: number;
  owned_by: string;
  active: boolean;
}

const allModels = ref<Model[]>();

async function getModels() {
  try {
    const response = await fetch("https://api.groq.com/openai/v1/models", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${GROQ_API_KEY}`,
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP Error! Status code: ${response.status}`);
    }

    const data = await response.json();
    const allModels: Model[] = data.data;

    return allModels;
  } catch (error) {
    console.error("Error fetching models: ", error);
  }
}

onMounted(async () => {
  allModels.value = await getModels();
});
</script>
<template>
  <VStack
    class="h-screen border-r-[1px] border-border gap-2 p-4 min-w-3xs overflow-y-scroll"
  >
    <select class="px-4 rounded-lg ring-2 ring-border py-2">
      <option>Выберите модель</option>
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
