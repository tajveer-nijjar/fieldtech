import { ActionTree, GetterTree, Module, MutationTree } from "vuex";
import RootState from "@/interfaces/core/rootState";
import {
  Namespaces,
  SingalRConst,
  StoreActions,
  StoreGetters,
  Store,
  StoreMutationTypes
} from "@/constants";
import { ApiRequestData } from "@/models/system";
import { VehicleConfigurationService, SignalRService } from "@/services";
import { CellularNetworkRequestType } from "@/types/requestTypes";
import axios from "axios";
import { VehicleConfiguration } from "@/models/core";

export interface IVehicleConfigurationStoreState {
  [Store.States.VehicleConfigurationStoreStates
    .vehicleConfigurationAllData]: VehicleConfiguration;
}

const state: IVehicleConfigurationStoreState = {
  [Store.States.VehicleConfigurationStoreStates.vehicleConfigurationAllData]:
    new VehicleConfiguration()
};

const mutations: MutationTree<IVehicleConfigurationStoreState> = {
  [StoreMutationTypes.GET_VEHICLE_CONFIGURATION](
    state,
    vehicleConfiguration: VehicleConfiguration
  ) {
    state.vehicleConfigurationAllData = vehicleConfiguration;
  }
};

const getters: GetterTree<IVehicleConfigurationStoreState, RootState> = {};

const actions: ActionTree<IVehicleConfigurationStoreState, RootState> = {
  async [StoreActions.getVehicleConfigurationAsync]({
    state,
    dispatch,
    commit,
    rootGetters
  }) {
    const vehicleConfiguration =
      await VehicleConfigurationService.getVehicleConfigurationListAsync();
    commit(StoreMutationTypes.GET_VEHICLE_CONFIGURATION, vehicleConfiguration);
  },
  async [StoreActions.saveVehicleConfigurationAsync](
    { state, dispatch, commit, rootGetters },
    vehicleConfiguration
  ) {
    const x = vehicleConfiguration;
    await VehicleConfigurationService.saveVehicleConfigurationAsync(
      vehicleConfiguration
    );
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
