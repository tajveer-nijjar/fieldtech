import { Colors } from "@/constants";
import { en } from "@/i18n";
import "@mdi/font/css/materialdesignicons.css";
import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import ApcIcon from "@/components/icons/ApcIcon.vue";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi",
    values: {
      apcIcon: {
        component: ApcIcon
      }
    }
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
