<template>
  <div
        id="second"
        class="row mb-3"
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
                  <td>
                    <button
                      class="btn btn-sm btn-outline-dark"
                      @click="splice(index)"
                      >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Second',
  data() {
    return {
      query: null,
      error: false,
      success: false,
      feedback: null,
    };
  },
  mounted() {
    this.get();
  },
  computed: {
    ...mapState(['data']),
  },
  methods: {
    ...mapActions(['getInitStore', 'checkStringPalindrome', 'deleteEntry']),
    get() {
      this.getInitStore();
    },
    check() {
      const regex = /^\+?[0-9.-]+$/;
      if (regex.test(this.query) === false && this.query !== null && this.query !== '') {
        this.checkStringPalindrome(this.query);
        this.error = false;
        this.success = true;
        this.feedback = 'Yours string is correct';
      } if (this.query === '' || this.query === null) {
        this.error = true;
        this.success = false;
        this.feedback = 'You did not input any data!';
      } if (regex.test(this.query) === true && this.query !== null) {
        this.error = true;
        this.success = false;
        this.feedback = 'You have inputed just numbers. This is not correct string';
      }
    },
    splice(entry) {
      this.deleteEntry(entry);
    },
  },
};
</script>
