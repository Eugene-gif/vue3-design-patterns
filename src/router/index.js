import { createRouter, createWebHashHistory } from 'vue-router' //1
import Landing from "@/views/Landing.vue" //2

const routes = [
  {
    path: "/",
    name: "landing",
    component: Landing
  },
  {
    path: "/project/:id",
    name: "project",
    component: () => import("@/views/ToDoProject/ToDoProject.vue"), //3
    props: true
  }];

const router = createRouter({ //4
  history: createWebHashHistory(), //5
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router;
