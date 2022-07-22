import { ActionTree, GetterTree, Module, MutationTree } from "vuex";
import RootState from "@/interfaces/core/rootState";
import {
  Namespaces,
  StoreActions,
  StoreGetters,
  Store,
  StoreMutationTypes
} from "@/constants";
import { VehicleConfigurationService } from "@/services";
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
  //#region GET VEHICLE CONFIG
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
  },
  //#endregion

  //#region POST VEHICLE CONFIG
  [StoreMutationTypes.START_POST_VEHICLE_CONFIGURATION](state) {
    state.isBusy = true;
  },

  [StoreMutationTypes.POST_VEHICLE_CONFIGURATION_SUCCESS](
    state,
    vehicleConfiguration: VehicleConfiguration
  ) {
    state.vehicleConfigurationAllData = vehicleConfiguration;
  },

  [StoreMutationTypes.POST_VEHICLE_CONFIGURATION_FAILURE](state, errorMessage) {
    state.errorMessage = "errorMessage";
  },

  [StoreMutationTypes.POST_VEHICLE_CONFIGURATION_FINISHED](state) {
    state.isBusy = false;
  }
  //#endregion
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
    try {
      commit(StoreMutationTypes.START_POST_VEHICLE_CONFIGURATION);

      const response =
        await VehicleConfigurationService.saveVehicleConfigurationAsync(
          vehicleConfiguration
        );
      commit(StoreMutationTypes.POST_VEHICLE_CONFIGURATION_SUCCESS, response);
    } catch (e) {
      const errorMessage =
        "[VehicleConfiguration] Error happened while saving Vehicle Configuration from the API.";
      DebugUtils.error(errorMessage);
      HttpUtils.showHttpError(e);

      commit(StoreMutationTypes.POST_VEHICLE_CONFIGURATION_FAILURE);
    } finally {
      commit(StoreMutationTypes.POST_VEHICLE_CONFIGURATION_FINISHED);
    }
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
