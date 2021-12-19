<template>
    <SideBar id="sidebar" />
    <router-view id="main" v-slot="{ Component }">
      <transition name="bounce" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
</template>

<style>
#app {
   display: flex;
   flex-direction: row;
}

body {
  padding: 30px;
  background: #F8F9FA!important;
  height: 100%;
}

#sidebar {
   position: marker;
   display: flex;
   flex-direction: column;
   margin-right: 40px;
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
    transform: translateY(100rem);
    opacity: 0;
  }
  50% {
    transform: translateY(-5rem);
    opacity: 0.5;
  }
  100% {
    transform: translateY(0rem);
    opacity: 1;
  }
}

</style>
<script>
import SideBar from '@/components/SideBar'
import Main from '@/views/Main'
import MyCurriculum from '@/views/MyCurriculum'
export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { SideBar, Main, MyCurriculum }
}
</script>
