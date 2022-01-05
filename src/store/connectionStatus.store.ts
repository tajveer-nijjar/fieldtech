import { ActionTree, GetterTree, Module, MutationTree } from "vuex";
import RootState from "@/interfaces/core/rootState";
import {
  Namespaces,
  SingalRConst,
  StoreActions,
  StoreGetters,
  Store
} from "@/constants";
import { ApiRequestData } from "@/models/system";
import { SignalRService } from "@/services";
import { CellularNetworkRequestType } from "@/types/requestTypes";

export interface ConnectionStatusStoreState {
  [Store.States.Root.isBusy]: boolean;
  [Store.States.ConnectionStatusStoreStates
    .hubCellularNetworkStatus]: SignalRService;
}

const state: ConnectionStatusStoreState = {
  [Store.States.Root.isBusy]: false,
  [Store.States.ConnectionStatusStoreStates.hubCellularNetworkStatus]:
    new SignalRService(SingalRConst.connectionCellularNetworkStatus)
};

const mutations: MutationTree<ConnectionStatusStoreState> = {};

const getters: GetterTree<ConnectionStatusStoreState, RootState> = {};

const actions: ActionTree<ConnectionStatusStoreState, RootState> = {
  [StoreActions.sendCellularNetworkHubRequest]({ state, rootGetters }) {
    if (!state.hubCellularNetworkStatus.connected) {
      return;
    }

    const apiRequestData: ApiRequestData =
      rootGetters[`${Namespaces.root}/${StoreGetters.apiRequestData}`];

    if (!apiRequestData.isValid) {
      return;
    }

    const request: CellularNetworkRequestType = {
      ...apiRequestData.hubRequestData
    };

    state.hubCellularNetworkStatus.invoke(
      SingalRConst.connectionCellularNetworkStatus,
      request
    );
  }
};

const messageStore: Module<ConnectionStatusStoreState, RootState> = {
  namespaced: true,
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions
};

export default messageStore;
