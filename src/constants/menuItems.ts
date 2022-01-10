import * as PageNames from "@/constants/pageNames";
import { MenuItem } from "@/interfaces/core";

const MenuItems: MenuItem[] = [
  {
    name: PageNames.ConnectionStatus,
    icon: "mdi-briefcase-clock",
    showIcon: true,
    title: PageNames.ConnectionStatus,
    route: "/",
    children: []
  },
  {
    name: PageNames.VehicleConfigurations,
    icon: "mdi-briefcase-clock",
    showIcon: true,
    title: PageNames.VehicleConfigurations,
    route: "/vehicle-configurations",
    children: []
  },
  {
    name: PageNames.Volume,
    icon: "mdi-briefcase-clock",
    showIcon: true,
    title: PageNames.Volume,
    route: "/volume",
    children: []
  },
  {
    name: PageNames.MonitorControl,
    icon: "mdi-briefcase-clock",
    showIcon: true,
    title: PageNames.MonitorControl,
    route: "/monitor-control",
    children: []
  },
  {
    name: PageNames.Logs,
    icon: "mdi-briefcase-clock",
    showIcon: true,
    title: PageNames.Logs,
    route: "/logs",
    children: []
  },
  {
    name: PageNames.ConfigurationFiles,
    icon: "mdi-briefcase-clock",
    showIcon: true,
    title: PageNames.ConfigurationFiles,
    route: "/configuration-files",
    children: []
  }
];

export default MenuItems;
