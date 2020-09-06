import { createStore } from "vuex";
import { ItemInterface } from "@/models/items/Item.interface";
import { ItemsStateInterface } from "@/models/store/ItemsState.interface";

const state: ItemsStateInterface = {
  loading: false,
  items: [],
};

export default createStore({
  state: state,
  mutations: {
    loadingItems(state: ItemsStateInterface) {
      state.loading = true;
      state.items = [];
    },
    loadedItems(state: ItemsStateInterface, items: ItemInterface[]) {
      state.items = items;
      state.loading = false;
    },
    selectItem(
      state: ItemsStateInterface,
      params: {
        id: number;
        selected: boolean;
      }
    ) {
      const { id, selected } = params;
      const item = state.items.find((o) => o.id === id);
      if (item) {
        item.selected = selected;
      }
    },
  },
  actions: {
    loadItems({ commit, state }) {
      commit("loadingItems");

      const mockItems: ItemInterface[] = [
        {
          id: 1,
          name: "item 1",
          selected: false,
        },
        {
          id: 2,
          name: "item 2 ",
          selected: false,
        },
        {
          id: 3,
          name: "item 3",
          selected: false,
        },
      ];
      setTimeout(() => {
        commit("loadedItems", mockItems);
      }, 1000);
    },
    selectItem(
      { commit }: any,
      params: {
        id: number;
        selected: boolean;
      }
    ) {
      commit("selectItem", params);
    },
  },
  modules: {},
});
