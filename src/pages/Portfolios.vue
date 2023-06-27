<script>
import { store } from '../data/store';
import axios from 'axios';

export default {
  name: 'home',

  data() {
    return {
      portfolios: [],
      type: [],
      technologies: [],
      links: []
    }
  },
  methods: {
    getApi(endpoint) { 
      axios.get(endpoint).then(results => {

        this.portfolios = results.data.data
        this.technologies = results.data.data.technologies
        this.links = results.data.links

        //console.log(results.data);
      })
    },
    getType() { 
      axios.get(store.typeUrl).then(results => {
        this.type = results.data
        console.log( this.type);
      })
    }
  },
  gettypeid(id){
    this.getApi(store.apiUrl +'/by-type/'+id)
  },

  mounted() {
    this.getApi(store.apiUrl);
    this.getType();
  }
}
</script>

<template>
  <div class="container card">
    <span>
      <h2>portfolios</h2> 
      <!-- <button v-for="item in type" :key="item.id" 
      @click="gettypeid(item.id)">
      {{ item.type }}
    </button> -->
    </span> 

    <ol class="list-group" v-for="item in portfolios" :key="item.id">
      <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
          <div class="fw-bold">{{ item.id }}-{{ item.title }}</div>
          <span>{{ item.name }} {{ item.surname }}</span>
          <span class="badge bg-dark ms-3">{{ item.type.type }}</span>
          <span class="badge bg-secondary ms-3" v-for="(tech, i) in item.technologies" :key="i">{{ tech.name }}</span>
        </div>
      </li>
    </ol>

    <div class="m-2">
      <button class="btn btn-dark m-1" v-for="(link, i) in links" :key="i" v-html="link.label" @click="getApi(link.url)">

      </button>
    </div>
  </div>
</template>

<style lang="scss" ></style>
