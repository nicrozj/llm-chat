<script setup lang="ts">
import { onMounted, ref, nextTick } from "vue";
import HStack from "./stacks/HStack.vue";
import { chats, useChats, type Chat } from "@/composables/useChats";

const { removeChat } = useChats();
const { chat } = defineProps<{ chat: Chat }>();

const editInput = ref("");
const editInputElement = ref<HTMLInputElement | null>(null);

const editTitle = async () => {
  if (!chat.isEdited) {
    editInput.value = chat.title;
    chat.isEdited = true;

    await nextTick();
    editInputElement.value?.focus();
  } else {
    chat.renameChat(editInput.value);
    chat.isEdited = false;
    localStorage.setItem("chats", JSON.stringify(chats));
  }
};

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    editTitle();
  }
};

const handleBlur = () => {
  if (chat.isEdited) {
    editTitle();
  }
};
</script>

<template>
  <HStack
    class="relative gap-2 hover:bg-border transition-colors items-center rounded-lg duration-75 cursor-pointer px-4 h-12 py-2 group"
  >
    <span v-if="!chat.isEdited" class="truncate w-full"><slot></slot></span>
    <input
      v-else
      ref="editInputElement"
      @keydown="handleKeyDown"
      @blur="handleBlur"
      v-model="editInput"
      class="w-full px-2 py-1 rounded-lg"
    />
    <button
      @click="editTitle"
      class="items-center justify-center size-8 px-1 rounded-lg text-white hidden group-hover:flex hover:bg-dark/10"
    >
      <span
        class="material-symbols-outlined text-[18px]! text-dark cursor-pointer"
      >
        edit
      </span>
    </button>
    <button
      @click="removeChat(chat)"
      class="items-center justify-center size-8 px-1 rounded-lg text-white hidden group-hover:flex hover:bg-dark/10"
    >
      <span
        class="material-symbols-outlined text-[18px]! text-dark cursor-pointer"
      >
        delete
      </span>
    </button>
  </HStack>
</template>
