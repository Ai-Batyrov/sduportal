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
                     <li>
                        <router-link tag="a" to="/Main">
                           <div class="menu-icons">
                             <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.50001 16V11H11.3V16C11.3 16.55 11.7275 17 12.25 17H15.1C15.6225 17 16.05 16.55 16.05 16V8.99997H17.665C18.102 8.99997 18.311 8.42997 17.9785 8.12997L10.0365 0.599971C9.67551 0.259971 9.12451 0.259971 8.76351 0.599971L0.821508 8.12997C0.498508 8.42997 0.698008 8.99997 1.13501 8.99997H2.75001V16C2.75001 16.55 3.17751 17 3.70001 17H6.55001C7.07251 17 7.50001 16.55 7.50001 16Z" fill="#3A416F"/>
                              </svg>
                           </div>
                           <div>Home</div>
                        </router-link>
                     </li>
                     <li>
                        <router-link tag="a" to="/MyCurriculum">
                           <div class="menu-icons">
                             <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                               <path opacity="0.603585" d="M13 14.1234H11.814V1.47982H1.73334V0.215454H12.407C12.7343 0.215454 13 0.498671 13 0.847635V14.1234Z" fill="#3A416F"/>
                               <path fill-rule="evenodd" clip-rule="evenodd" d="M0.625926 3.69244H10.6407C10.9863 3.69244 11.2667 3.96504 11.2667 4.30092V15.2534C11.2667 15.5893 10.9863 15.8619 10.6407 15.8619H0.625926C0.280415 15.8619 0 15.5893 0 15.2534V4.30092C0 3.96504 0.280415 3.69244 0.625926 3.69244ZM2.5037 12.8196H6.25926V11.6026H2.5037V12.8196ZM8.76296 10.3857H2.5037V9.16871H8.76296V10.3857ZM2.5037 7.95176H8.76296V6.73481H2.5037V7.95176Z" fill="#3A416F"/>
                             </svg>
                           </div>
                           <div>My Curriculum</div>
                        </router-link>
                     </li>
                     <li>
                        <router-link tag="a" to="/Grades">
                           <div class="menu-icons">
                             <svg width="20px" height="19px" viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg">
                               <title>grade</title>
                               <desc>Created with Sketch.</desc>
                               <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                 <g id="Outlined" transform="translate(-884.000000, -288.000000)">
                                   <g id="Action" transform="translate(100.000000, 100.000000)">
                                     <g id="Outlined-/-Action-/-grade" transform="translate(782.000000, 186.000000)">
                                       <g>
                                         <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                                         <path d="M12,7.13 L12.97,9.42 L13.44,10.53 L14.64,10.63 L17.11,10.84 L15.23,12.47 L14.32,13.26 L14.59,14.44 L15.15,16.85 L13.03,15.57 L12,14.93 L10.97,15.55 L8.85,16.83 L9.41,14.42 L9.68,13.24 L8.77,12.45 L6.89,10.82 L9.36,10.61 L10.56,10.51 L11.03,9.4 L12,7.13 Z M12,2 L9.19,8.63 L2,9.24 L7.46,13.97 L5.82,21 L12,17.27 L18.18,21 L16.54,13.97 L22,9.24 L14.81,8.63 L12,2 Z" id="🔹-Icon-Color" fill="#1D1D1D"></path>
                                       </g>
                                     </g>
                                   </g>
                                 </g>
                               </g>
                             </svg>
                           </div>
                           <div>Grades List</div>
                        </router-link>
                     </li>
                     <li>
                        <router-link tag="a" to="/Transcript">
                           <div class="menu-icons">
                             <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                               <path d="M14.1316 12.4658L11.3158 9.42114L10.8655 9.87181L10.3555 9.36182C10.3946 9.3112 10.4337 9.26057 10.4708 9.20892C11.2693 8.09333 11.6205 6.71886 11.455 5.35693C11.2895 3.99501 10.6193 2.74467 9.57679 1.85283C8.53427 0.960992 7.19522 0.492507 5.8241 0.539895C4.45297 0.587283 3.14946 1.1471 2.171 2.10878C1.19254 3.07047 0.610263 4.3641 0.53917 5.7342C0.468076 7.1043 0.913335 8.45125 1.78701 9.50905C2.66068 10.5668 3.89925 11.2586 5.25811 11.4476C6.61696 11.6366 7.99731 11.3093 9.12654 10.5301C9.20425 10.4765 9.28062 10.4207 9.35564 10.3626L9.86483 10.8717L9.35925 11.3773L12.4659 14.1341C12.5754 14.2436 12.7054 14.3306 12.8485 14.3898C12.9916 14.4491 13.145 14.4796 13.2999 14.4796C13.4548 14.4795 13.6081 14.449 13.7512 14.3896C13.8943 14.3303 14.0243 14.2433 14.1337 14.1337C14.2432 14.0241 14.3299 13.894 14.3891 13.7508C14.4482 13.6076 14.4785 13.4542 14.4783 13.2993C14.4781 13.1444 14.4474 12.9911 14.3879 12.8481C14.3284 12.7051 14.2413 12.5752 14.1316 12.4658L14.1316 12.4658ZM8.69766 8.69877C8.07553 9.32221 7.25645 9.71061 6.38002 9.79775C5.50359 9.88489 4.62407 9.66539 3.89136 9.17665C3.15865 8.68792 2.61812 7.9602 2.36189 7.11755C2.10566 6.27489 2.1496 5.36945 2.48622 4.55557C2.82284 3.74168 3.4313 3.06972 4.20788 2.65423C4.98447 2.23874 5.88112 2.10543 6.74499 2.27703C7.60886 2.44863 8.38649 2.91451 8.94532 3.59526C9.50415 4.27602 9.8096 5.12951 9.8096 6.01026C9.80956 7.01831 9.40967 7.98518 8.69766 8.69877Z" fill="#2D3E50"/>
                             </svg>
                           </div>
                           <div>Transcript</div>
                        </router-link>
                     </li>
                  </ul>
            </div>
         </section>

         <section id="section-2">
            <label>Academic operations</label>
            <div>
               <ul>
                  <li>
                     <router-link tag="a" to="/CourseRegistration">
                        <div class="menu-icons">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M17,2 C17.5522847,2 18,2.44771525 18,3 L18,4 L19,4 C20.6568542,4 22,5.34314575 22,7 L22,19 C22,20.6568542 20.6568542,22 19,22 L5,22 C3.34314575,22 2,20.6568542 2,19 L2,7 C2,5.34314575 3.34314575,4 5,4 L6,4 L6,3 C6,2.44771525 6.44771525,2 7,2 C7.55228475,2 8,2.44771525 8,3 L8,4 L16,4 L16,3 C16,2.44771525 16.4477153,2 17,2 Z M20,12 L4,12 L4,19 C4,19.5522847 4.44771525,20 5,20 L19,20 C19.5522847,20 20,19.5522847 20,19 L20,12 Z M17,14 C17.5522847,14 18,14.4477153 18,15 L18,17 C18,17.5522847 17.5522847,18 17,18 L15,18 C14.4477153,18 14,17.5522847 14,17 L14,15 C14,14.4477153 14.4477153,14 15,14 L17,14 Z M6,6 L5,6 C4.44771525,6 4,6.44771525 4,7 L4,10 L20,10 L20,7 C20,6.44771525 19.5522847,6 19,6 L18,6 L18,7 C18,7.55228475 17.5522847,8 17,8 C16.4477153,8 16,7.55228475 16,7 L16,6 L8,6 L8,7 C8,7.55228475 7.55228475,8 7,8 C6.44771525,8 6,7.55228475 6,7 L6,6 Z"/>
                          </svg>
                        </div>
                        <div>Course Registration</div>
                     </router-link>
                  </li>
                  <li>
                     <router-link tag="a" to="/Wishlist">
                        <div class="menu-icons">
                          <svg xmlns="http://www.w3.org/2000/svg"
                               viewBox="-3 -3 38 38" style=".st0{fill:none;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}" xml:space="preserve">
                            <line class="st0" x1="5" y1="6" x2="5" y2="25"/>
                            <line class="st0" x1="27" y1="6" x2="27" y2="25"/>
                            <line class="st0" x1="5" y1="6" x2="27" y2="6"/>
                            <line class="st0" x1="5" y1="26" x2="27" y2="26"/>
                            <line class="st0" x1="10" y1="16" x2="22" y2="16"/>
                            <line class="st0" x1="10" y1="12" x2="22" y2="12"/>
                            <line class="st0" x1="10" y1="20" x2="22" y2="20"/>
                          </svg>
                        </div>
                        <div>Wish list</div>
                     </router-link>
                  </li>
                  <li>
                     <router-link tag="a" to="/Withdrawals">
                        <div class="menu-icons">
                          <svg viewBox="0 0 512 512" width="21px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="M74.966,437.013c-99.97-99.97-99.97-262.065,0-362.037c100.002-99.97,262.066-99.97,362.067,0  c99.971,99.971,99.971,262.067,0,362.037C337.032,536.998,174.968,536.998,74.966,437.013z M391.782,120.227  c-75.001-74.985-196.564-74.985-271.534,0c-75.001,74.985-75.001,196.55,0,271.535c74.97,74.986,196.533,74.986,271.534,0  C466.754,316.775,466.754,195.212,391.782,120.227z M188.124,369.137l-45.251-45.266l67.876-67.877l-67.876-67.876l45.251-45.267  L256,210.743l67.877-67.892l45.25,45.267l-67.876,67.876l67.876,67.877l-45.25,45.266L256,301.245L188.124,369.137z"/></svg>
                        </div>
                        <div>Withdrawals</div>
                     </router-link>
                  </li>
                  <li>
                     <a href="">
                        <div class="menu-icons">
                          <svg xmlns="http://www.w3.org/2000/svg" width="21px" viewBox="0 0 24 24" fill="none" stroke="#3A416F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-git-pull-request"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line></svg>
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
                          <svg width="21" height="21" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.8692 7.16842C13.7305 6.30211 12.8021 6.27003 12.0552 6.38233C11.6603 6.4465 11.3402 6.69516 11.3402 6.69516C10.9561 6.43045 10.7533 6.25398 10.1557 6.29409C9.60084 6.32618 9.16333 6.5989 9.16333 6.5989C8.85388 6.18981 8.02154 6.31013 8.02154 6.31013C7.69074 6.40639 7.68007 6.26201 7.68007 6.07751C7.69074 5.62029 7.68007 5.16308 7.68007 4.70586C7.68007 4.39302 7.54135 4.12832 7.24256 3.91174C6.78371 3.57484 6.23949 3.45452 5.62058 3.63099C4.91629 3.83153 4.59616 4.2326 4.58549 4.78607C4.57482 5.71655 4.58549 6.63901 4.58549 7.56949C4.58549 8.25131 4.58549 8.94115 4.58549 9.62297C4.58549 10.2567 4.58549 10.8823 4.85227 11.4919C5.44984 12.8796 7.31726 13.8984 9.29138 13.8903C11.2655 13.8823 13.1543 12.8796 13.6665 11.5C14.1894 10.0722 13.9653 8.61227 13.8692 7.16842ZM12.8875 10.5775C12.7808 12.0133 11.1588 13.1123 9.25937 13.1123C7.35994 13.1123 5.73796 12.0053 5.63125 10.5775C5.56722 9.61494 5.62058 8.64436 5.62058 7.67377C5.6099 7.67377 5.6099 7.67377 5.59923 7.67377C5.59923 6.74329 5.59923 5.82083 5.59923 4.89035C5.59923 4.59356 5.66326 4.32885 6.15412 4.33687C6.6023 4.34489 6.677 4.60158 6.677 4.88233C6.677 5.95719 6.677 7.03206 6.677 8.10692C6.677 8.37965 6.70901 8.65238 7.16786 8.6604C7.63739 8.66842 7.68007 8.40372 7.68007 8.12297C7.68007 7.90639 7.6694 7.68981 7.69074 7.48126C7.72275 7.24061 7.89349 7.06414 8.23496 7.07216C8.56576 7.08019 8.74717 7.24061 8.74717 7.4973C8.74717 7.73794 8.73649 7.97858 8.74717 8.21922C8.75784 8.45986 8.87522 8.64436 9.23803 8.65238C9.63286 8.6604 9.76091 8.45987 9.77158 8.20318C9.78225 7.97858 9.77158 7.74596 9.77158 7.52136C9.77158 7.24864 9.93164 7.07217 10.2945 7.06414C10.6679 7.06414 10.8173 7.25666 10.8387 7.51334C10.8493 7.73794 10.8493 7.97056 10.8387 8.19516C10.8387 8.45986 10.9774 8.65238 11.3615 8.64436C11.7137 8.63634 11.8417 8.45987 11.8417 8.20318C11.8417 7.96254 11.8311 7.7219 11.8417 7.48126C11.8631 7.24061 12.0125 7.05612 12.3646 7.05612C12.7274 7.05612 12.9088 7.22457 12.9088 7.4973C12.9195 8.53206 12.9622 9.55879 12.8875 10.5775Z" fill="#3A416F"/>
                            <path d="M3.57174 6.45457C3.39034 6.45457 3.2196 6.3904 3.12356 6.27008C2.77142 5.85296 2.57935 5.36366 2.57935 4.85831C2.57935 3.40644 4.14798 2.22729 6.07942 2.22729C8.01086 2.22729 9.57949 3.40644 9.57949 4.85831C9.57949 5.08291 9.34473 5.25938 9.04595 5.25938C8.74716 5.25938 8.5124 5.08291 8.5124 4.85831C8.5124 3.84762 7.42396 3.02943 6.07942 3.02943C4.73488 3.02943 3.64644 3.85564 3.64644 4.85831C3.64644 5.20323 3.77449 5.54815 4.01992 5.83692C4.17999 6.02141 4.10529 6.27008 3.85986 6.3904C3.76382 6.4305 3.66778 6.45457 3.57174 6.45457Z" fill="#3A416F"/>
                            <path d="M2.23783 7.04011C2.05642 7.04011 1.88569 6.97594 1.78965 6.85562C1.27745 6.24599 1 5.54011 1 4.81016C1 2.70856 3.27291 1 6.0687 1C8.86449 1 11.1481 2.70856 11.1481 4.81818C11.1481 5.04278 10.9133 5.21925 10.6145 5.21925C10.3157 5.21925 10.081 5.04278 10.081 4.81818C10.081 3.15775 8.28826 1.80214 6.0687 1.80214C3.84915 1.80214 2.0671 3.14973 2.0671 4.81818C2.0671 5.39572 2.28052 5.9492 2.68601 6.43048C2.84608 6.61497 2.77138 6.86364 2.52595 6.98396C2.42991 7.02406 2.33387 7.04011 2.23783 7.04011Z" fill="#3A416F"/>
                          </svg>
                        </div>
                        <div>Online Services</div>
                     </a>
                  </li>
                  <li>
                     <a href="">
                        <div class="menu-icons">
                          <svg  id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                               width="21px" height="21px" viewBox="0 0 92 92"  xml:space="preserve">
                            <path id="XMLID_1489_" d="M60.9,25.5c3.2,3.6,4.7,8.5,4,13.7c-1.2,9.6-8.2,13-14.4,13c-0.3,0-0.5,0-0.5,0v2.4c0,2.2-1.8,4-4,4
                              s-4-1.8-4-4v-3.2c0-3.3,1.4-7.2,8.5-7.2c3.9,0,5.9-2,6.4-6c0.2-1.3,0.3-4.8-2.1-7.4c-1.9-2.1-5-3.2-9.2-3.2c-9,0-9.3,5.9-9.3,6.5
                              c0,2.2-1.8,4-4,4s-4-1.8-4-4c0-4,3.1-14.5,17.3-14.5C53.9,19.6,58.5,22.8,60.9,25.5z M45.7,62c-1.3,0-2.6,0.5-3.5,1.5
                              c-0.9,0.9-1.5,2.2-1.5,3.5c0,1.3,0.5,2.6,1.5,3.5c0.9,0.9,2.2,1.5,3.5,1.5c1.3,0,2.6-0.5,3.5-1.5c0.9-0.9,1.5-2.2,1.5-3.5
                              c0-1.3-0.5-2.6-1.5-3.5C48.3,62.6,47.1,62,45.7,62z M92,46c0,25.4-20.6,46-46,46S0,71.4,0,46S20.6,0,46,0S92,20.6,92,46z M84,46
                              C84,25,67,8,46,8S8,25,8,46s17,38,38,38S84,67,84,46z"/>
                            </svg>
                        </div>
                        <div>Questionnaires</div>
                     </a>

                  </li>
                  <li>
                     <a href="">
                        <div class="menu-icons">
                          <svg width="21" height="21" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.625 1.875H13.125C13.2908 1.875 13.4497 1.94085 13.5669 2.05806C13.6842 2.17527 13.75 2.33424 13.75 2.5V12.5C13.75 12.6658 13.6842 12.8247 13.5669 12.9419C13.4497 13.0592 13.2908 13.125 13.125 13.125H1.875C1.70924 13.125 1.55027 13.0592 1.43306 12.9419C1.31585 12.8247 1.25 12.6658 1.25 12.5V2.5C1.25 2.33424 1.31585 2.17527 1.43306 2.05806C1.55027 1.94085 1.70924 1.875 1.875 1.875H4.375V0.625H5.625V1.875H9.375V0.625H10.625V1.875ZM2.5 5.625V11.875H12.5V5.625H2.5ZM3.75 8.125H6.875V10.625H3.75V8.125Z" fill="#3A416F"/>
                          </svg>
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
                  <div>
                     About author<br>
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
  color: #36424a;
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
   color: #356076;
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
   margin: 0 15px 10px 10px;
   text-transform: uppercase;
}

ul {
   list-style: none;
  .font();
   padding: 0;

    li {
      transition: ease .4s;
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

a.router-link-exact-active {
   background-color: white;
   box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
   border-radius: 8px;
   font-weight: bold;
   .menu-icons {
      background-color: #7928CA;
      svg > path {
        fill: #ffffff;
      }
       svg > line {
         stroke: #FFFFFF;
       }
    }
}

#section-4 {
   width: 100%;
   display: flex;
   justify-content: center;

    section {
      width: 100%;
      height: 80%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8%;
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
          transition: ease .4s;
          .font();
          font-size: 16px!important;
          color: #252F40;
          font-weight: bold;
          &:hover {
            background-color: #e5e5e5;
            box-shadow: 0 20px 27px rgba(0, 0, 0, 0.05);
            transition: ease .4s;
          }
        }
      }
    }
}

</style>
