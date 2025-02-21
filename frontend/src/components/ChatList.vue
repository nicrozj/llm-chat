<script setup lang="ts">
import ItemChatList from "./ItemChatList.vue";
import VStack from "./stacks/VStack.vue";
</script>

<template>
  <VStack
    class="h-screen overflow-hidden border-r-[1px] border-border gap-4 p-4"
  >
    <ItemChatList>Чат 1</ItemChatList>
    <ItemChatList>Чат 2</ItemChatList>
    <ItemChatList>Чат 3</ItemChatList>
    <ItemChatList>Чат 4</ItemChatList>
    <ItemChatList>Чат 5</ItemChatList>
  </VStack>
</template>
