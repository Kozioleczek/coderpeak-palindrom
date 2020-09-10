<template>
  <div id="app">
    <div class="container">
      <!-- Home page with login in -->
      <Home v-if="this.step === 0"/>
      <!-- End of Home page with login in -->
      <!-- Second screen with input -->
      <Second v-if="this.step === 1"/>
      <!-- End of Second screen with input -->
      <div class="row">
        <div class="col-12 text-center">
          <p class="text-muted">Source code avalible here: <a href="https://github.com/Kozioleczek/coderpeak-palindrom">Github</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Home from '@/components/Home.vue';
import Second from '@/components/Second.vue';

export default {
  name: 'App',
  components: {
    Home,
    Second,
  },
  computed: {
    ...mapState(['step']),
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
