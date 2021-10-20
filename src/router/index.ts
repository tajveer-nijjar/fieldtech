import { PageNames } from "@/constants";
import Home from "@/views/Home.vue";
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: PageNames.Home,
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/splitview",
    name: PageNames.SplitView,
    component: () => import("@/views/PageSplitView.vue")
  },
  {
    path: "/page2",
    name: PageNames.Page2,
    component: () => import("@/views/PageTwo.vue")
  },
  {
    path: "/profile",
    name: PageNames.ProfileSettings,
    component: () => import("@/views/ProfileSettings.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
