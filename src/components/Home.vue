<template>
  <div
        id="home"
        class="row mb-3"
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
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Home',
  data() {
    return {
      details: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    ...mapActions(['loginUser']),
    login() {
      this.loginUser(this.details);
    },
  },
};
</script>
