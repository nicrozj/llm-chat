<script setup lang="ts">
import { defineProps } from "vue";

interface Props {
  loading?: boolean;
  color?: string;
  width?: number | string;
  height?: number | string;
}

const props = withDefaults(defineProps<Props>(), {
  loading: true,
  color: "#333",
  width: 50,
  height: 40,
});
</script>

<template>
  <div v-if="loading" class="flex justify-center items-center">
    <div
      class="spinner"
      :style="{
        width: `${width}px`,
        height: `${height}px`,
      }"
    >
      <div
        v-for="index in 5"
        :key="index"
        class="rect"
        :class="`rect${index}`"
        :style="{ backgroundColor: color }"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.spinner {
  margin: 100px auto;
  text-align: center;
  font-size: 10px;
}

.rect {
  height: 100%;
  width: 6px;
  display: inline-block;
  animation: sk-stretchdelay 1.2s infinite ease-in-out;
}

.rect2 {
  animation-delay: -1.1s;
}

.rect3 {
  animation-delay: -1s;
}

.rect4 {
  animation-delay: -0.9s;
}

.rect5 {
  animation-delay: -0.8s;
}

@keyframes sk-stretchdelay {
  0%,
  40%,
  100% {
    transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
  }
}
</style>
