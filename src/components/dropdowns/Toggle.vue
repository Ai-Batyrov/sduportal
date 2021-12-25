<template>
<div id="toggle_wrapper">
  <label class="toggle">
    <input type="checkbox"
           :checked="(mode === 'dark') ? 'checked' : false"
           @change="$emit('toggle')"
    >
    <span class="toggler round"></span>
  </label>
</div>
</template>

<script>
export default {
  name: 'Toggle',
  props: ['mode']
}
</script>

<style lang="less" scoped>
#toggle_wrapper {
  width: 23%!important;
  padding: 0!important;
  margin: 0!important;
}

//#3e065f

.toggle {
  position: relative;
  display: block;
  width: 100%;
  height: 1.5rem;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
}

.toggler {
  position: absolute;
  cursor: pointer;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(233, 233, 233, 0);
  transition: 0.4s;
  border: 1px solid #9b32ff;

  &:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 4px;
    top: 1px;
    background:#9b32ff;
    transition: 0.4s;
  }
}

input:checked + .toggler {
  background: #9b32ff;
}

input:focus + .toggler {
  box-shadow: 0 0 2px #9b32ff;
}

input:checked + .toggler:before {
  transform: translateX(22px);
  background: #f3f3f3;
}

.toggler, .toggler:before {
  border-radius: 3rem;
}
</style>
