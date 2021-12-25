<template>
  <div>
    <div id="top">
      <h1>Withdrawals</h1>
      <profile />
    </div>
    <div id="main">
      <section>
        <div>
          <label>Withdrawals is closed</label><br>
          <label>Service available at 3.03.2022 - 10.03.2022</label>
        </div>
        <div>
          <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style="width: 4rem; fill: #c71269">
            <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm1.41-1.41A8 8 0 1 0 15.66 4.34 8 8 0 0 0 4.34 15.66zm9.9-8.49L11.41 10l2.83 2.83-1.41 1.41L10 11.41l-2.83 2.83-1.41-1.41L8.59 10 5.76 7.17l1.41-1.41L10 8.59l2.83-2.83 1.41 1.41z"/>
          </svg>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import profile from '@/components/dropdowns/profile'

export default {
  name: 'Withdrawals',
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
    font-size: 2rem;
    font-weight: 500;
  }
}

#main {
  height: 100%;
}

section {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
