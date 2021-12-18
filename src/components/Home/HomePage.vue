<template>
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
          <uL>
            <li class="active">
              <router-link tag="a" to="/Home">
                <div>
                  <img src="@/assets/home/nav/home.svg" alt="nav">
                </div>
                <div>Home</div>
              </router-link>
            </li>
            <li>
              <router-link tag="a" to="/Schedule">
                <div>
                  <img src="@/assets/home/nav/schedule.svg" alt="nav">
                </div>
                <div>Schedule</div>
              </router-link>
            </li>
            <li>
              <router-link tag="a" to="/Attendance">
                <div>
                  <img src="@/assets/home/nav/attendance.svg" alt="nav">
                </div>
                <div>Attendance</div>
              </router-link>
            </li>
          </uL>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Main',
  // eslint-disable-next-line vue/no-unused-components
  components: { }
}
</script>

<style scoped lang="less">
.font {
  font-family: "Mark Pro", serif;
  color: #67748E;
}

#ultimate {
  width: 100%;
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
