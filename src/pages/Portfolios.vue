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
    getApi(endpoint=store.apiUrl) {
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
        console.log(this.type);
      })
    },
    gettypeid(id) {
      this.getApi(store.apiUrl + '/by-type/' + id)
    },
  },

  mounted() {
    this.getApi();
    this.getType();
  }
}
</script>

<template>
  <div class="container card d-flex">
    <h2>portfolios</h2>
    <div class="main-container d-flex">

      <div class="left-container ">
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
      </div>
      
      <div class="right-container ">
        <div>
          <button class="btn btn-danger m-2"
          @click="getApi()">
            <i class="fa-solid fa-rotate"></i>
          </button>
          <i class="fa-solid fa-filter"></i>
        </div>
        <button class="btn my-btn" v-for="item in type" :key="item.id" @click="gettypeid(item.id)">
          {{ item.type }}
        </button>
      </div>
      
    </div>

      <div class="m-2">
        <button class="btn btn-dark m-1" v-for="(link, i) in links" :key="i" v-html="link.label"
          @click="getApi(link.url)">
        </button>
      </div>


  </div>
</template>

<style lang="scss" scoped >

  .main-container{
    .left-container{
      width: 100%;
    }
    .right-container{
      overflow-y: auto;
      height: 500px;
      width: 250px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .my-btn{
        background-color: rgba(56, 35, 35, 0.788);
        color: white;
        width: 150px;
        margin: 5px;
      }
    }
  }
</style>
