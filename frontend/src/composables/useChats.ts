import { reactive, ref, type Ref } from "vue";
import { Message } from "./useMessages";

export class Chat {
  title!: string;
  messages!: Message[];

  constructor(title: string = "", messages: Message[] = []) {
    this.title = title;
    this.messages = messages;
  }

  addMessage(type: "response" | "request", message: string) {
    this.messages.push(new Message(type, message));
  }
}

const storedChats = localStorage.getItem("chats");
export const chats = reactive(storedChats ? JSON.parse(storedChats) : []);

if (chats.length === 0) {
  chats.push(new Chat("Новый чат"));
}

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

  const removeChat = (chat: Chat) => {
    const index = chats.findIndex((item: Chat) => item === chat);
    if (index !== -1) {
      chats.splice(index, 1);
    }
    localStorage.setItem("chats", JSON.stringify(chats));
  };

  return {
    chats,
    addChat,
    currentChat,
    getNewChat,
    removeChat,
  };
}
