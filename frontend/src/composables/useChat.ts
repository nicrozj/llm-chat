import { ref } from "vue";
import { ChatAPI } from "@/services/apiService";

export function useChat() {
  const isLoading = ref(false);
  const error = ref(null);

  const sendMessage = async (message: string) => {
    isLoading.value = true;
    try {
      const response = await ChatAPI.getResponse(message);
      return response;
    } catch (err) {
      console.log(err);
    } finally {
      isLoading.value = false;
    }
  };

  return { isLoading, error, sendMessage };
}
