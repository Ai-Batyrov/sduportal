<template>
<div id="main">
    <label>
      <strong>Student №:</strong><br>
      <strong>Student Name:</strong><br>
      <strong>Level:</strong><br>
      <strong>Entry Date:</strong>
    </label>
    <label>
      200103356<br>
      Aibolat Batyrov<br>
      Bachelor<br>
      05.09.2020
    </label>
    <label>
      <strong>Faculty:</strong><br>
      <strong>Specialty:</strong><br>
      <strong>Education Language:</strong><br>
      <strong>Graduation Date:</strong>
    </label>
    <label>
      Faculty of Engineering and Natural Sciences<br>
      6B06101 - Information Systems<br>
      English<br>
      &nbsp;
    </label>
</div>
</template>

<script>
export default {
  name: 'TranscriptInfoStudent'
}
</script>

<style lang="less" scoped>
#main {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 12%;
  padding: 1rem 3rem;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1);

  label {
    width: auto;
    font-family: "Mark Pro", serif;
    font-size: 16px;
    color: rgb(49, 68, 81);
  }
}
</style>
