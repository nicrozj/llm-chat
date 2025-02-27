import { ref } from "vue";

interface Model {
  id: string;
  object: string;
  created: number;
  owned_by: string;
  active: boolean;
}

const GROQ_API_KEY = (import.meta as any).env.VITE_API_KEY;

const allModels = ref<Model[]>();
const selectedModel = ref<string | undefined>(
  localStorage.getItem("selectedModel") || undefined
);

export const useModels = () => {
  async function getModels() {
    try {
      const response = await fetch("https://api.groq.com/openai/v1/models", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${GROQ_API_KEY}`,
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP Error! Status code: ${response.status}`);
      }

      const data = await response.json();
      const allModels: Model[] = data.data;

      selectedModel.value = selectedModel.value
        ? selectedModel.value
        : (selectedModel.value = allModels[0].id);

      return allModels;
    } catch (error) {
      console.error("Error fetching models: ", error);
    }
  }

  return {
    allModels,
    getModels,
    selectedModel,
  };
};
