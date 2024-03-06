import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";
import SoftwareView from "../ServicesContent/SoftwareView.vue";
import AppMobile from "../ServicesContent/MobileApp.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: MainView,
    },
    {
      path: "/software",
      name: "Software Development",
      component: SoftwareView,
    },
    {
      path: "/mobile",
      name: "Mobile Development",
      component: AppMobile,
    },
    {
      path: "/pcbuild",
      name: "PC build",
      component: () => import("../ServicesContent/PcBuild.vue"),
    },
    {
      path: "/learn",
      name: "Learn With Us",
      component: () => import("../ServicesContent/LearWithUs.vue"),
    },
  ],
});

export default router;
