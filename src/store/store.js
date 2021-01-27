import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      history: [],
    };
  },
  mutations: {
    addHistory(state, item) {
      state.history.unshift(item);
    },
  },
  getters: {
    getHistory(state) {
      return state.history;
    },
  },
  actions: {},
  modules: {},
});
