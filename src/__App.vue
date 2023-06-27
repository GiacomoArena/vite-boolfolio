<script>
import { store } from './data/store';
import axios from 'axios';

export default {
  name: 'home',

  data() {
    return {
      portfolios: [],
      links: []
    }
  },
  methods: {
    getApi(endpoint) {
      axios.get(endpoint).then(results => {

        this.portfolios = results.data.data
        this.links = results.data.links

       // console.log(this.portfolios);
      })
    }
  },

  mounted() {
    this.getApi(store.apiUrl);
  }
}
</script>

<template>
  <div class="container">
    <h2>portfolios</h2>
    
    <table class="table table-striped ">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">Name</th>
          <th scope="col">Surname</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in portfolios" :key="item.id">

          <td>{{ item.id }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.surname }}</td>
        </tr>
        </tbody>
    </table>
    <div>
      <button class="btn btn-dark"
      v-for="(link, i) in links" :key="i"
      v-html="link.label"
      @click="getApi(link.url)">
      
      </button>
    </div>
  </div>
</template>

<style lang="scss" >
@import "./scss/Main.scss";
</style>
