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
    name: PageNames.Components,
    icon: "mdi-chart-bubble",
    showIcon: true,
    title: "Components",
    route: "/components",
    children: [
      {
        name: "Onboarding",
        title: "Onboarding",
        route: "/components/onboarding",
        children: []
      },
      {
        name: "Timerpicker",
        title: "Timepicker",
        route: "/components/timepicker",
        children: []
      }
    ]
  },
  {
    name: PageNames.Layouts,
    icon: "mdi-view-dashboard-outline",
    showIcon: true,
    title: "Layouts",
    route: "/layouts",
    children: [
      {
        name: "Splitted View",
        title: "Splitted View",
        route: "/layouts/splitview",
        children: []
      },
      {
        name: "Navigable Settings",
        title: "Navigable Settings",
        route: "/layouts/settings",
        children: []
      }
    ]
  }
];

export default MenuItems;
