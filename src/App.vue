<script>
import {store} from './data/store';

  export default {
    name: 'home',

    methods:{

      getApi(){
        console.log(store.apiUrl);
      }
    },
    mounted(){
      this.getApi();
    }
  }
</script>

<template>
  <div>
    <h3>Home</h3>
  </div>
</template>

<style lang="scss" >
@import "./scss/Main.scss";
</style>
