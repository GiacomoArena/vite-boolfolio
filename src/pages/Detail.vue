<script>
import { store } from '../data/store';
import axios from 'axios';
import Loader from '../components/Loader.vue';

export default {
  name: 'Detail',

  components: {
    Loader
  },

  data() {
    return {
      detail: null,
      Loader: false
    }
  },
  methods: {
    getApi() {
      this.Loader = false
      axios.get(store.apiUrl + '/' + this.$route.params.slug).then(results => {
        this.detail = results.data

        console.log(this.detail);
        this.Loader = true
      })
    },
  },
  mounted() {
    this.getApi();
  }
}
</script>


<template>
  <div v-if="Loader" class="container card">
    <h1>{{ detail.id }}-{{ detail.title }}</h1>
    <h5>{{ detail.name }} {{ detail.surname }}</h5>
    <div class="mb-4">
      <span class="badge bg-dark ms-3">
        {{ detail.type.type }}
      </span>
      <span class="badge bg-secondary ms-3" v-for="(tech, i) in detail.technologies" :key="i">
        {{ tech.name }}
      </span>
    </div>
    <img src="" alt="">
    <p>{{ detail.description }}</p>
  </div>


  <Loader v-else />
</template>


<style></style>