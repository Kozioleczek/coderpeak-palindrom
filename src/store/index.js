import Vue from 'vue';
import Vuex from 'vuex';

const init = require('./initial-store.json');

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    step: 0,
    user: {
      email: 'hello@capraweb.pl',
      password: '12345',
    },
    isAuthenticated: false,
    data: null,
  },
  mutations: {
    SET_INIT_STORE(state, data) {
      this.state.data = data;
    },
    SET_AUTH_STATUS(state, status) {
      this.state.isAuthenticated = status;
    },
  },
  getters: {
    userEmail: (state) => state.user.email,
    userPassword: (state) => state.user.password,
  },
  actions: {
    getInitStore({ commit }) {
      console.log(init);
      commit('SET_INIT_STORE', init);
    },
    loginUser({ commit, getters }, details) {
      // Check if inputed data match Vuex user object
      // eslint-disable-next-line max-len
      if (getters.userEmail === details.email && getters.userPassword === details.password) {
        commit('SET_AUTH_STATUS', true);
      } else {
        console.log('Bład');
      }
    },
  },
  modules: {
  },
});
