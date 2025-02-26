<script setup>
import { ref, watch, nextTick, onMounted } from "vue";

import { useMessages, Message } from "@/composables/useMessages";
import { useChats, chats } from "@/composables/useChats";
import { ChatAPI } from "@/services/apiService";

const { isLoading } = useMessages();
const { currentChat, addChat } = useChats();

const inputValue = ref("");
const isFocused = ref(false);
const textareaRef = ref(null);

const handleKeyDown = (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    sendRequest();
    inputValue.value = "";
  }
};

const sendRequest = async () => {
  try {
    isLoading.value = true;
    currentChat.value.addMessage("request", inputValue.value);
    if (currentChat.value.messages.length == 1) {
      currentChat.value.title = inputValue.value;
    }
    ChatAPI.streamGroqResponse(inputValue.value);
    localStorage.setItem("chats", JSON.stringify(chats));
  } catch (err) {
    console.log(err);
  }
};

watch(inputValue, async () => {
  await nextTick();
  const textarea = textareaRef.value;
  if (textarea) {
    textarea.style.height = "auto";
    textarea.style.height = `${Math.min(textarea.scrollHeight, 300)}px`;
  }
});

onMounted(() => {
  const textarea = textareaRef.value;
  if (textarea) {
    textarea.style.height = "auto";
    textarea.style.height = `${Math.min(textarea.scrollHeight, 300)}px`;
  }
});
</script>

<template>
  <div class="w-full max-w-2xl mx-auto p-4">
    <div
      class="relative border rounded-xl transition-all"
      :class="isFocused ? 'border-blue-500 shadow-md' : 'border-gray-300'"
    >
      <textarea
        ref="textareaRef"
        v-model="inputValue"
        @focus="isFocused = true"
        @blur="isFocused = false"
        @keydown="handleKeyDown"
        placeholder="Сообщение..."
        class="w-full px-4 py-3 resize-none outline-none rounded-xl bg-white text-gray-800"
        style="min-height: 56px; max-height: 300px"
        rows="1"
      ></textarea>
      <div class="absolute bottom-2 right-3 flex items-center space-x-2">
        <button
          class="rounded-full p-1.5 text-gray-400 transition-colors"
          :class="
            inputValue.trim()
              ? 'bg-blue-50 text-blue-500 hover:bg-blue-100'
              : 'cursor-not-allowed opacity-50'
          "
          :disabled="!inputValue.trim()"
          @click="sendRequest"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path
              d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="text-xs text-gray-500 mt-2 px-2">
      Нажмите Enter чтобы отправить, Shift + Enter чтобы перенести на новую
      строку
    </div>
  </div>
</template>
