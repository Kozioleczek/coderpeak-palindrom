<template>
  <div id="app">
    <div class="container">
      <div
        id="home"
        class="row mb-3"
        v-if="step === 0"
      >
        <div class="col-12 text-center mb-3">
          <h1>Palindrom Checker</h1>
        </div>
        <div class="col-lg-6 mx-auto col-12 text-left">
          <div class="card">
            <div class="card-header">
              Login in to preceed
            </div>
            <div class="card-body">
            <div class="form-group">
              <label for="emailInput">Email address</label>
              <input
                type="email"
                class="form-control"
                id="emailInput"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                v-model="details.email"
              >
            </div>
            <div class="form-group">
              <label for="passwordInput">Password</label>
              <input
                type="password"
                class="form-control"
                id="passwordInput"
                placeholder="Password"
                v-model="details.password"
              >
            </div>
            <button
            class="btn btn-primary w-100 btn-lg"
            @click="login"
            >
            Login in
            </button>
            </div>
          </div>

        </div>
      </div>
      <div id="debug" class="row">
        <div class="col-12">
          <button @click="get">Init store</button>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <p class="text-muted">Source code avalible here: <a href="https://github.com/Kozioleczek/coderpeak-palindrom">Github</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'App',
  data() {
    return {
      step: 0,
      details: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    ...mapActions(['getInitStore', 'loginUser']),
    get() {
      this.getInitStore();
    },
    login() {
      this.loginUser(this.details);
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');
@import 'node_modules/bootstrap/scss/bootstrap';
@import "node_modules/bootstrap/scss/_functions";
@import "node_modules/bootstrap/scss/_variables";
@import "node_modules/bootstrap/scss/mixins/_breakpoints";
#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
