<template>
  <div id="app" >
    <my-cabecera></my-cabecera><br>
    <my-lista></my-lista><br> 
    <chat-bot></chat-bot>
  </div>
</template>

<script>
import MyLista from './components/Lista.vue'
import MyCabecera from './components/Cabecera.vue'
import ChatBot from './components/Chat.vue'

export default {
  name: 'App', 
  components:{
    MyLista,
    MyCabecera,
    ChatBot
  }
  

};
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
