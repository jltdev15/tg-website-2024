import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";
import SoftwareView from "../ServicesContent/SoftwareView.vue";
import AppMobile from '../ServicesContent/MobileApp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/software",
      name: "main",
      component: MainView,
      children: [
        {
          path: "/software",
          name: "software",
          component: SoftwareView,
        },
        {
          path: "/mobile",
          name: "mobile",
          component: AppMobile
        },
        {
          path: "/pcbuild",
          name: "build",
          component: () => import('../ServicesContent/PcBuild.vue')
        },
        {
          path: "/learn",
          name: "learn",
          component: () => import('../ServicesContent/LearWithUs.vue')
        },
      ],
    },
  ],
});

export default router;
