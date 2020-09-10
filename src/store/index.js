import Vue from 'vue';
import Vuex from 'vuex';
import Palindrome from '@/functions/check-palindrome';

const init = require('./initial-store.json');

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    step: 1,
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
    CHANGE_STEP(state, step) {
      this.state.step = step;
    },
    APPEND_DATA(state, string) {
      state.data.push(string);
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
      // Warning: This approch to auth user is dangerous and incorrect.
      // Storing any sensitive data on client side is allowing user to get it with
      // minimal effort, just by using Developer Console build in web browser
      // The better solution to auth user was presented in my app CapraCutie, where
      // user authorisation is based on CSRF cookies delivered by backend running on
      // Laravel with Sanctum

      // eslint-disable-next-line max-len
      if (getters.userEmail === details.email && getters.userPassword === details.password) {
        commit('SET_AUTH_STATUS', true);
        commit('CHANGE_STEP', 1);
      } else {
        console.log('Bład');
      }
    },
    checkStringPalindrome({ commit }, string) {
      const pal = new Palindrome(string);
      if (pal.check()) {
        const res = { text: string, isPalindrom: true, type: 'user' };
        commit('APPEND_DATA', res);
      } else {
        const res = { text: string, isPalindrom: false, type: 'user' };
        commit('APPEND_DATA', res);
      }
    },
  },
  modules: {
  },
});
