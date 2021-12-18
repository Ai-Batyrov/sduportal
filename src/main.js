import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'animate.css'

export default {
  name: 'App',
  components: {
  }
}
createApp(App).use(router).mount('#app')
