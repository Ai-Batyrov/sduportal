import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

export default {
  name: 'App',
  components: {
  }
}
createApp(App).use(router).mount('#app')
