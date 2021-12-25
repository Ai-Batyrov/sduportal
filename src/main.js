import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'tailwindcss/dist/tailwind.css'
import 'tailwindcss/dist/tailwind-dark.css'
import 'tailwindcss/dist/base.min.css'
import 'tailwindcss/dist/components.min.css'

export default {
  name: 'App',
  components: {}
}
createApp(App).use(router).mount('#app')
