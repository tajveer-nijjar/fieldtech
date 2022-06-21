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
import Utils, { DateUtils, DebugUtils, HttpUtils } from "@/utils";

export interface IVehicleConfigurationStoreState {
  [Store.States.VehicleConfigurationStoreStates
    .vehicleConfigurationAllData]: VehicleConfiguration;
  [Store.States.VehicleConfigurationStoreStates.isBusy]: boolean;
  [Store.States.VehicleConfigurationStoreStates.errorMessage]: string;
}

const state: IVehicleConfigurationStoreState = {
  [Store.States.VehicleConfigurationStoreStates.vehicleConfigurationAllData]:
    new VehicleConfiguration(),
  [Store.States.VehicleConfigurationStoreStates.isBusy]: false,
  [Store.States.VehicleConfigurationStoreStates.errorMessage]: ""
};

const mutations: MutationTree<IVehicleConfigurationStoreState> = {
  [StoreMutationTypes.START_GET_VEHICLE_CONFIGURATION](state) {
    state.isBusy = true;
  },

  [StoreMutationTypes.GET_VEHICLE_CONFIGURATION_SUCCESS](
    state,
    vehicleConfiguration: VehicleConfiguration
  ) {
    state.vehicleConfigurationAllData = vehicleConfiguration;
  },

  [StoreMutationTypes.GET_VEHICLE_CONFIGURATION_FAILURE](state, errorMessage) {
    state.errorMessage = errorMessage;
  },

  [StoreMutationTypes.GET_VEHICLE_CONFIGURATION_FINISHED](state) {
    state.isBusy = false;
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
    try {
      commit(StoreMutationTypes.START_GET_VEHICLE_CONFIGURATION);
      const vehicleConfiguration =
        await VehicleConfigurationService.getVehicleConfigurationListAsync();
      commit(
        StoreMutationTypes.GET_VEHICLE_CONFIGURATION_SUCCESS,
        vehicleConfiguration
      );
    } catch (e) {
      const errorMessage =
        "[VehicleConfiguration] Error happened while downloading Vehicle Configuration from the API.";
      DebugUtils.error(errorMessage);
      HttpUtils.showHttpError(e);
      commit(
        StoreMutationTypes.GET_VEHICLE_CONFIGURATION_FAILURE,
        errorMessage
      );
    } finally {
      commit(StoreMutationTypes.GET_VEHICLE_CONFIGURATION_FINISHED);
    }
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
