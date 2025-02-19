<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import RegInput from "@/components/RegInput.vue";
import RegBtn from "@/components/RegBtn.vue";
import Popup from "@/components/Popup.vue";

const array = [
  {
    name: "1234",
    password: "1234",
  },
];

const popupVisible = ref(false);
const email = ref("");
const password = ref("");
const router = useRouter();

function login() {
  const user = array.find(
    (user) => user.name === email.value && user.password === password.value
  );
  if (!user) {
    popupVisible.value = true;
    setTimeout(() => {
      popupVisible.value = false;
    }, 3000);
  } else {
    router.push("/");
  }
}
</script>

<template>
  <main class="w-full h-screen justify-center gap-24 items-center flex">
    <Popup :visible="popupVisible" @update:visible="popupVisible = $event" />
    <section class="b p-5 flex items-center gap-7 rounded-3xl flex-col">
      <span class="text-2xl"> Вход </span>
      <div class="flex gap-2 flex-col">
        <span class="text-md text-zinc-600">Введите email</span>
        <RegInput v-model="email" placeholder="email" />
      </div>
      <div class="flex gap-2 flex-col">
        <span class="text-md text-zinc-600">Введите пароль</span>
        <RegInput type="password" v-model="password" placeholder="Пароль" />
      </div>
      <RegBtn @click="login()">Вход </RegBtn>
    </section>

    <div class="h-[34%] w-[2px] bg-zinc-600"></div>
    <section class="p-5 flex items-center gap-7 rounded-3xl flex-col">
      <span class="text-2xl"> Регистрация </span>
      <div class="flex gap-2 flex-col">
        <span class="text-md text-zinc-600">Введите email</span>
        <RegInput placeholder="email" />
      </div>
      <div class="flex gap-2 flex-col">
        <span class="text-md text-zinc-600">Введите пароль</span>
        <RegInput placeholder="Пароль" />
      </div>
      <RegBtn>Регистрация </RegBtn>
    </section>
  </main>
</template>
