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
    name: PageNames.SplitView,
    icon: "mdi-view-column-outline",
    showIcon: true,
    title: "Split view",
    route: "/splitview",
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
