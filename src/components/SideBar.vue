<template>
   <div style="width: 270px">
      <div id="logo">
         <img src="@/assets/sidebar/sdu-logo.png" alt="logo">
         <div>MySDU</div>
      </div>
     <hr>
      <div id="menu">
         <section id="section-1">
            <label>Account pages</label>
            <div>
                  <ul>
                     <li class="active">
                        <router-link tag="a" to="/">
                           <div class="menu-icons">
                              <img src="@/assets/sidebar/home.svg" alt="nav">
                           </div>
                           <div>Home</div>
                        </router-link>
                     </li>
                     <li>
                        <router-link tag="a" to="/">
                           <div class="menu-icons">
                              <img src="@/assets/sidebar/curriculum.svg" alt="nav">
                           </div>
                           <div>My Curriculum</div>
                        </router-link>
                     </li>
                     <li>
                        <a href="">
                           <div class="menu-icons">
                              <img src="@/assets/sidebar/grade.svg" alt="nav">
                           </div>
                           <div>Grades List</div>
                        </a>
                     </li>
                     <li>
                        <a href="">
                           <div class="menu-icons">
                              <img src="@/assets/sidebar/transcript.svg" alt="nav">
                           </div>
                           <div>Transcript</div>
                        </a>
                     </li>
                  </ul>
            </div>
         </section>

         <section id="section-2">
            <label>Academic operations</label>
            <div>
               <ul>
                  <li>
                     <a href="">
                        <div class="menu-icons">
                           <img src="@/assets/sidebar/registration.svg" alt="nav">
                        </div>
                        <div>Course Registration</div>
                     </a>
                  </li>
                  <li>
                     <a href="">
                        <div class="menu-icons">
                           <img src="@/assets/sidebar/wishlist.svg" alt="nav">
                        </div>
                        <div>Wish list</div>
                     </a>
                  </li>
                  <li>
                     <a href="">
                        <div class="menu-icons">
                           <img src="@/assets/sidebar/withdrawal.svg" alt="nav">
                        </div>
                        <div>Withdrawals</div>
                     </a>
                  </li>
                  <li>
                     <a href="">
                        <div class="menu-icons">
                           <img src="@/assets/sidebar/consentrequests.svg" alt="nav">
                        </div>
                        <div>Consent Requests</div>
                     </a>
                  </li>
               </ul>
            </div>
         </section>

         <section id="section-3">
            <label>Services</label>
            <div>
               <ul>
                  <li>
                     <a href="">
                        <div class="menu-icons">
                           <img src="@/assets/sidebar/online-services.svg" alt="nav">
                        </div>
                        <div>Online Services</div>
                     </a>
                  </li>
                  <li>
                     <a href="">
                        <div class="menu-icons">
                           <img src="@/assets/sidebar/question.svg" alt="nav">
                        </div>
                        <div>Questionnaires</div>
                     </a>

                  </li>
                  <li>
                     <a href="">
                        <div class="menu-icons">
                           <img src="@/assets/sidebar/system-calendar.svg" alt="nav">
                        </div>
                        <div>System Calendar</div>
                     </a>
                  </li>
               </ul>
            </div>
         </section>

         <section id="section-4">
            <section>
               <div>
                  <span class="menu-icons">
                    <img src="@/assets/sidebar/diamond.svg" alt="diamond">
                  </span>
                  <div>
                     Need help? <br>
                     Check documentation
                  </div>
                  <button type="button">
                     DOCUMENTATION
                  </button>
               </div>
            </section>
         </section>
      </div>
   </div>
</template>

<script>
export default {
  name: 'SideBar'
}
</script>

<style scoped lang="less">
.font {
  font-family: "Mark Pro", serif;
  color: #67748E;
}

hr {
  margin: 0;
  padding: 0;
  color: #67748E;
}

#logo {
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 250px;
   font-family: "Mark Pro", serif;
   font-size: 22px;
   font-weight: bold;
   color: #67748E;
   margin-bottom: 20px;

  img {
    width: 120px;
  }
}

#menu {
   margin-top: 20px;
   width: 100%;
}

section {
   height: 260px;
   margin-bottom: 20px;
}

label {
   font-family: "Mark Pro", serif;
   font-size: 14px;
   font-weight: bold;
   color: #67748E;
   margin-left: 15px;
   text-transform: uppercase;
}

ul {
   list-style: none;
  .font();
   padding: 0;

    li {
      a {
        display: flex;
        align-items: center;
        text-align: start;
        height: 50px;
        margin-bottom: 5px;
        text-decoration: none;
        list-style-type: none;
        color: #67748E;
      }

      img {
        width: 18px;
      }
      &:hover {
        background-color: #d7d7d7;
        box-shadow: 0 20px 27px rgba(0, 0, 0, 0.05);
        border-radius: 8px;
        transition: ease .4s;
      }
    }
}

.menu-icons {
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: white;
   border-radius: 8px;
   width: 35px;
   height: 35px;
   margin: 10px;
   box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.07);
}

.active {
   background-color: white;
   box-shadow: 0 20px 27px rgba(0, 0, 0, 0.08);
   border-radius: 8px;
   font-weight: bold;
    a > .menu-icons {
      background-color: #7928CA;
    }
}

#section-4 {
   width: 100%;
   display: flex;
   justify-content: center;

    section {
      width: 90%;
      height: 80%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 16px;
      background: url("../assets/sidebar/white-curved.png") no-repeat;
      background-size: cover;
      box-shadow: 0 20px 27px rgba(0, 0, 0, 0.05);
      div {
        width: 90%;
        height: 80%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        .font();
        font-size: 18px;
        .menu-icons {
          margin: 0;
          height: 35px;
        }
        button {
          background-color: white;
          box-shadow: 0 20px 27px rgba(0, 0, 0, 0.08);
          border: none;
          border-radius: 8px;
          width: 100%;
          height: 50px;
          cursor: pointer;
          .font();
          color: #252F40;
          font-weight: bold;
        }
      }
    }
}

</style>
