import Vue from "vue";

import { PageNames } from "@/constants";
import Home from "@/views/Home.vue";
import VueRouter, { RouteConfig } from "vue-router";
import VehicleConfigurations from "@/views/vehicleConfiguration/VehicleConfigurations.vue";
import Volume from "@/views/Volume/Volume.vue";
import Logs from "@/views/Logs/Logs.vue";
import ConfigurationFiles from "@/views/ConfigurationFiles/ConfigurationFiles.vue";
import MonitorControl from "@/views/MonitorControl/MonitorControl.vue";

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
    component: VehicleConfigurations
  },
  {
    path: "/volume",
    name: PageNames.Volume,
    component: Volume
  },
  {
    path: "/logs",
    name: PageNames.Logs,
    component: Logs
  },
  {
    path: "/configuration-files",
    name: PageNames.ConfigurationFiles,
    component: ConfigurationFiles
  },
  {
    path: "/monitor-control",
    name: PageNames.Volume,
    component: MonitorControl
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
