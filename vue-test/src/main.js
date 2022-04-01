import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
// import Amplify, * as AmplifyModules from "aws-amplify";
// import {AmplifyPlugin} from "aws-amplify-vue";
// import awsConfig from './aws-exports';
import AmplifyVue from '@aws-amplify/ui-vue';

//Amplify.configure(awsConfig);

createApp(App).use(store, AmplifyVue).mount('#app')
