<script>
import axios from 'axios';
import { store } from '../data/store';

export default {
  name: 'ContactForm',

  data() {
    return {
      name: '',
      email: '',
      message: '',
      errors: {},
      success: false,
    }
  },
  methods: {

    sendForm() {
      const data = {
        name: this.name,
        email: this.email,
        message: this.message,
      }
      axios.post(store.contactUrl, data)
        .then(result => {
          console.log(result.data.errors);
          console.log(result.data.success);
          this.success = result.data.success;
          if (result.data && result.data.errors) {
            this.errors = result.data.errors;
          } else {
            this.errors = {};
          }
        })
    }
  }
}
</script>


<template>
  <form @submit.prevent="sendForm()" v-if="!success">
    <div class="mb-3">
      <div class="mb-3">
        <label class="form-label">Name</label>
        <input v-model.trim="name" type="text" :class="{ 'error': errors.name }" class="form-control" name="name"
          placeholder="Name">
          <span class="badge bg-danger m-2" v-html="errors.name"></span>
      </div>
      <label class="form-label">Email address</label>
      <input v-model.trim="email" type="email" :class="{ 'error': errors.email }" class="form-control"
        id="exampleInputEmail1" placeholder="Email">
        <span class="badge bg-danger m-2" v-html="errors.email"></span>
    </div>
    <div class="mb-3">
      <label class="form-label">Message</label>
      <textarea v-model.trim="message" type="text" :class="{ 'error': errors.message }" class="form-control" name="name"
        placeholder="Write something"></textarea>
        <span class="badge bg-danger m-2" v-html="errors.message"></span>
    </div>

    <button type="submit" class="btn btn-dark m-3">Send</button>
  </form>

  <div v-else class="badge bg-success">
    <h1>Form submitted correctly!</h1>
  </div>
</template>


<style lang="scss" scoped >
.error {
  border: 1px solid brown
}
</style>