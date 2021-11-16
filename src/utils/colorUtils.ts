import { Colors } from "@/constants";
import TinyColor from "tinycolor2";
import colors, { Color } from "vuetify/lib/util/colors";

export function convertRgbValue(rgbValue: number): string {
  let hex = rgbValue.toString(16);

  if (hex.length < 6) {
    let prefix = "";
    for (let i = 0; i < 6 - hex.length; i++) {
      prefix += "0";
    }

    hex = prefix + hex;
  }

  return `#${hex}`;
}

export function convertHexRgbToInt(hexRgb: string): number {
  return parseInt(hexRgb.replace("#", ""), 16);
}

// For understanding brightness and luminance of colors,
// please check out the link below:
// https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_Colors_and_Luminance
// Returns the perceived brightness of a color, from 0-255
export function getBrightness(colorHex: string): number {
  return TinyColor(colorHex).getBrightness();
}

// Returns the perceived luminance of a color, from 0-1
export function getLuminance(colorHex: string): number {
  return TinyColor(colorHex).getLuminance();
}

export function isLight(colorHex: string): boolean {
  return TinyColor(colorHex).isLight();
}

export function isBright(colorHex: string): boolean {
  return getBrightness(colorHex) > 200;
}

export function isDark(colorHex: string): boolean {
  return TinyColor(colorHex).isDark();
}

export function brightenColor(colorHex: string, amount = 80): string {
  return TinyColor(colorHex).brighten(amount).toHexString();
}

export function darkenColor(colorHex: string, amount = 60): string {
  return TinyColor(colorHex).darken(amount).toHexString();
}

export function getVuetifyHexColorByName(name: string): string | null {
  const [nameFamily, nameModifier] = name.split(" ");
  const shades = ["black", "white", "transparent"];
  const util: { family: null | string; modifier: null | string } = {
    family: null,
    modifier: null
  };

  if (shades.find((shade) => shade === nameFamily)) {
    util.family = "shades";
    util.modifier = nameFamily;
  } else {
    const [firstWord, secondWord] = nameFamily.split("-");
    util.family = `${firstWord}${
      secondWord ? secondWord.charAt(0).toUpperCase() + secondWord.slice(1) : ""
    }`;
    util.modifier = nameModifier ? nameModifier.replace("-", "") : "base";
  }

  const colorKeys: string[] = Object.keys(colors);
  const colorValues: Color[] = Object.values(colors);
  const colorIndex = colorKeys.indexOf(util.family);
  const colorValue = colorValues[colorIndex];

  if (!colorValue) {
    return null;
  }

  const modifierKeys: string[] = Object.keys(colorValue);
  const modifierValues: string[] = Object.values(colorValue);
  const modifierIndex = modifierKeys.indexOf(util.modifier);
  const colorHex = modifierValues[modifierIndex];

  return colorHex ?? null;
}

export function getHexColorByName(
  name: string,
  theme: "dark" | "light" = "light"
): string | null {
  const themeColors =
    theme === "dark" ? Colors.ThemeColorDark : Colors.ThemeColorLight;
  const themeColorKeys = Object.keys(themeColors);
  const themeColorValues = Object.values(themeColors);

  const themeColorIndex = themeColorKeys.indexOf(name);
  const themeColorValue = themeColorValues[themeColorIndex];

  if (themeColorValue) {
    return themeColorValue.toString();
  }

  return getVuetifyHexColorByName(name);
}
