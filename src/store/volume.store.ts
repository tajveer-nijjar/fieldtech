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

const mutations: MutationTree<IVolumeStoreState> = {};

const getters: GetterTree<IVolumeStoreState, RootState> = {};

const actions: ActionTree<IVolumeStoreState, RootState> = {};

const volumeStore: Module<IVolumeStoreState, RootState> = {
  namespaced: true,
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions
};

export default volumeStore;
