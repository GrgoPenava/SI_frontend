import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Login from "../modules/Login/Pages/Login.vue";
import Movies from "../modules/Movies/Pages/Movies.vue";
import NotFound from "../components/NotFound.vue";
import Users from "../modules/Users/Pages/Users.vue";
import Xss from "../components/Xss.vue";

export function getRoutes(): RouteRecordRaw[] {
  const routes: Array<RouteRecordRaw> = [
    {
      path: "/",
      redirect: "/movies",
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
      meta: { requiresAuth: false, show: true, showBeforeLogin: true },
    },
    {
      path: "/movies",
      name: "Movies",
      component: Movies,
      meta: { requiresAuth: true, show: true, showBeforeLogin: true },
    },
    {
      path: "/users",
      name: "Users",
      component: Users,
      meta: { requiresAuth: true, show: true },
    },
    {
      path: "/xss",
      name: "XSS",
      component: Xss,
      meta: { requiresAuth: false, show: true, showBeforeLogin: true },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
  ];
  return routes;
}

const router = createRouter({
  history: createWebHistory("/"),
  routes: getRoutes(),
});
export default router;
