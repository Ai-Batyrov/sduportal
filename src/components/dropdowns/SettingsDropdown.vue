<template>
  <div id="dropdown">
    <div>
      <label>Dark Mode</label>
      <Toggle @toggle="$emit('toggle')"/>
    </div>
  </div>
</template>

<script>
import Toggle from '@/components/dropdowns/Toggle'
export default {
  name: 'SettingsDropdown',
  components: { Toggle },
  props: ['mode']
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
  z-index: 100;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.12);
  top: calc(100% - 42rem);
  left: 77%;
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
    align-items: center;
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
      fill: #f3f3f3;
    }
  }
}

</style>
