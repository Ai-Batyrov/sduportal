<template>
  <div class="app" :class="(mode === 'dark') ? 'dark' : ''">
    <SideBar id="sidebar" :mode="mode"/>
    <router-view id="main" v-slot="{ Component }">
      <transition name="bounce" mode="out-in">
        <component :is="Component" @toggle="toggle"/>
      </transition>
    </router-view>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  width: 100vw;
  height: 100vh;
}

.app {
  display: flex;
  flex-direction: row;
  padding: 2rem;
  transition: background-color 0.4s ease-in-out;
}

body {
  background: #F8F9FA!important;
  height: 100%;
}

.dark {
  background: #192734;
  color: #f3f3f3;
  transition: background-color 0.4s ease-in-out;
}

#sidebar {
   position: marker;
   display: flex;
   flex-direction: column;
   margin-right: 20px;
}

#main  {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
}

.bounce-leave-active {
  animation: bounce-in 0.4s reverse;
}

.bounce-enter-active {
  animation: bounce-in 0.4s;
}

@keyframes bounce-in {
  0% {
    transform: translateY(5rem);
    opacity: 0;
  }
  50% {
    transform: translateY(-2rem);
    opacity: 0.5;
  }
  100% {
    transform: translateY(0rem);
    opacity: 1;
  }
}

@media screen and (min-width: 1023px) and (max-width: 1026px) {
  .app {
    width: 100vw;
    padding: 1rem;
  }
}
</style>
<script>
import SideBar from '@/components/SideBar'
import Main from '@/views/Main'
import MyCurriculum from '@/views/MyCurriculum'
export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { SideBar, Main, MyCurriculum },
  data () {
    return {
      mode: ''
    }
  },
  methods: {
    toggle () {
      (this.mode === 'dark') ? this.mode = 'light' : this.mode = 'dark'
    }
  }
}
</script>
