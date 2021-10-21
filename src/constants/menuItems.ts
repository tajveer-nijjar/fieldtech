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
    title: "Split View",
    route: "/splitview",
    children: []
  },
  {
    name: PageNames.Settings,
    icon: "mdi-table-cog",
    showIcon: true,
    title: "Settings View",
    route: "/settings",
    children: []
  }
];

export default MenuItems;
