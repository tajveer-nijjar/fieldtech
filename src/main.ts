import "@/styles/main.scss";
import Vue from "vue";
import App from "./App.vue";
import CnxVue from "./mixins";
import vuetify from "./plugins/vuetify";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

declare global {
  interface Array<T> {
    insert(index: number, item: T): void;
  }

  interface String {
    toInt(radix?: number | undefined): number;
  }
}

Array.prototype.insert = function <T>(this: T[], index: number, item: T): void {
  this.splice(index, 0, item);
};

String.prototype.toInt = function (
  this: string,
  radix?: number | undefined
): number {
  const parsed = parseInt(this, radix);
  return isNaN(parsed) ? 0 : parsed;
};

Vue.mixin(CnxVue);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount("#app");
