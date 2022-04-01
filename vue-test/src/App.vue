<template>
  <div id="app" >
    <my-cabecera></my-cabecera><br>
    <my-lista></my-lista><br>
    <amplify-chatbot
      bot-name="BookTrip_dev"
      bot-title="FaunaDexin"
      welcome-message="Hello, how can I help you?"
      clear-on-complete="true"
    />
  </div>
</template>

<script>
import MyLista from './components/Lista.vue'
import MyCabecera from './components/Cabecera.vue'

export default {
  name: 'App', 
  components:{
    MyLista,
    MyCabecera
  },
  mounted() {
      const chatbotElement = this.$el.querySelector("amplify-chatbot");
      chatbotElement.addEventListener("chatCompleted", this.handleChatComplete);
  },
  beforeUnmount() {
    const chatbotElement = this.$el.querySelector("amplify-chatbot");
    chatbotElement.removeEventListener("chatCompleted", this.handleChatComplete);
  },
  methods: {
    handleChatComplete(event){
      const { data, err } = event.detail
      if (err){
        alert(err)
        return
      }
      alert('It Works! '+ JSON.stringify(data))
    }
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
