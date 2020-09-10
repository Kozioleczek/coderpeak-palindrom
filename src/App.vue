<template>
  <div id="app">
    <div class="container">
      <!-- Home page with login in -->
      <div
        id="home"
        class="row mb-3"
        v-if="this.step === 0"
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
      <!-- End of Home page with login in -->
      <!-- Second screen with input -->
      <div
        id="second"
        class="row mb-3"
        v-if="this.step === 1"
      >
        <div class="col-12 text-center mb-3">
          <h1>Input string and check if it is palindrome.</h1>
        </div>
        <div class="col-lg-8 col-12 mx-auto mb-5">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control form-control-lg"
              placeholder="Input string to check"
              aria-label="Input string to check"
              aria-describedby="basic-addon2"
              v-model="query"
              >
            <div class="input-group-append">
              <button
                class="btn btn-primary"
                type="button"
                @click="check"
                >
              Check palindrome
              </button>
            </div>
          </div>
          <div class="invalid-feedback d-block" v-if="error == true">
              {{ feedback }}
          </div>
           <div class="valid-feedback d-block" v-if="success == true">
              {{ feedback }}
          </div>
        </div>

        <div class="col-lg-8 mx-auto col-12 text-left">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">String</th>
                  <th scope="col">Palindrome</th>
                  <th scope="col">Type</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(entry, index) in this.data" :key="index">
                  <th scope="row">{{index}}</th>
                  <td>{{entry.text}}</td>
                  <td>{{entry.isPalindrom}}</td>
                  <td>{{entry.type}}</td>
                  <td><button class="btn btn-sm btn-outline-dark">Delete</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- End of Second screen with input -->
      <div id="debug" class="row">
        <div class="col-12">
          <button @click="get">Init store</button>
          <span>Step: {{this.step}} </span>
        </div>
      </div>
      <div class="row">
        <div class="col-12 text-center">
          <p class="text-muted">Source code avalible here: <a href="https://github.com/Kozioleczek/coderpeak-palindrom">Github</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'App',
  data() {
    return {
      query: null,
      details: {
        email: null,
        password: null,
      },
      error: false,
      success: false,
      feedback: null,
    };
  },
  computed: {
    ...mapState(['step', 'data']),
  },
  methods: {
    ...mapActions(['getInitStore', 'loginUser', 'checkStringPalindrome']),
    get() {
      this.getInitStore();
    },
    login() {
      this.loginUser(this.details);
    },
    check() {
      const regex = /^\+?[0-9.-]+$/;
      if (regex.test(this.query) === false) {
        this.checkStringPalindrome(this.query);
        this.error = false;
        this.success = true;
        this.feedback = 'Yours string is correct';
      } else {
        this.error = true;
        this.success = false;
        this.feedback = 'You have inputed just numbers. This is not correct string';
      }
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
  color: #2c3e50;
  margin-top: 60px;
}
</style>
