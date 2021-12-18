<template>
    <SideBar id="sidebar" />
    <router-view id="main" v-slot="{ Component }">
      <transition
        enter-active-class="animate__animated animate__fadeInDown"
        leave-active-class="animate__animated animate__fadeOutDown"
        mode="out-in"
      >
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
  background-color: #F8F9FA;
  height: 90%;
}

#sidebar {
   display: flex;
   flex-direction: column;
   margin-right: 40px;
}

#main  {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-out;
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
