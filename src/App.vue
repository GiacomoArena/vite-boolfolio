<script>
import { store } from './data/store';
import axios from 'axios';

export default {
  name: 'home',

  data() {
    return {
      portfolios: []
    }
  },
  methods: {
    getApi() {
      console.log(store.apiUrl);
      axios.get(store.apiUrl).then(results => {
        this.portfolios = results.data
        console.log(this.portfolios);
      })
    }
  },

  mounted() {
    this.getApi();
  }
}
</script>

<template>
  <div class="container">
    <h2>portfolios</h2>
    
    <table class="table table-striped ">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Name</th>
          <th scope="col">Surname</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in portfolios" :key="item.id">

          <td>{{ item.title }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.surname }}</td>
        </tr>
        </tbody>
    </table>
  </div>
</template>

<style lang="scss" >
@import "./scss/Main.scss";
</style>
