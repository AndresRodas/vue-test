<template>
  <div id="app" class="container">
    <my-cabecera></my-cabecera>
    <my-lista></my-lista>
  </div>
</template>

<script>
import MyCabecera from './components/Cabecera.vue'
import MyLista from './components/Lista.vue'

export default {
  name: 'App',
  components: {
    MyCabecera,
    MyLista
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
