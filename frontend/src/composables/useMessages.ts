import { reactive, ref } from "vue";

const isLoading = ref(false);

export class Message {
  constructor(type: "request" | "response", content: string) {
    this.type = type;
    this.content = content;
  }
  type!: "request" | "response";
  content!: string;
}

const messages: Message[] = reactive([]);

export const useMessages = () => {
  const addMessage = (message: Message) => {
    messages.push(message);
  };

  return { isLoading, messages, addMessage };
};
