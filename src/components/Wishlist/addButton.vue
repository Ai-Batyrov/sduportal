<template>
  <button type="button">
    add
  </button>
</template>

<script>
export default {
  name: 'addButton'
}
</script>

<style lang="less" scoped>
button {
  width: 70%;
  height: 100%;
  background: linear-gradient(135deg, #747dff 0%, #1f1cd5 100%);
  border-radius: 1rem;
  font-size: 1rem;
  border: none;
  color: #FFFFFF;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease;
  }

  &:active {
    transform: scale(0.98);
  }
}
</style>
