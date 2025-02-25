<script setup lang="ts">
import { defineProps, ref, computed } from "vue";

const props = defineProps({
  error: {
    type: Boolean,
    required: false,
  },
});

const textValue = ref("");
const error = ref(false);
</script>

<template>
  <input
    type="text"
    v-model="textValue"
    class="rounded-xl text-xl p-3 focus:outline-2 focus:outline-zinc-200 bg-zinc-100"
  />
</template>
