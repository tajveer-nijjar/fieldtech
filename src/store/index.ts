import Vue from "vue";
import Vuex from "vuex";

import { Namespaces } from "@/constants";
import rootStore from "@/store/root.store";
import connectionStatusStore from "@/store/connectionStatus.store";
import vehicleConfigurationStore from "@/store/vehicleConfiguration.store";
import volumeStore from "@/store/volume.store";
import logsStore from "@/store/logs.store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    [Namespaces.root]: rootStore,
    [Namespaces.connectionStatus]: connectionStatusStore,
    [Namespaces.vehicleConfiguration]: vehicleConfigurationStore,
    [Namespaces.volume]: volumeStore,
    [Namespaces.logs]: logsStore
  }
});
