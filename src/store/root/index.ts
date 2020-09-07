import { createStore, StoreOptions } from "vuex";
import {
  RootStateInterface,
  RootStoreInterface,
  RootStoreModel,
} from "@/models/store";
import { initialRootState } from "./initialState";
// import each Vuex module
import { itemsState } from "@/store/items";
import { localesState } from "@/store/locales";
// Vuex store options to build our modularized namespaced store
const storeOptions: StoreOptions<RootStateInterface> = {
  state: initialRootState,
  modules: {
    itemsState,
    localesState,
    // as you create additional modules, you'll add them here
    // similar to the itemsState
  },
};
// Vuex Root store instance
export const store: RootStoreModel<RootStateInterface> = <any>(
  createStore(storeOptions)
);
