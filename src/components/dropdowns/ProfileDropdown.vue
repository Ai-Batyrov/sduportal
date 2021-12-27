<template>
<div id="dropdown">
    <div>
      <router-link tag="a" to="/ProfileSettings">
        <label>Profile settings</label>
        <svg id="Editable-line" version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" width="1.7rem">
          <circle cx="16" cy="16" fill="none" id="XMLID_224_" r="4" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
          <path d="  M27.758,10.366l-1-1.732c-0.552-0.957-1.775-1.284-2.732-0.732L23.5,8.206C21.5,9.36,19,7.917,19,5.608V5c0-1.105-0.895-2-2-2h-2  c-1.105,0-2,0.895-2,2v0.608c0,2.309-2.5,3.753-4.5,2.598L7.974,7.902C7.017,7.35,5.794,7.677,5.242,8.634l-1,1.732  c-0.552,0.957-0.225,2.18,0.732,2.732L5.5,13.402c2,1.155,2,4.041,0,5.196l-0.526,0.304c-0.957,0.552-1.284,1.775-0.732,2.732  l1,1.732c0.552,0.957,1.775,1.284,2.732,0.732L8.5,23.794c2-1.155,4.5,0.289,4.5,2.598V27c0,1.105,0.895,2,2,2h2  c1.105,0,2-0.895,2-2v-0.608c0-2.309,2.5-3.753,4.5-2.598l0.526,0.304c0.957,0.552,2.18,0.225,2.732-0.732l1-1.732  c0.552-0.957,0.225-2.18-0.732-2.732L26.5,18.598c-2-1.155-2-4.041,0-5.196l0.526-0.304C27.983,12.546,28.311,11.323,27.758,10.366z  " fill="none" id="XMLID_242_" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
        </svg>
      </router-link>
    </div>
    <div>
      <label>Log Out</label>
      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="1.7rem">
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
        <polyline points="16 17 21 12 16 7"></polyline>
        <line x1="21" y1="12" x2="9" y2="12"></line>
      </svg>
    </div>
  <div>
    <label>Dark Mode</label>
    <Toggle @toggle="$emit('toggle')" />
  </div>
</div>
</template>

<script>
import Toggle from './Toggle'
export default {
  name: 'ProfileDropdown',
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
  z-index: 1000;
  background: #FFFFFF;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.12);
  top: calc(100% - 0.7rem);
  left: 90.6%;
  transform: translateX(-50%);
  width: 15rem;
  height: 10rem;
  border-radius: 0 0 0.7rem 0.7rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    padding: 0.8rem;
    margin: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    cursor: pointer;

    a {
      width: 100%;
      display: flex;
      justify-content: space-between;
      text-decoration: none;
      color: #141414;
    }

    &:hover {
      background: #d7d7d7;
      transition: ease .3s;
    }
  }
}

.dark #dropdown {
  background: rgba(0, 115, 185, 0.9);
  div {
    &:hover {
      background: rgba(0, 115, 185, 0.91);
      transition: ease .3s;
    }
  }
}

</style>
