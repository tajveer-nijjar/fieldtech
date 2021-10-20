import * as PageNames from "@/constants/pageNames";
import { MenuItem } from "@/interfaces/core";

const MenuItems: MenuItem[] = [
  {
    name: PageNames.Home,
    icon: "mdi-briefcase-clock",
    showIcon: true,
    title: "Home",
    route: "/",
    children: []
  },
  {
    name: PageNames.Page1,
    icon: "mdi-chart-box-outline",
    showIcon: true,
    title: "Page 1",
    route: "/page1",
    children: []
  },
  {
    name: PageNames.Page2,
    icon: "mdi-map-legend",
    showIcon: true,
    title: "Page 2",
    route: "/page2",
    children: []
  }
];

export default MenuItems;
