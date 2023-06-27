<script>
import Header from './components/Header.vue';
export default {
  name: 'app',

  components:{
    Header
  },

  data() {
    return {

    }
  }
}

</script>

<template>
  <Header />

  <router-view></router-view>
</template>

<style lang="scss" >
@import "./scss/Main.scss";

</style>
