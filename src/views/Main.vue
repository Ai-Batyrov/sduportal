<template>
  <div>
    <div id="ultimate">
      <section>
        <div id="nav">
          <div>
            <div class="navbar-element">
              <img src="@/assets/home/nav/user-circle.svg" alt="user">
            </div>
            <div class="navbar-element">
              <img src="@/assets/home/nav/settingssvg.svg" alt="settings">
            </div>
            <div class="navbar-element">
              <img src="@/assets/home/nav/mail.svg" alt="mail">
            </div>
          </div>
        </div>
      </section>
      <div id="home-menu">
        <div id="user-avatar">
          <figure>
            <img src="@/assets/home/nav/avatar.jpg" alt="avatar" width="74px">
          </figure>
          <span>
          <div id="fullname">Aibolat Batyrov</div>
          <div id="student">Student</div>
        </span>
        </div>
        <div id="home-schedule-attendance">
          <ul>
            <li>
              <button type="button" @click="component='Home'">
                <div>
                  <img src="@/assets/home/nav/home.svg" alt="nav">
                </div>
                <div>Home</div>
              </button>
            </li>
            <li>
              <button type="button" @click="component='Schedule'">
                <div>
                  <img src="@/assets/home/nav/schedule.svg" alt="nav">
                </div>
                <div>Schedule</div>
              </button>
            </li>
            <li>
              <button type="button" @click="component='Attendance'">
                <div>
                  <img src="@/assets/home/nav/attendance.svg" alt="nav">
                </div>
                <div>Attendance</div>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div id="inner-component">
      <transition
        name="fade"
        mode="out-in"
      >
        <component :is="component"></component>
      </transition>
    </div>
  </div>
</template>

<script>
import Home from '@/views/Home/Home'
import Schedule from '@/views/Home/Schedule'
import Attendance from '@/views/Home/Attendance'
export default {
  name: 'Main',
  // eslint-disable-next-line vue/no-unused-components
  components: { Home, Schedule, Attendance },
  data () {
    return {
      component: 'Home'
    }
  }
}
</script>

<style scoped lang="less">
.font {
  font-family: "Mark Pro", serif;
  color: #67748E;
}

#inner-component {
  width: 100%;
  height: 100%;
}

#ultimate {
  width: 100%;
  height: 50%;

  #home-menu {
    position: absolute;
    width: 73%;
    display: flex;
    justify-content: space-between;
    left: 350px;
    top: 280px;
    background: rgba(255, 255, 255, 0.80059);
    box-shadow: 0 20px 27px rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(20px);
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
  }
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
    padding: 10px 40px 0 10px;
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

ul {
  width: 100%;
  list-style: none;
  display: flex;
  margin: 0;
  justify-content: space-between;
  padding: 0;
  li {
    height: 40px;
    width: 100%;
    display: flex;
    align-items: center;
    margin-right: 10px;
    button {
      width: 100%;
      display: flex;
      border: none;
      background: transparent;
      text-decoration: none;
      align-items: center;
      justify-content: flex-start;
      .font();
      color: #2f3038;
      cursor: pointer;
      div {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      img {
        margin: 12px;
      }

      &:hover {
        background-color: #ffffff;
        box-shadow: 0 20px 27px rgba(0, 0, 0, 0.05);
        border-radius: 8px;
        transition: ease .4s;
      }
    }
  }
}

.fade-leave-active {
  animation: fade 0.3s reverse;
}

.fade-enter-active {
  animation: fade 0.3s;
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

</style>
