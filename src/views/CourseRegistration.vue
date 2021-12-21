<template>
<div>
  <div id="top">
    <h1>Course Registration</h1>
    <profile />
  </div>
  <div id="main">
    <section>
      Course Registration is closed
    </section>
    <section>
      <label><strong>Status: </strong>Not registered</label>
      <label>Course registration available at 17.01.2022 - 24.01.2022</label>
    </section>
  </div>
</div>
</template>

<script>
import profile from '@/components/profile/profile'
export default {
  name: 'CourseRegistration',
  components: { profile }
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
  }
}

#main {
  height: 100%;
}

section {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: #ffffff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1);
  font-family: "Mark Pro", serif;
  font-size: 18px;
  margin-bottom: 3rem;
}
</style>
