<template>
  <div class="app">
    <ConstructionPage />
    <FooterComponent />
  </div>
</template>

<script>
import ConstructionPage from '../components/ConstructionPage.vue'
import FooterComponent from '../components/FooterComponent.vue'
export default {
  name: 'AboutPage',
  components: {
    ConstructionPage,
    FooterComponent
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
