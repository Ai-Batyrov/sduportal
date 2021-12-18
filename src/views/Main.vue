<template>
  <div>
    <HomePage />
    <div id="inner-component">
      <router-view />
    </div>
  </div>
</template>

<script>
import HomePage from '@/components/Home/HomePage'
import Home from '@/views/Home/Home'
import Schedule from '@/views/Home/Schedule'
import Attendance from '@/views/Home/Attendance'
export default {
  name: 'Main',
  // eslint-disable-next-line vue/no-unused-components
  components: { HomePage, Home, Schedule, Attendance }
}
</script>

<style scoped lang="less">
.font {
  font-family: "Mark Pro", serif;
  color: #67748E;
}

#inner-component {
  height: 100%;
}

#ultimate {
  width: 100%;
  height: 50%;
}

section {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 308px;
  background: url("~@/assets/home/nav/splash.png") no-repeat center;
  background-size: cover;
  border-radius: 10px;
  #nav {
    display: flex;
    justify-content: flex-end;
    padding: 10px;
    div {
      width: 150px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .navbar-element {
      cursor: pointer;
      &:hover {
        background: rgba(230, 230, 230, 0.59);
        border-radius: 8px;
        transition: ease .4s;
      }
    }
  }
}

#home-menu {
  position: absolute;
  width: 73%;
  display: flex;
  justify-content: space-between;
  left: 350px;
  top: 280px;
  background: rgba(255, 255, 255, 0.80059);
  box-shadow: 0 20px 27px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(27.1828px);
  border-radius: 12px;

  #user-avatar {
    display: flex;
    figure {
      margin: 20px;
      img {
        border-radius: 8px;
        width: 74px;
      }
    }

    span {
      display: flex;
      flex-direction: column;
      justify-content: center;
      .font();
      #fullname {
        font-size: 24px;
        color: #141414;
        font-weight: bold;
      }
    }
  }

  #home-schedule-attendance {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    margin-right: 50px;
  }

  .active {
    background: #FFFFFF;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.12), 0px 2px 4px -1px rgba(0, 0, 0, 0.07);
    border-radius: 8px;
  }
}

ul {
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 0;
  li {
    height: 40px;
    width: 100%;
    display: flex;
    align-items: center;
    margin-right: 10px;
    a {
      width: 100%;
      display: flex;
      text-decoration: none;
      align-items: center;
      justify-content: flex-start;
      color: #67748E;
      .font();
      div {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      img {
        margin: 12px;
      }

      &:hover {
        background-color: #d7d7d7;
        box-shadow: 0 20px 27px rgba(0, 0, 0, 0.05);
        border-radius: 8px;
        transition: ease .4s;
      }
    }
  }
}

</style>
