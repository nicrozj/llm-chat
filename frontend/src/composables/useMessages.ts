import { reactive, ref } from "vue";

interface Message {
  type: "request" | "response";
  content: string;
}

const messages: Message[] = reactive([]);

export const useMessages = () => {
  const addMessage = (message: Message) => {
    messages.push(message);
  };

  return { messages, addMessage };
};
