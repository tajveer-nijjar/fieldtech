import { ActionTree, GetterTree, Module, MutationTree } from "vuex";
import RootState from "@/interfaces/core/rootState";
import {
  Namespaces,
  StoreActions,
  StoreGetters,
  Store,
  StoreMutationTypes
} from "@/constants";
import { LogsService } from "@/services";
import { Logs } from "@/models/core";
import Utils, { DateUtils, DebugUtils, HttpUtils } from "@/utils";

export interface ILogsStoreState {
  [Store.States.LogsStoreStates.logsData]: Logs;
  [Store.States.LogsStoreStates.isBusy]: boolean;
  [Store.States.LogsStoreStates.errorMessage]: string;
}

const state: ILogsStoreState = {
  [Store.States.LogsStoreStates.logsData]: new Logs(),
  [Store.States.LogsStoreStates.isBusy]: false,
  [Store.States.LogsStoreStates.errorMessage]: ""
};

const mutations: MutationTree<ILogsStoreState> = {
  //#region GET_LOGS
  [StoreMutationTypes.START_GET_LOGS](state) {
    state.isBusy = true;
  },

  [StoreMutationTypes.GET_LOGS_SUCCESS](state, logs: Logs) {
    state.logsData = logs;
  },

  [StoreMutationTypes.GET_LOGS_FAILURE](state, errorMessage) {
    state.errorMessage = errorMessage;
  },

  [StoreMutationTypes.GET_LOGS_FINISHED](state) {
    state.isBusy = false;
  }
  //#endregion
};

const getters: GetterTree<ILogsStoreState, RootState> = {};

const actions: ActionTree<ILogsStoreState, RootState> = {
  async [StoreActions.getLogsAsync]({ state, dispatch, commit, rootGetters }) {
    try {
      commit(StoreMutationTypes.START_GET_LOGS);
      const logs = await LogsService.getLogsAsync();
      commit(StoreMutationTypes.GET_LOGS_SUCCESS, logs);
    } catch (error) {
      const errorMessage =
        "[Logs] Error happened while downloading Vehicle Configuration from the API.";
      DebugUtils.error(errorMessage);
      HttpUtils.showHttpError(error);
      commit(StoreMutationTypes.GET_LOGS_FAILURE, errorMessage);
    } finally {
      commit(StoreMutationTypes.GET_LOGS_FINISHED);
    }
  }
};

const logsStore: Module<ILogsStoreState, RootState> = {
  namespaced: true,
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions
};

export default logsStore;
