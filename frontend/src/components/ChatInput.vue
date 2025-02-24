<script setup lang="ts">
import { ref } from "vue";
import { useMessages } from "@/composables/useMessages";
import { useChats } from "@/composables/useChats";

const { sendMessage, isLoading } = useMessages();
const { currentChat, addChat } = useChats();

const textarea = ref<HTMLTextAreaElement | null>(null);

const textareaContent = ref("");

const resize = () => {
  if (!textarea.value) return;

  textarea.value.style.height = "";
  textarea.value.style.height = `${Math.min(
    textarea.value.scrollHeight + 2,
    115
  )}px`;
};

const sendRequest = async () => {
  try {
    isLoading.value = true;
    if (!currentChat.value)
      currentChat.value = addChat(`${textareaContent.value}`);
    currentChat.value.messages.push({
      content: `${textareaContent.value}`,
      type: "request",
    });
    sendMessage(textareaContent.value).then((data) => {
      currentChat.value.messages.push({
        content: `${data.choices[0].message.content}`,
        type: "response",
      });
      isLoading.value = false;
    });
    textareaContent.value = "";
  } catch (err) {
    console.log(err);
  }
};
</script>

<template>
  <div class="rounded-3xl ring w-xl bg-secondly ring-border p-2">
    <textarea
      @input="resize"
      ref="textarea"
      v-model="textareaContent"
      class="p-2 focus:outline-0 resize-none w-full"
      placeholder="Сообщение"
    />
    <div class="flex gap-4 justify-between">
      <div class="flex gap-4"></div>
      <div>
        <button
          @click="sendRequest"
          class="size-8 flex justify-center items-center rounded-full bg-dark text-white cursor-pointer"
        >
          <span class="material-symbols-outlined">send</span>
        </button>
      </div>
    </div>
  </div>
</template>
