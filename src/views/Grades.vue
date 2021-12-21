<template>
<div style="justify-content: flex-start">
  <div id="top">
    <h1>Grades List</h1>
    <profile />
  </div>
  <br>
  <TableWrapLayout />
</div>
</template>

<script>
import Profile from '@/components/profile/profile'
import TableWrapLayout from '@/components/Grades/GradeTable'
export default {
  name: 'Grades',
  components: { TableWrapLayout, Profile }
}
</script>

<style lang="less" scoped>
#top {
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5%;
  margin-bottom: 2rem;

  h1 {
    font-family: "Mark Pro", serif;
  }
}
</style>
