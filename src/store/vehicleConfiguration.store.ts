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

export interface VehicleConfigurationStoreState {}

const state: VehicleConfigurationStoreState = {};

const mutations: MutationTree<VehicleConfigurationStoreState> = {};

const getters: GetterTree<VehicleConfigurationStoreState, RootState> = {};

const actions: ActionTree<VehicleConfigurationStoreState, RootState> = {
  [StoreActions.sendCellularNetworkHubRequest]({ state, rootGetters }) {}
};

const vehicleConfigurationStore: Module<
  VehicleConfigurationStoreState,
  RootState
> = {
  namespaced: true,
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions
};

export default vehicleConfigurationStore;
