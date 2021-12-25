<template>
<div>
  <div id="top">
    <h1>System Calendar</h1>
    <profile />
  </div>
  <div id="main">
    <section>
      <label>Academic Calendar for 2021-2022</label>
      <SystemCalendarTable id="table-wrap"/>
    </section>
  </div>
</div>
</template>

<script>
import SystemCalendarTable from '@/components/SystemCalendar/SystemCalendarTable'
import profile from '@/components/dropdowns/profile'
export default {
  name: 'SystemCalendar',
  components: { SystemCalendarTable, profile }
}
</script>

<style lang="less" scoped>
#top {
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10%;
  margin-bottom: 2rem;

  h1 {
    font-family: "Mark Pro", serif;
    font-size: 2rem;
    font-weight: 500;
  }
}

#main {
  height: 100%;
}

section {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background: #ffffff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1);
  font-family: "Mark Pro", serif;
  font-size: 1.5rem;
  margin-bottom: 3rem;

  div {
    width: auto;
    height: 100%;
  }
}

#table-wrap {
  width: 100%;
  font-size: 1.8rem;
}
</style>
