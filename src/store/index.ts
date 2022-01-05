import Vue from "vue";
import Vuex from "vuex";

import { Namespaces } from "@/constants";
import rootStore from "@/store/root.store";
import connectionStatusStore from "@/store/connectionStatus.store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    [Namespaces.root]: rootStore,
    [Namespaces.connectionStatus]: connectionStatusStore
  }
});
