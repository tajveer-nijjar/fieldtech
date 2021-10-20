import { Store } from "@/constants";
import RootState from "@/interfaces/core/rootState";
import { ActionTree, GetterTree, Module, MutationTree } from "vuex";

export interface AppStoreState {
  [Store.States.Root.isBusy]: boolean;
  [Store.States.Root.isDrawerOpened]: boolean;
}

const state: AppStoreState = {
  [Store.States.Root.isBusy]: false,
  [Store.States.Root.isDrawerOpened]: false
};

const mutations: MutationTree<AppStoreState> = {
  [Store.Mutations.Root.setIsBusy](state, isBusy: boolean): void {
    state.isBusy = isBusy;
  },
  [Store.Mutations.Root.setDrawerVisibility](state, visbile: boolean): void {
    state.isDrawerOpened = visbile;
  }
};

const getters: GetterTree<AppStoreState, RootState> = {};

const actions: ActionTree<AppStoreState, RootState> = {};

const rootStore: Module<AppStoreState, RootState> = {
  namespaced: true,
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions
};

export default rootStore;
