import InputIngredient from "../views/InputIngredient.vue";
import CetakTagihan from "../views/PrintTagihan.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: InputIngredient,
    },
    {
      path: "/payment",
      name: "payment",
      component: CetakTagihan,
    },
  ],
});

export default router;
