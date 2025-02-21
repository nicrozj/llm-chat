import { reactive, ref } from "vue";
import { useMessages, type Message } from "./useMessages";

const { messages } = useMessages();

interface Chat {
  title: string;
  messages: Message[];
}

const chats: Chat[] = reactive([]);

export function useChats() {
  const addChat = (title: string) => {
    chats.push({
      title: title,
      messages: [],
    });
  };
}
