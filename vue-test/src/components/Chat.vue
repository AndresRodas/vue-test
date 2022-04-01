<template>
    <div>
        <amplify-chatbot
            bot-name="BookTrip_dev"
            bot-title="FaunaDexin"
            welcome-message="Hello, how can I help you?"
            clear-on-complete="true"
        />
    </div>
</template>

<script>
    export default {
        name: 'ChatBot',
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
    }
</script>
