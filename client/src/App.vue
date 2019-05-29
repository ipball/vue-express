<template>
  <div id="app">    
    <!-- <PostComponent/> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import PostComponent from './components/PostComponent.vue'

export default {
  name: 'app',
  components: {
    // PostComponent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
