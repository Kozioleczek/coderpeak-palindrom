import Vue from 'vue';
import Vuex from 'vuex';

const init = require('./initial-store.json');

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    step: 0,
    data: null,
  },
  mutations: {
    SET_INIT_STORE(state, data) {
      this.state.data = data;
    },
  },
  actions: {
    getInitStore({ commit }) {
      console.log(init);
      commit('SET_INIT_STORE', init);
    },
  },
  modules: {
  },
});
