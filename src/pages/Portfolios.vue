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
    getTech() {
      axios.get(store.techUrl).then(results => {
        this.technologies = results.data
        console.log(this.technologies);
      })
    },
    gettypeid(id) {
      this.getApi(store.apiUrl + '/by-type/' + id)
    },
    gettechid(id) {
      this.getApi(store.apiUrl + '/by-tech/' + id)
    },
  },

  mounted() {
    this.getApi();
    this.getType();
    this.getTech();
  }
}
</script>

<template>
  <div class="container card d-flex">
    <h2>portfolios</h2>
    <div class="main-container d-flex">

      <div class="left-container ">
        <ol class="list-group m-1" v-for="item in portfolios" :key="item.id">
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
        <button class="btn my-btn2" v-for="item in technologies" :key="item.id" @click="gettechid(item.id)">
          {{ item.name }}
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
      //height: 500px;
      width: 250px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .my-btn,.my-btn2{
        background-color: rgba(20, 48, 30, 0.788);
        color: white;
        width: 150px;
        margin: 5px;
      }
      .my-btn2{
        background-color: rgb(95, 44, 44);
      }
    }
  }
</style>
