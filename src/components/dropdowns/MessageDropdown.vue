<template>
  <div id="dropdown">
    <div>
      <label>You don't have messages</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageDropdown'
}
</script>

<style lang="less" scoped>
div {
  font-family: "Mark Pro", serif;
  font-size: 1.1rem;
}

#dropdown {
  position: absolute;
  background: #FFFFFF;
  z-index: 1;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.12);
  top: calc(100% - 42rem);
  left: 81%;
  width: 16rem!important;
  height: 4rem!important;
  border-radius: 0.7rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  user-select: none;

  div {
    padding: 0.8rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    border-radius: 0.7rem;

    &:hover {
      background: #d7d7d7;
      transition: ease .3s;
    }
  }
}

.dark #dropdown {
  background: #192734;
  padding: 0;
  div {
    &:hover {
      background: #2e4963;
      transition: ease .3s;
    }

    svg path, circle{
      stroke: #f3f3f3;
    }
  }
}

</style>
