import { Colors } from "@/constants";
import { en } from "@/i18n";
import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi"
  },
  lang: {
    locales: { en },
    current: "en"
  },
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: Colors.ThemeColorLight,
      dark: Colors.ThemeColorDark
    }
  }
});
