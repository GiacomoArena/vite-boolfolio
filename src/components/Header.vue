<script>
export default {
  name: 'Header'
}
</script>


<template>
  <ul class="nav justify-content-center">
    <li class="nav-item">
      <router-link :to="{name:'home'}">Home</router-link>
    </li>
    <li class="nav-item">
      <router-link :to="{name:'portfolios'}">Portfolios</router-link>
    </li>
    <li class="nav-item">
      <router-link :to="{name:'about'}">About</router-link>
    </li>
    <li class="nav-item">
      <router-link :to="{name:'contacts'}">Contacts</router-link>
    </li>

  </ul>
</template>


<style lang="scss" scoped >
  ul{
    li{
      margin: 15px;
      a{
        text-decoration: none;
        text-transform: none;
        color: white;
        font-size: 1.2rem;
        &:hover,&.active{
          color: brown;
        }
      }
    }
  }
</style>