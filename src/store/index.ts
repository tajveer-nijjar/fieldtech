import { Namespaces } from "@/constants";
import rootStore from "@/store/root.store";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    [Namespaces.root]: rootStore
  }
});
