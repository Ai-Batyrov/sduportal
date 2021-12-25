<template>
  <div>
    <div id="ultimate">
      <section>
        <div id="nav">
          <div>
            <div class="navbar-element" @click="isOpen = !isOpen">
              <img src="@/assets/home/nav/user-circle.svg" alt="user">
            </div>
            <transition name="fade" appear>
              <UserDropdown v-if="isOpen" />
            </transition>
            <div class="navbar-element" @click="isOpen2 = !isOpen2">
              <img src="@/assets/home/nav/settingssvg.svg" alt="settings">
            </div>
            <transition name="fade" appear>
              <SettingsDropdown v-if="isOpen2" @toggle="$emit('toggle')"/>
            </transition>
            <div class="navbar-element" @click="isOpen3 = !isOpen3">
              <img src="@/assets/home/nav/mail.svg" alt="mail">
            </div>
            <transition name="fade" appear>
              <MessageDropdown v-if="isOpen3" />
            </transition>
          </div>
        </div>
      </section>
      <div class="home-menu">
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
import UserDropdown from '@/components/dropdowns/UserDropdown'
import MessageDropdown from '@/components/dropdowns/MessageDropdown'
import SettingsDropdown from '@/components/dropdowns/SettingsDropdown'
export default {
  name: 'Main',
  // eslint-disable-next-line vue/no-unused-components
  components: { SettingsDropdown, MessageDropdown, Home, Schedule, Attendance, UserDropdown },
  props: ['mode'],
  data () {
    return {
      component: 'Home',
      isOpen: false,
      isOpen2: false,
      isOpen3: false
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
  height: 35%;

  .home-menu {
    position: absolute;
    width: 73%;
    display: flex;
    justify-content: space-between;
    left: 360px;
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
          user-select: none;
        }
      }
    }

    #home-schedule-attendance {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30rem;
      margin-right: 50px;
      user-select: none;
    }
  }
}

.dark {
  #ultimate {
    .home-menu {
      background: rgba(25, 39, 52, 0.36);
      box-shadow: 0 10px 17px rgba(148, 147, 147, 0.23);
      color: #f3f3f3;
      #user-avatar {
        div, span > #fullname{
          color: #d1d1d1;
        }
      }
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
    height: 2rem;
    width: 14rem;
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
      backdrop-filter: blur(20px);
      border-radius: .5rem;
      transition: ease .4s;
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
        transition: ease .4s;
      }
    }
  }
}

.dark ul li button {
  border: rgba(215, 215, 215, 0.2) 1px solid;
  border-radius: .5rem;
  div {
    color: rgba(243, 243, 243, 0.66);
  }

  &:hover {
    background-color: #4A47A3;
    box-shadow: 0 20px 27px rgba(0, 0, 0, 0.05);
    transition: ease .4s;
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

//iPad Pro
@media screen and (min-width: 1023px) and (max-width: 1026px) {
  #ultimate {
    width: 90%;
  }
}
</style>
