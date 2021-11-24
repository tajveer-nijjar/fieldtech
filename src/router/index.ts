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
    name: PageNames.Components,
    path: "/components",
    component: () => import("@/views/Page.vue"),
    children: [
      {
        name: "Onboarding",
        path: "onboarding",
        component: () => import("@/views/components/Onboarding.vue")
      },
      {
        name: "Timepicker",
        path: "timepicker",
        component: () => import("@/views/components/Timepicker.vue")
      }
    ]
  },
  {
    name: PageNames.Layouts,
    path: "/layouts",
    component: () => import("@/views/Page.vue"),
    children: [
      {
        name: "SplittedView",
        path: "splitview",
        component: () => import("@/views/layouts/PageSplitView.vue")
      },
      {
        name: "NavigableSettings",
        path: "settings",
        component: () => import("@/views/layouts/PageSettingsView.vue")
      }
    ]
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
  routes,
  // makes sure scrolling to top of page
  // https://router.vuejs.org/guide/advanced/scroll-behavior.html
  scrollBehavior: () => {
    return { x: 0, y: 0 };
  }
});

export default router;
