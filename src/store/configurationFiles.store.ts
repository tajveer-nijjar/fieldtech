import { ActionTree, GetterTree, Module, MutationTree } from "vuex";
import RootState from "@/interfaces/core/rootState";
import {
  Namespaces,
  StoreActions,
  StoreGetters,
  Store,
  StoreMutationTypes
} from "@/constants";
import { ConfigurationFilesService } from "@/services";
import { ConfigurationFiles } from "@/models/core";
import Utils, { DateUtils, DebugUtils, HttpUtils } from "@/utils";

export interface IConfigurationFilesStoreState {
  [Store.States.ConfigurationFilesStoreStates
    .configurationFilesData]: ConfigurationFiles;
  [Store.States.ConfigurationFilesStoreStates.isBusy]: boolean;
  [Store.States.ConfigurationFilesStoreStates.errorMessage]: string;
}

const state: IConfigurationFilesStoreState = {
  [Store.States.ConfigurationFilesStoreStates.configurationFilesData]:
    new ConfigurationFiles(),
  [Store.States.ConfigurationFilesStoreStates.isBusy]: false,
  [Store.States.ConfigurationFilesStoreStates.errorMessage]: ""
};

const mutations: MutationTree<IConfigurationFilesStoreState> = {
  //#region GET_CONFIGURATION_FILESS
  [StoreMutationTypes.START_GET_CONFIGURATION_FILES](state) {
    state.isBusy = true;
  },

  [StoreMutationTypes.GET_CONFIGURATION_FILES_SUCCESS](
    state,
    configurationFiles: ConfigurationFiles
  ) {
    state.configurationFilesData = configurationFiles;
  },

  [StoreMutationTypes.GET_CONFIGURATION_FILES_FAILURE](state, errorMessage) {
    state.errorMessage = errorMessage;
  },

  [StoreMutationTypes.GET_CONFIGURATION_FILES_FINISHED](state) {
    state.isBusy = false;
  }
  //#endregion
};

const getters: GetterTree<IConfigurationFilesStoreState, RootState> = {};

const actions: ActionTree<IConfigurationFilesStoreState, RootState> = {
  async [StoreActions.getConfigurationFilesAsync]({
    state,
    dispatch,
    commit,
    rootGetters
  }) {
    try {
      commit(StoreMutationTypes.START_GET_CONFIGURATION_FILES);
      const configurationFiles =
        await ConfigurationFilesService.getConfigurationFilesAsync();
      commit(
        StoreMutationTypes.GET_CONFIGURATION_FILES_SUCCESS,
        configurationFiles
      );
    } catch (error) {
      const errorMessage =
        "[ConfigurationFiles] Error happened while downloading Vehicle Configuration from the API.";
      DebugUtils.error(errorMessage);
      HttpUtils.showHttpError(error);
      commit(StoreMutationTypes.GET_CONFIGURATION_FILES_FAILURE, errorMessage);
    } finally {
      commit(StoreMutationTypes.GET_CONFIGURATION_FILES_FINISHED);
    }
  }
};

const configurationFilesStore: Module<
  IConfigurationFilesStoreState,
  RootState
> = {
  namespaced: true,
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions
};

export default configurationFilesStore;
