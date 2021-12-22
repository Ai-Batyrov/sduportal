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
                     <router-link tag="a" to="/ConsentRequests">
                        <div class="menu-icons">
                          <svg xmlns="http://www.w3.org/2000/svg" width="1.3rem" viewBox="0 0 24 24" fill="none" stroke="#3A416F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="18" cy="18" r="3"></circle>
                            <circle cx="6" cy="6" r="3"></circle>
                            <path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
                            <line x1="6" y1="9" x2="6" y2="21"></line>
                          </svg>
                        </div>
                        <div>Consent Requests</div>
                     </router-link>
                  </li>
               </ul>
            </div>
         </section>

         <section id="section-3">
            <label>Services</label>
            <div>
               <ul>
                  <li>
                     <router-link tag="a" to="/OnlineServices">
                        <div class="menu-icons">
                          <svg width="21" height="21" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.8692 7.16842C13.7305 6.30211 12.8021 6.27003 12.0552 6.38233C11.6603 6.4465 11.3402 6.69516 11.3402 6.69516C10.9561 6.43045 10.7533 6.25398 10.1557 6.29409C9.60084 6.32618 9.16333 6.5989 9.16333 6.5989C8.85388 6.18981 8.02154 6.31013 8.02154 6.31013C7.69074 6.40639 7.68007 6.26201 7.68007 6.07751C7.69074 5.62029 7.68007 5.16308 7.68007 4.70586C7.68007 4.39302 7.54135 4.12832 7.24256 3.91174C6.78371 3.57484 6.23949 3.45452 5.62058 3.63099C4.91629 3.83153 4.59616 4.2326 4.58549 4.78607C4.57482 5.71655 4.58549 6.63901 4.58549 7.56949C4.58549 8.25131 4.58549 8.94115 4.58549 9.62297C4.58549 10.2567 4.58549 10.8823 4.85227 11.4919C5.44984 12.8796 7.31726 13.8984 9.29138 13.8903C11.2655 13.8823 13.1543 12.8796 13.6665 11.5C14.1894 10.0722 13.9653 8.61227 13.8692 7.16842ZM12.8875 10.5775C12.7808 12.0133 11.1588 13.1123 9.25937 13.1123C7.35994 13.1123 5.73796 12.0053 5.63125 10.5775C5.56722 9.61494 5.62058 8.64436 5.62058 7.67377C5.6099 7.67377 5.6099 7.67377 5.59923 7.67377C5.59923 6.74329 5.59923 5.82083 5.59923 4.89035C5.59923 4.59356 5.66326 4.32885 6.15412 4.33687C6.6023 4.34489 6.677 4.60158 6.677 4.88233C6.677 5.95719 6.677 7.03206 6.677 8.10692C6.677 8.37965 6.70901 8.65238 7.16786 8.6604C7.63739 8.66842 7.68007 8.40372 7.68007 8.12297C7.68007 7.90639 7.6694 7.68981 7.69074 7.48126C7.72275 7.24061 7.89349 7.06414 8.23496 7.07216C8.56576 7.08019 8.74717 7.24061 8.74717 7.4973C8.74717 7.73794 8.73649 7.97858 8.74717 8.21922C8.75784 8.45986 8.87522 8.64436 9.23803 8.65238C9.63286 8.6604 9.76091 8.45987 9.77158 8.20318C9.78225 7.97858 9.77158 7.74596 9.77158 7.52136C9.77158 7.24864 9.93164 7.07217 10.2945 7.06414C10.6679 7.06414 10.8173 7.25666 10.8387 7.51334C10.8493 7.73794 10.8493 7.97056 10.8387 8.19516C10.8387 8.45986 10.9774 8.65238 11.3615 8.64436C11.7137 8.63634 11.8417 8.45987 11.8417 8.20318C11.8417 7.96254 11.8311 7.7219 11.8417 7.48126C11.8631 7.24061 12.0125 7.05612 12.3646 7.05612C12.7274 7.05612 12.9088 7.22457 12.9088 7.4973C12.9195 8.53206 12.9622 9.55879 12.8875 10.5775Z" fill="#3A416F"/>
                            <path d="M3.57174 6.45457C3.39034 6.45457 3.2196 6.3904 3.12356 6.27008C2.77142 5.85296 2.57935 5.36366 2.57935 4.85831C2.57935 3.40644 4.14798 2.22729 6.07942 2.22729C8.01086 2.22729 9.57949 3.40644 9.57949 4.85831C9.57949 5.08291 9.34473 5.25938 9.04595 5.25938C8.74716 5.25938 8.5124 5.08291 8.5124 4.85831C8.5124 3.84762 7.42396 3.02943 6.07942 3.02943C4.73488 3.02943 3.64644 3.85564 3.64644 4.85831C3.64644 5.20323 3.77449 5.54815 4.01992 5.83692C4.17999 6.02141 4.10529 6.27008 3.85986 6.3904C3.76382 6.4305 3.66778 6.45457 3.57174 6.45457Z" fill="#3A416F"/>
                            <path d="M2.23783 7.04011C2.05642 7.04011 1.88569 6.97594 1.78965 6.85562C1.27745 6.24599 1 5.54011 1 4.81016C1 2.70856 3.27291 1 6.0687 1C8.86449 1 11.1481 2.70856 11.1481 4.81818C11.1481 5.04278 10.9133 5.21925 10.6145 5.21925C10.3157 5.21925 10.081 5.04278 10.081 4.81818C10.081 3.15775 8.28826 1.80214 6.0687 1.80214C3.84915 1.80214 2.0671 3.14973 2.0671 4.81818C2.0671 5.39572 2.28052 5.9492 2.68601 6.43048C2.84608 6.61497 2.77138 6.86364 2.52595 6.98396C2.42991 7.02406 2.33387 7.04011 2.23783 7.04011Z" fill="#3A416F"/>
                          </svg>
                        </div>
                        <div>Online Services</div>
                     </router-link>
                  </li>
                  <li>
                     <router-link tag="a" to="/Questionnaires">
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
                     </router-link>
                  </li>
                  <li>
                     <router-link tag="a" to="/SystemCalendar">
                        <div class="menu-icons">
                          <svg width="21" height="21" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.625 1.875H13.125C13.2908 1.875 13.4497 1.94085 13.5669 2.05806C13.6842 2.17527 13.75 2.33424 13.75 2.5V12.5C13.75 12.6658 13.6842 12.8247 13.5669 12.9419C13.4497 13.0592 13.2908 13.125 13.125 13.125H1.875C1.70924 13.125 1.55027 13.0592 1.43306 12.9419C1.31585 12.8247 1.25 12.6658 1.25 12.5V2.5C1.25 2.33424 1.31585 2.17527 1.43306 2.05806C1.55027 1.94085 1.70924 1.875 1.875 1.875H4.375V0.625H5.625V1.875H9.375V0.625H10.625V1.875ZM2.5 5.625V11.875H12.5V5.625H2.5ZM3.75 8.125H6.875V10.625H3.75V8.125Z" fill="#3A416F"/>
                          </svg>
                        </div>
                        <div>System Calendar</div>
                     </router-link>
                  </li>
               </ul>
            </div>
         </section>

         <section id="section-4">
            <section>
               <div>
                  <div>
                     Author: Aibolat Batyrov<br>
                     Final project for <br>
                      Web programming: <br>
                    front-end course
                  </div>
                 <div>Open source GitHub repo:</div>
                 <a href="https://www.facebook.com/aibolat.batyrov" target="_blank">
                   <svg width="35" height="35" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                     <rect width="50" height="50" fill="url(#pattern0)"/>
                     <defs>
                       <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                         <use xlink:href="#image0_20_385" transform="scale(0.01)"/>
                       </pattern>
                       <image id="image0_20_385" width="100" height="100" xlink:href="data:image/png;base64,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"/>
                     </defs>
                   </svg>
                 </a>
                   <div id="buttons">
                     <a href="https://www.facebook.com/aibolat.batyrov" target="_blank">
                       <button>
                         <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path fill-rule="evenodd" clip-rule="evenodd" d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM26.5016 25.0542V38.1115H21.0991V25.0547H18.4V20.5551H21.0991V17.8536C21.0991 14.1828 22.6231 12 26.9532 12H30.5581V16.5001H28.3048C26.6192 16.5001 26.5077 17.1289 26.5077 18.3025L26.5016 20.5546H30.5836L30.1059 25.0542H26.5016Z" fill="white"/>
                         </svg>
                       </button>
                     </a>
                     <a href="https://www.instagram.com/ai.batyrov/" target="_blank">
                       <button>
                         <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path fill-rule="evenodd" clip-rule="evenodd" d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM18.7233 11.2773C20.0886 11.2152 20.5249 11.2 24.0012 11.2H23.9972C27.4746 11.2 27.9092 11.2152 29.2746 11.2773C30.6373 11.3397 31.5679 11.5555 32.384 11.872C33.2266 12.1987 33.9386 12.636 34.6506 13.348C35.3627 14.0595 35.8 14.7736 36.128 15.6155C36.4427 16.4294 36.6587 17.3595 36.7227 18.7222C36.784 20.0876 36.8 20.5238 36.8 24.0001C36.8 27.4764 36.784 27.9116 36.7227 29.277C36.6587 30.6391 36.4427 31.5695 36.128 32.3837C35.8 33.2253 35.3627 33.9394 34.6506 34.6509C33.9394 35.3629 33.2264 35.8013 32.3848 36.1283C31.5703 36.4448 30.6391 36.6605 29.2765 36.7229C27.9111 36.7851 27.4762 36.8003 23.9996 36.8003C20.5236 36.8003 20.0876 36.7851 18.7222 36.7229C17.3598 36.6605 16.4294 36.4448 15.615 36.1283C14.7736 35.8013 14.0595 35.3629 13.3483 34.6509C12.6365 33.9394 12.1992 33.2253 11.872 32.3834C11.5557 31.5695 11.34 30.6394 11.2773 29.2767C11.2155 27.9114 11.2 27.4764 11.2 24.0001C11.2 20.5238 11.216 20.0873 11.2771 18.7219C11.3384 17.3598 11.5544 16.4294 11.8717 15.6152C12.1997 14.7736 12.6371 14.0595 13.3491 13.348C14.0606 12.6363 14.7747 12.1989 15.6166 11.872C16.4305 11.5555 17.3606 11.3397 18.7233 11.2773Z" fill="white"/>
                           <path fill-rule="evenodd" clip-rule="evenodd" d="M22.853 13.5067C23.0759 13.5064 23.3158 13.5065 23.5746 13.5066L24.0013 13.5067C27.4189 13.5067 27.824 13.519 29.1736 13.5803C30.4216 13.6374 31.0989 13.8459 31.5501 14.0211C32.1475 14.2531 32.5733 14.5305 33.0211 14.9785C33.4691 15.4265 33.7464 15.8532 33.979 16.4505C34.1542 16.9012 34.363 17.5785 34.4198 18.8265C34.4811 20.1759 34.4944 20.5812 34.4944 23.9972C34.4944 27.4133 34.4811 27.8186 34.4198 29.168C34.3627 30.416 34.1542 31.0933 33.979 31.544C33.747 32.1413 33.4691 32.5667 33.0211 33.0144C32.5731 33.4624 32.1477 33.7398 31.5501 33.9718C31.0995 34.1478 30.4216 34.3558 29.1736 34.4128C27.8242 34.4742 27.4189 34.4875 24.0013 34.4875C20.5834 34.4875 20.1783 34.4742 18.8289 34.4128C17.5809 34.3552 16.9036 34.1467 16.4521 33.9715C15.8548 33.7395 15.4281 33.4621 14.9801 33.0141C14.5321 32.5661 14.2548 32.1405 14.0222 31.5429C13.847 31.0923 13.6382 30.4149 13.5814 29.1669C13.5201 27.8176 13.5078 27.4122 13.5078 23.994C13.5078 20.5759 13.5201 20.1727 13.5814 18.8233C13.6385 17.5753 13.847 16.898 14.0222 16.4468C14.2542 15.8494 14.5321 15.4228 14.9801 14.9748C15.4281 14.5268 15.8548 14.2494 16.4521 14.0169C16.9033 13.8409 17.5809 13.6329 18.8289 13.5755C20.0097 13.5222 20.4674 13.5062 22.853 13.5035V13.5067ZM30.8339 15.6321C29.9859 15.6321 29.2978 16.3193 29.2978 17.1676C29.2978 18.0156 29.9859 18.7036 30.8339 18.7036C31.6819 18.7036 32.3699 18.0156 32.3699 17.1676C32.3699 16.3196 31.6819 15.6316 30.8339 15.6316V15.6321ZM17.4279 24.0002C17.4279 20.3701 20.3709 17.4269 24.001 17.4268C27.6312 17.4268 30.5736 20.37 30.5736 24.0002C30.5736 27.6304 27.6314 30.5723 24.0013 30.5723C20.3711 30.5723 17.4279 27.6304 17.4279 24.0002Z" fill="white"/>
                           <path d="M24.0012 19.7334C26.3575 19.7334 28.2679 21.6436 28.2679 24.0001C28.2679 26.3564 26.3575 28.2668 24.0012 28.2668C21.6447 28.2668 19.7345 26.3564 19.7345 24.0001C19.7345 21.6436 21.6447 19.7334 24.0012 19.7334Z" fill="white"/>
                         </svg>
                       </button>
                     </a>
                     <a href="https://t.me/aibolat_batyrov" target="_blank">
                       <button>
                         <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path fill-rule="evenodd" clip-rule="evenodd" d="M0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24ZM19.6 35L20.0083 28.8823L20.008 28.882L31.1369 18.839C31.6253 18.4055 31.0303 18.1941 30.3819 18.5873L16.6473 27.2523L10.7147 25.4007C9.4335 25.0084 9.4243 24.128 11.0023 23.4951L34.1203 14.5809C35.1762 14.1015 36.1953 14.8345 35.7922 16.4505L31.8552 35.0031C31.5803 36.3215 30.7837 36.6368 29.68 36.0278L23.6827 31.5969L20.8 34.4C20.7909 34.4088 20.7819 34.4176 20.7729 34.4264C20.4505 34.7403 20.1837 35 19.6 35Z" fill="white"/>
                         </svg>
                       </button>
                     </a>
                     <a href="https://www.linkedin.com/in/aibolat-batyrov/" target="_blank">
                       <button>
                         <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path fill-rule="evenodd" clip-rule="evenodd" d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM11.5216 19.8778H16.9605V36.2196H11.5216V19.8778ZM17.3188 14.8227C17.2835 13.2204 16.1377 12 14.277 12C12.4164 12 11.2 13.2204 11.2 14.8227C11.2 16.3918 12.3805 17.6473 14.2064 17.6473H14.2412C16.1377 17.6473 17.3188 16.3918 17.3188 14.8227ZM30.3131 19.4941C33.8922 19.4941 36.5754 21.8303 36.5754 26.8497L36.5752 36.2196H31.1365V27.4767C31.1365 25.2807 30.3494 23.7822 28.3805 23.7822C26.8779 23.7822 25.9829 24.7924 25.5898 25.7682C25.446 26.1178 25.4107 26.605 25.4107 27.0934V36.22H19.9711C19.9711 36.22 20.0428 21.4117 19.9711 19.8783H25.4107V22.1929C26.1325 21.0802 27.4254 19.4941 30.3131 19.4941Z" fill="white"/>
                         </svg>
                       </button>
                     </a>
                   </div>
               </div>
            </section>
         </section>
        <section>
          Suleyman Demirel University <br>© 2021
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
  .font();
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
      svg > circle {
        stroke: #FFFFFF;
      }
    }
}

#section-4 {
   width: 100%;
   display: flex;
   justify-content: center;
   height: 18rem;

    section {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8%;
      background: linear-gradient(135deg, #979fff 0%, #b56eff 100%);
      background-size: cover;
      box-shadow: 0 20px 27px rgba(0, 0, 0, 0.05);
      div {
        width: 90%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        .font();
        color: rgb(255,255,255);
        font-size: 16px;
        .menu-icons {
          margin: 0;
          height: 35px;
        }
        button {
          border: none;
          background: none;
          margin-top: 1.4rem;
          width: 23%;
          padding: 0;
          height: 50px;
          cursor: pointer;
          svg > path {
            transition: all 0.3s linear;
          }
          &:hover {
            svg > path {
              fill: #00ffe5;
              transition: all 0.3s linear;
            }
          }
        }
      }
    }
}

#buttons {
  display: flex;
  width: 100% !important;
  justify-content: space-between!important;
  flex-direction: row!important;
}

</style>
