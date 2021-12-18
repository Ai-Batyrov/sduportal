<template>
  <div id="cards">
    <div class="card">
      <div class="hh1">Student Information</div>
      <div class="information">
        <span>
          <label>Full name:</label>
          <label>Student ID:</label>
          <label>Birthday:</label>
          <label>Advisor:</label>
          <label>Program:</label>
          <label>Status:</label>
          <label>Balance:</label>
          <label>UNT score:</label>
          <label>Grant type:</label>
        </span>
        <span>
          <label>Aibolat Batyrov</label>
          <label>200103356</label>
          <label>12 January 2003</label>
          <label>Chingiz Adilkhan</label>
          <label>Information Systems - 2</label>
          <label>Studying</label>
          <label>0 KZT</label>
          <label>99</label>
          <label>State Grant</label>
        </span>
      </div>
    </div>
    <div class="card">
      <div class="hh1">Taken Courses</div>
      <div class="information">
        <span>
          <label>CSS 152</label>
          <label>CSS 215</label>
          <label>INF 231</label>
          <label>INF 202</label>
          <label>MDE 113</label>
          <label>MDE 133</label>
          <label>MDE 143</label>
          <label>MDE 191</label>
        </span>
        <span>
          <label>Physics</label>
          <label>Introduction to Algorithms</label>
          <label>Web programming: front end</label>
          <label>Database  1</label>
          <label>Kazakh Language 1 (B1 level)</label>
          <label>Turkish Language 3 (А2 level)</label>
          <label>Physical Education 3</label>
          <label>Foreign Language 2</label>
        </span>
      </div>
    </div>
    <div class="card">
      <div class="hh1">Classmates Birthday</div>
      <div class="information">
        <span>
          <label>Aisanym Nurbaulina</label>
          <label>Alibi Zhumagaliyev</label>
          <label>Nurkhozha Yuldashov</label>
          <label></label>
          <label></label>
          <label></label>
          <label></label>
          <label></label>
          <label></label>
          <label></label>
          <label></label>
        </span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="less" scoped>
.font {
  font-family: "Mark Pro", serif;
  color: #67748E;
}

#cards {
  display: flex;
  height: 500px;
  justify-content: space-between;
}

.card {
  .font();
  font-size: 16px;
  width: 370px;
  height: 427px;
  background: #FFFFFF;
  box-shadow: 0 20px 27px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  div {
    color: #252F40;
    margin: 20px;
  }
  .hh1 {
    font-weight: bold;
  }
}

.information {
  display: flex;
  justify-content: space-between;
  width: 85%;
  height: 80%;

  span {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
}

</style>
