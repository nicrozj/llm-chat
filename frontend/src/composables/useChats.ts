import { reactive, ref } from "vue";
import { useMessages, type Message } from "./useMessages";

const { messages } = useMessages();

export interface Chat {
  title: string;
  messages: Message[];
}

const chats: Chat[] = reactive([
  {
    title: "Test",
    messages: [
      { type: "response", content: "blabla" },
      { type: "response", content: "blabla" },
      { type: "response", content: "blabla" },
      { type: "response", content: "blabla" },
    ],
  },
  {
    title: "Test2",
    messages: [
      { type: "response", content: "blabla" },
      { type: "response", content: "blabla" },
      { type: "response", content: "blabla" },
      { type: "response", content: "blabla" },
    ],
  },
]);

const currentChat: Chat = chats[0] || useChats().addChat("Новый чат");

export function useChats() {
  const addChat = (title: string) => {
    chats.push({
      title: title,
      messages: [],
    });
    return chats[chats.length];
  };

  return {
    chats,
    addChat,
    currentChat,
  };
}
