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
export const chats = reactive(
  storedChats
    ? JSON.parse(storedChats).map(
        (chat: any) => new Chat(chat.title, chat.messages)
      )
    : []
);
if (chats.length === 0) {
  chats.push(new Chat("Новый чат"));
}

const currentChat = ref<Chat>(
  chats[0] instanceof Chat
    ? chats[0]
    : new Chat(chats[0]?.title, chats[0]?.messages ?? [])
);

export function useChats() {
  const addChat = (title: string) => {
    const chat = new Chat(title);
    chats.push(chat);
    localStorage.setItem("chats", JSON.stringify(chats));
    return chat;
  };

  const getNewChat = () => {
    const chat = addChat("Новый чат");
    localStorage.setItem("chats", JSON.stringify(chats));
    return chat;
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
