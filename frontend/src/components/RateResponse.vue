<template>
  <div class="bg-secondly rounded-xl">
    <span><slot></slot></span>
    <div class="flex">
      <div class="flex items-center">
        <span class="text-xs text-gray-500"></span>
        <div class="flex">
          <button
            v-for="star in 5"
            :key="star"
            @click="rate(star)"
            class="p-1 transition-colors focus:outline-none"
            :class="
              rating >= star
                ? 'text-blue-500'
                : 'text-gray-300 hover:text-gray-400'
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-4 h-4"
            >
              <path
                fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue";

interface Props {
  messageId?: string;
}

const props = withDefaults(defineProps<Props>(), {
  messageId: "",
});

const emit = defineEmits(["rated"]);
const rating = ref(0);

const rate = (value: number) => {
  rating.value = value;
  emit("rated", { messageId: props.messageId, rating: value });
};
</script>
