<template>
  <div id="app" class="container">
    <my-cabecera></my-cabecera>
    <my-lista></my-lista>
    <amplify-chatbot :chatbotConfig="chatbotConfig" ></amplify-chatbot>
  </div>
</template>

<script>
import MyCabecera from './components/Cabecera.vue'
import MyLista from './components/Lista.vue'
import {Interactions} from 'aws-amplify'
export default {
  name: 'App',
  components: {
    MyCabecera,
    MyLista
  },
  data: () =>({
    chatbotConfig:{
      bot: "diligent-dev-chatbot",
      clearComplete: false
    }
  }),
  mounted(){
    Interactions.onComplete("diligent-dev-chatbot", this.handleComplete)
  },
  methods: {
    handleComplete(err, confirmation){
      if (err){
        alert(err)
        return
      }
      alert(JSON.stringify(confirmation))
    }
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
