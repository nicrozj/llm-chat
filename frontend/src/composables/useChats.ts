import { reactive, ref, type Ref } from "vue";
import { type Message } from "./useMessages";

export interface Chat {
  title: string;
  messages: Message[];
}

const storedChats = localStorage.getItem("chats");
export const chats = storedChats
  ? reactive(JSON.parse(storedChats))
  : reactive([]);

const currentChat = ref<Chat>(chats[0]);

export function useChats() {
  const addChat = (title: string) => {
    chats.push({
      title: title,
      messages: [],
    });

    localStorage.setItem("chats", JSON.stringify(chats));
    return chats[chats.length - 1];
  };

  const getNewChat = () => {
    localStorage.setItem("chats", JSON.stringify(chats));
    return addChat("Новый чат");
  };

  return {
    chats,
    addChat,
    currentChat,
    getNewChat,
  };
}
