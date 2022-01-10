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
    path: "/vehicle-configurations",
    name: PageNames.VehicleConfigurations,
    component: () =>
      import("@/views/vehicleConfiguration/VehicleConfigurations.vue")
    // component: () => import("@/views/Page.vue")
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
