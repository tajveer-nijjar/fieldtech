import { Action, ActionTree, GetterTree, Module, MutationTree } from "vuex";
import RootState from "@/interfaces/core/rootState";
import {
  Namespaces,
  StoreActions,
  StoreGetters,
  Store,
  StoreMutationTypes
} from "@/constants";
import Volume from "@/models/core/volume";
import { VolumeService } from "@/services";
import Utils, { DateUtils, DebugUtils, HttpUtils } from "@/utils";

export interface IVolumeStoreState {
  [Store.States.VolumeStoreStates.volumeData]: Volume;
  [Store.States.Root.isBusy]: boolean;
  [Store.States.Root.errorMessage]: string;
}

const state: IVolumeStoreState = {
  [Store.States.VolumeStoreStates.volumeData]: new Volume(),
  [Store.States.Root.isBusy]: false,
  [Store.States.Root.errorMessage]: ""
};

const mutations: MutationTree<IVolumeStoreState> = {
  //#region GET VOLUME
  [StoreMutationTypes.START_GET_VOLUME_DATA](state) {
    state.isBusy = true;
  },

  [StoreMutationTypes.GET_VOLUME_DATA_SUCCESS](state, volume: Volume) {
    state.volumeData = volume;
  },

  [StoreMutationTypes.GET_VOLUME_DATA_FAILURE](state, errorMessage) {
    state.errorMessage = errorMessage;
  },

  [StoreMutationTypes.GET_VOLUME_DATA_FINISHED](state) {
    state.isBusy = false;
  }
  //#endregion
};

const getters: GetterTree<IVolumeStoreState, RootState> = {};

const actions: ActionTree<IVolumeStoreState, RootState> = {
  async [StoreActions.getVolumeDataAsync]({
    state,
    dispatch,
    commit,
    rootGetters
  }) {
    try {
      commit(StoreMutationTypes.START_GET_VOLUME_DATA);
      const volumeData = await VolumeService.getVolumeDataAsnyc();
      commit(StoreMutationTypes.GET_VOLUME_DATA_SUCCESS, volumeData);
    } catch (error) {
      const errorMessage =
        "[VehicleConfiguration] Error happened while downloading Vehicle Configuration from the API.";
      DebugUtils.error(errorMessage);
      HttpUtils.showHttpError(error);
      commit(StoreMutationTypes.GET_VOLUME_DATA_FAILURE);
    } finally {
      commit(StoreMutationTypes.GET_VOLUME_DATA_FINISHED);
    }
  }
};

const volumeStore: Module<IVolumeStoreState, RootState> = {
  namespaced: true,
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions
};

export default volumeStore;
