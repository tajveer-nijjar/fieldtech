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
import { VehicleConfigurationService, SignalRService } from "@/services";
import { CellularNetworkRequestType } from "@/types/requestTypes";
import axios from "axios";

export interface IVehicleConfigurationStoreState {}

const state: IVehicleConfigurationStoreState = {};

const mutations: MutationTree<IVehicleConfigurationStoreState> = {};

const getters: GetterTree<IVehicleConfigurationStoreState, RootState> = {};

const actions: ActionTree<IVehicleConfigurationStoreState, RootState> = {
  async [StoreActions.getVehicleConfigurationAsync]({
    state,
    dispatch,
    commit,
    rootGetters
  }) {
    const x =
      await VehicleConfigurationService.getVehicleConfigurationListAsync();
    debugger;
  }
};

const vehicleConfigurationStore: Module<
  IVehicleConfigurationStoreState,
  RootState
> = {
  namespaced: true,
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions
};

export default vehicleConfigurationStore;
