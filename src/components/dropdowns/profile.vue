<template>
<div id="wrap">
  <div id="profile" @click="isOpen = !isOpen">
    <img src="@/assets/home/nav/avatar.jpg" alt="avatar">
    <div>Aibolat Batyrov</div>
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" width="16px">
        <g>
          <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"/>
        </g>
      </svg>
    </div>
  </div>
  <transition name="fade" appear>
    <ProfileDropdown v-if="isOpen" @toggle="$emit('toggle')"/>
  </transition>
</div>
</template>

<script>
import ProfileDropdown from '@/components/dropdowns/ProfileDropdown'
export default {
  name: 'profile',
  components: { ProfileDropdown },
  data () {
    return {
      isOpen: false
    }
  }
}
</script>

<style lang="less" scoped>
#wrap {
  width: 15rem;
  height: 5rem;
}

#profile {
  width: 15rem;
  height: 4rem;
  border-radius: 8px;
  z-index: 1;
  padding: 8px;
  background: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: "Mark Pro", serif;
  font-weight: 500;
  cursor: pointer;
  transition: ease .3s;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.12);
  user-select: none;

  img {
    width: 45px;
    height: 45px;
    border-radius: 5px;
  }

  &:hover {
    background: #d7d7d7;
    transition: ease .3s;
  }
}

.fade-leave-active {
  animation: fade 0.2s reverse;
}

.fade-enter-active {
  animation: fade 0.2s;
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.dark #profile {
  background: rgba(0, 115, 185, 0.83);
  box-shadow: 0 5px 15px rgba(0, 115, 185, 0.3);
  border: 1px #3A416F solid;

  svg {
    fill: #d7d7d7;
  }

  &:hover {
    background: rgba(0, 115, 185, 0.98);
  }
}
</style>
