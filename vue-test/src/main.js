//vue
import { createApp } from 'vue'
import App from './App.vue'
//store
import store from './store'
//Prime
// import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/lara-dark-teal/theme.css' // theme
import 'primevue/resources/primevue.min.css' // core css
import 'primeicons/primeicons.css'

//chatbot
import { applyPolyfills, defineCustomElements} from '@aws-amplify/ui-components/loader';
import Amplify from "aws-amplify"
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);
applyPolyfills().then(() => {
    defineCustomElements(window);
  });

const app = createApp(App);
// store use
app.use( store)
app.mount('#app');
app.config.compilerOptions.isCustomElement = tag => tag.startsWith('amplify-');
//createApp(App).use(store).mount('#app')
