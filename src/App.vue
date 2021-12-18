<template>
    <SideBar id="sidebar" />
    <Main id="main"/>
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

#main {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 1000px;
}

</style>
<script>
import SideBar from '@/components/SideBar'
import Main from '@/components/Home/Main'
export default {
  components: { SideBar, Main }
}
</script>
