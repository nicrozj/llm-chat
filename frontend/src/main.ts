import { createApp } from "vue";
import { createRouter, createWebHistory, RouterView } from "vue-router";
import Index from "./pages/index.vue";
import Registration from "./pages/registration.vue";

import "./main.css";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Index },
    { path: "/registration", component: Registration },
  ],
});

createApp(RouterView).use(router).mount("body");
