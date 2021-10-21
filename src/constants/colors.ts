import colors from "vuetify/lib/util/colors";

export const Primary = "#a5c56d";
export const Secondary = "#d8f89d";
export const Accent = "#28629b";
export const Bg1 = "#F1F2EF";
export const CnxGreen = "#a5c56d";
export const CnxGreenLight1 = "#d2e2b6";
export const CnxGreenLight2 = "#e9f0da";
export const CnxGreenDark1 = "#8fb648";
export const CnxGreenDark2 = "#81A441";
export const CnxTeal = "#3397a4";
export const CnxTealLighten2 = "#99cbd1";
export const GreyLighten1 = colors.grey.lighten1;
export const Disabled = colors.grey.lighten3;
export const LightGrey1 = colors.grey.lighten2;
export const LightGrey2 = colors.grey.lighten3;

export const Black = colors.grey.darken4;
export const White = "#FFFFFF";

// Dark
export const AccentDark = colors.lightBlue.darken2;
export const SecondaryBlack = "#303030";

// For images
export const lightGreen = "#E9F0DA";

// For maps
export const DarkModeBorderColor = colors.grey.darken4;
export const LightModeBorderColor = White;

export const RouteColorLight = colors.grey.darken1;
export const RouteColorDark = colors.grey.lighten3;
export const RouteBgColor = Black;
export const DepotFillColor = colors.grey.lighten1;

export const PlatformLabelTextColorLight = colors.grey.darken4;
export const PlatformLabelTextColorDark = White;

// Icons
export const SecondaryIcon = colors.grey.base;
export const Error = colors.deepOrange.darken1;
export const Warning = colors.amber.base;
export const Early = colors.orange.base;
export const Late = colors.deepOrange.base;
export const VeryLate = colors.pink.base;

export const chartColors = [
  // Blue
  "#182d67",
  "#2f4276",
  "#465785",
  "#5d6c95",
  "#7481a4",
  "#8c96b3",
  "#a3abc2",
  "#bac0d1",
  "#d1d5e1",
  // Green
  "#8fb648",
  "#9abda5",
  "#a5c56d",
  "#b1cc7f",
  "#bcd391",
  "#c7dba4"
];

// drivers
export const DriverColors = {
  loggedOff: colors.blueGrey.lighten4,
  loggedOn: CnxGreen,
  onBreak: colors.amber.lighten1,
  outOfVehicle: colors.amber.lighten1
};

export const ThemeColorLight = {
  primary: Primary,
  accent: Accent,
  error: Error,
  cnxGreen: CnxGreen,
  cnxGreenLight1: CnxGreenLight1,
  cnxGreenLight2: CnxGreenLight2,
  cnxGreenDark1: CnxGreenDark1,
  cnxGreenDark2: CnxGreenDark2,
  disabled: Disabled,
  black: Black,
  cnxTeal: CnxTeal
};

export const ThemeColorDark = {
  primary: Primary,
  accent: AccentDark,
  error: Error,
  cnxGreen: CnxGreen,
  cnxGreenLight1: CnxGreenLight1,
  cnxGreenLight2: CnxGreenLight2,
  cnxGreenDark1: CnxGreenDark1,
  cnxGreenDark2: CnxGreenDark2,
  disabled: Disabled,
  black: Black,
  secondaryBlack: SecondaryBlack,
  cnxTeal: CnxTeal
};
