

<script setup>
    import axios from 'axios';
    const title = import.meta.env.VITE_APP_TITLE;
    axios.get('/api/v1/profile/', {}).then(function (response) {
                    console.log(response);
                })


</script>


<template>
    <div class="bg-gray-100">
  
      <div class="container mx-auto my-5 p-5">
          <div class="md:flex md:-mx-2 ">
              <!-- Left Side -->
              <div class="w-full md:w-4/12 md:mx-2">
                <div class="flex flex-col">
                  <div class="bg-white rounded-lg p-2">
                    <div class="flex-none sm:flex">
                      <div class=" relative h-32 w-32   sm:mb-0 mb-3">
                        <img src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg" alt="aji" class=" w-32 h-32 object-cover rounded-2xl">
                        <a href="#" class="absolute -right-2 bottom-2   -ml-3  text-white p-1 text-xs bg-green-400 hover:bg-green-500 font-medium tracking-wider rounded-full transition ease-in duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z">
                            </path>
                          </svg>
                        </a>
                      </div>
                      <div class="flex-auto sm:ml-5 justify-evenly">
                        <div class="flex items-center justify-between sm:mt-2">
                          <div class="flex items-center">
                            <div class="flex flex-col">
                              <div class="w-full flex-none text-lg text-gray-200 font-bold leading-none">Arjun</div>
                              <div class="flex-auto text-gray-400 my-1">
                                <span class="mr-3 ">Technician</span><span class="mr-3 border-r border-gray-600  max-h-0"></span><span>Bengaluru, IND</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="flex flex-row items-center">
                          <div class="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-yellow-400">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                              </path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-yellow-400">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                              </path>
                            </svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-yellow-400">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                              </path>
                            </svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-yellow-400">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                              </path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-5 w-5 text-yellow-400">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z">
                              </path>
                            </svg>
                          </div>
                          <div class="flex-1 inline-flex   items-center ml-2 space-x-2">
                            <a hre="https://www.behance.net/ajeeshmon" target="_blank"><svg class=" cursor-pointer w-5 h-5 p-1  rounded-2xl hover:bg-blue-500 hover:text-white transition ease-in duration-300" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 172 172" style=" fill:#4a90e2;">
                                <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                                  <path d="M0,172v-172h172v172z" fill="none"></path>
                                  <g fill="#ffffff">
                                    <path d="M71.66667,82.41667c3.58333,0 14.33333,-5.79783 14.33333,-20.13117c0,-22.28475 -19.72983,-26.45217 -41.95367,-26.45217c-4.19967,0 -17.00292,0.00717 -26.12967,0.00358c-5.93758,-0.00358 -10.75,4.81242 -10.75,10.75v78.82975c0,5.93758 4.81242,10.75 10.75,10.75h42.28333c15.83475,0 29.25792,-12.52733 29.38333,-28.36208c0.16842,-21.77233 -17.91667,-25.38792 -17.91667,-25.38792zM28.66667,53.75h25.08333c5.93758,0 10.75,4.81242 10.75,10.75c0,5.93758 -4.81242,10.75 -10.75,10.75h-25.08333zM55.54167,118.25h-26.875v-25.08333h26.875c6.92658,0 12.54167,5.61508 12.54167,12.54167c0,6.92658 -5.61508,12.54167 -12.54167,12.54167zM163.0775,103.91667c2.97058,0 5.375,-2.40442 5.37858,-5.375v0c0,-20.77975 -14.37275,-37.625 -35.83333,-37.625c-19.79075,0 -35.83333,16.84525 -35.83333,37.625c0,20.77975 16.04258,37.625 35.83333,37.625c17.51175,0 27.2405,-8.1915 31.992,-20.22075c0.91733,-2.31842 -0.8815,-4.83033 -3.3755,-4.83033h-8.60358c-1.30792,0 -2.46533,0.74175 -3.14258,1.86333c-3.27517,5.41083 -8.27392,8.85442 -15.00342,8.85442c-10.07633,0 -17.415,-7.65042 -19.2855,-17.91667h38.4205zM132.62275,75.25c7.44258,0 14.65583,5.934 16.69117,14.33333h-33.22825c2.69825,-8.41725 9.08375,-14.33333 16.53708,-14.33333zM148.70833,53.75h-28.66667c-2.967,0 -5.375,-2.408 -5.375,-5.375v0c0,-2.967 2.408,-5.375 5.375,-5.375h28.66667c2.967,0 5.375,2.408 5.375,5.375v0c0,2.967 -2.408,5.375 -5.375,5.375z"></path>
                                  </g>
                                </g>
                              </svg></a>
  
                            <a hre="https://www.linkedin.com/in/ajeeshmon" target="_blank"><svg class="cursor-pointer w-5 h-5 p-1  rounded-2xl hover:bg-blue-500 hover:text-white transition ease-in duration-300" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 172 172" style=" fill:#ffffff;">
                                <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                                  <path d="M0,172v-172h172v172z" fill="none"></path>
                                  <g fill="#ffffff">
                                    <path d="M51.6,143.33333h-28.66667v-86h28.66667zM37.2724,45.86667c-7.9292,0 -14.33907,-6.42707 -14.33907,-14.33907c0,-7.912 6.42133,-14.3276 14.33907,-14.3276c7.90053,0 14.3276,6.42707 14.3276,14.3276c0,7.912 -6.42707,14.33907 -14.3276,14.33907zM154.8,143.33333h-27.56013v-41.85333c0,-9.98173 -0.1892,-22.81867 -14.3276,-22.81867c-14.35053,0 -16.55787,10.8704 -16.55787,22.09627v42.57573h-27.5544v-86.06307h26.4536v11.75907h0.37267c3.6808,-6.76533 12.6764,-13.8976 26.0924,-13.8976c27.92133,0 33.08133,17.82493 33.08133,40.99907z"></path>
                                  </g>
                                </g>
                              </svg></a>
                            <a hre="https://twitter.com/ajeemon?lang=en" target="_blank"><svg class="cursor-pointer w-5 h-5 p-1  rounded-2xl hover:bg-blue-400 hover:text-white transition ease-in duration-300" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 172 172" style=" fill:#ffffff;">
                                <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                                  <path d="M0,172v-172h172v172z" fill="none"></path>
                                  <g fill="#ffffff">
                                    <path d="M155.04367,28.88883c-5.84083,2.75917 -15.781,7.9335 -20.77617,8.9225c-0.1935,0.05017 -0.35117,0.11467 -0.5375,0.16483c-5.8265,-5.74767 -13.81017,-9.3095 -22.64667,-9.3095c-17.80917,0 -32.25,14.44083 -32.25,32.25c0,0.93883 -0.07883,2.666 0,3.58333c-23.06233,0 -39.904,-12.03283 -52.51017,-27.4985c-1.68417,-2.07833 -3.47583,-0.99617 -3.8485,0.48017c-0.8385,3.33967 -1.12517,8.9225 -1.12517,12.90717c0,10.0405 7.8475,19.90183 20.06667,26.015c-2.25033,0.5805 -4.73,0.99617 -7.31,0.99617c-3.03867,0 -6.536,-0.7955 -9.59617,-2.40083c-1.13233,-0.59483 -3.57617,-0.43 -2.85233,2.46533c2.9025,11.60283 16.1465,19.75133 27.97867,22.1235c-2.6875,1.58383 -8.42083,1.26133 -11.05817,1.26133c-0.97467,0 -4.3645,-0.22933 -6.5575,-0.50167c-1.9995,-0.24367 -5.074,0.27233 -2.50117,4.171c5.5255,8.3635 18.02417,13.61667 28.78133,13.81733c-9.90433,7.76867 -26.101,10.60667 -41.61683,10.60667c-3.139,-0.07167 -2.98133,3.5045 -0.4515,4.83033c11.44517,6.00567 30.19317,9.56033 43.58767,9.56033c53.24833,0 83.51317,-40.58483 83.51317,-78.8405c0,-0.61633 -0.01433,-1.90633 -0.03583,-3.2035c0,-0.129 0.03583,-0.25083 0.03583,-0.37983c0,-0.1935 -0.05733,-0.37983 -0.05733,-0.57333c-0.0215,-0.97467 -0.043,-1.88483 -0.0645,-2.35783c4.22117,-3.04583 10.6855,-8.33483 13.9535,-12.384c1.11083,-1.376 0.215,-3.04583 -1.29717,-2.52267c-3.8915,1.3545 -10.621,3.9775 -14.835,4.47917c8.43517,-5.58283 12.60617,-10.44183 16.1895,-15.83833c1.2255,-1.84183 -0.30817,-3.71233 -2.17867,-2.82367z"></path>
                                  </g>
                                </g>
                              </svg></a>
                          </div>
                        </div>
                        <div class="flex pt-2  text-sm text-gray-400">
                          <div class="flex-1 inline-flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z">
                              </path>
                            </svg>
                            <p class="">1.2k Followers</p>
                          </div>
                          <div class="flex-1 inline-flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"></path>
                            </svg>
                            <p class="">14 Awards</p>
                          </div>
                          
                        </div>
                        
                      </div>
                      
                    </div>
                    <div class="mt-2">
                      <h3 class="text-gray-600 font-lg text-semibold leading-6">CEO at SAFRON Inc.</h3>
                      <p class="text-sm text-gray-500 hover:text-gray-600 leading-6">Lorem ipsum dolor sit amet
                          consectetur adipisicing elit.
                          Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt</p>
                      <ul class="text-gray-600 hover:text-gray-700 mt-2 divide-y">
                        <li class="flex items-center py-3">
                              <span>Roles</span>
                              <span class="ml-auto">Teacher, Assistant</span>
                          </li>
                          <li class="flex items-center py-3">
                              <span>Status</span>
                              <span class="ml-auto"><span
                                      class="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
                          </li>
                          <li class="flex items-center py-3">
                              <span>Member since</span>
                              <span class="ml-auto">Nov 07, 2016</span>
                          </li>
                      </ul>
                    </div>
                  </div>
                  
                </div>
                  <!-- Profile Card -->
                  
                  <!-- End of profile card -->
                  <div class="my-4"></div>
                  <!-- Friends card -->
                  <div class="bg-white p-3 hover:shadow">
                      <div class="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                          <span class="text-green-500">
                              <svg class="h-5 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none"
                                  viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                          </span>
                          <span>My Achivements</span>
                      </div>
                      <div class="grid grid-cols-3">
                          <div v-for="n in 4" class="text-center my-2">
                              <img class="h-16 w-16 rounded-full mx-auto"
                                  src=""
                                  alt="">
                              <a href="#" class="text-main-color">{{ n }}</a>
                          </div>
                          
                      </div>
                  </div>
                  <!-- End of friends card -->
              </div>
              <!-- Right Side -->
              <div class="w-full md:w-8/12 mx-2">
                  <!-- Profile tab -->
                  <div class="px-6 2xl:container">
                    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-2">
                        <div class="md:col-span-2 lg:col-span-1" >
                            <div class="h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white">
                                <svg class="w-40 m-auto opacity-75" viewBox="0 0 146 146" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M73.1866 5.7129C81.999 5.7129 90.725 7.44863 98.8666 10.821C107.008 14.1933 114.406 19.1363 120.637 25.3675C126.868 31.5988 131.811 38.9964 135.184 47.138C138.556 55.2796 140.292 64.0057 140.292 72.818C140.292 81.6304 138.556 90.3565 135.184 98.4981C131.811 106.64 126.868 114.037 120.637 120.269C114.406 126.5 107.008 131.443 98.8666 134.815C90.725 138.187 81.999 139.923 73.1866 139.923C64.3742 139.923 55.6481 138.187 47.5066 134.815C39.365 131.443 31.9674 126.5 25.7361 120.269C19.5048 114.037 14.5619 106.64 11.1895 98.4981C7.81717 90.3565 6.08144 81.6304 6.08144 72.818C6.08144 64.0057 7.81717 55.2796 11.1895 47.138C14.5619 38.9964 19.5048 31.5988 25.7361 25.3675C31.9674 19.1363 39.365 14.1933 47.5066 10.821C55.6481 7.44863 64.3742 5.7129 73.1866 5.7129L73.1866 5.7129Z" stroke="#e4e4f2" stroke-width="4.89873"/>
                                    <path d="M73.5 23.4494C79.9414 23.4494 86.3198 24.7181 92.2709 27.1831C98.222 29.6482 103.629 33.2612 108.184 37.816C112.739 42.3707 116.352 47.778 118.817 53.7291C121.282 59.6802 122.551 66.0586 122.551 72.5C122.551 78.9414 121.282 85.3198 118.817 91.2709C116.352 97.222 112.739 102.629 108.184 107.184C103.629 111.739 98.222 115.352 92.2709 117.817C86.3198 120.282 79.9414 121.551 73.5 121.551C67.0586 121.551 60.6802 120.282 54.7291 117.817C48.778 115.352 43.3707 111.739 38.816 107.184C34.2612 102.629 30.6481 97.222 28.1831 91.2709C25.7181 85.3198 24.4494 78.9414 24.4494 72.5C24.4494 66.0586 25.7181 59.6802 28.1831 53.7291C30.6481 47.778 34.2612 42.3707 38.816 37.816C43.3707 33.2612 48.778 29.6481 54.7291 27.1831C60.6802 24.7181 67.0586 23.4494 73.5 23.4494L73.5 23.4494Z" stroke="#e4e4f2" stroke-width="4.89873"/>
                                    <path d="M73 24C84.3364 24 95.3221 27.9307 104.085 35.1225C112.848 42.3142 118.847 52.322 121.058 63.4406C123.27 74.5592 121.558 86.1006 116.214 96.0984C110.87 106.096 102.225 113.932 91.7515 118.27C81.278 122.608 69.6243 123.181 58.7761 119.89C47.9278 116.599 38.5562 109.649 32.258 100.223C25.9598 90.7971 23.1248 79.479 24.2359 68.1972C25.3471 56.9153 30.3357 46.3678 38.3518 38.3518" stroke="url(#paint0_linear_622:13617)" stroke-width="10" stroke-linecap="round"/>
                                    <path d="M73 5.00001C84.365 5.00001 95.5488 7.84852 105.529 13.2852C115.509 18.7218 123.968 26.5732 130.131 36.1217C136.295 45.6702 139.967 56.6112 140.812 67.9448C141.657 79.2783 139.648 90.6429 134.968 101C130.288 111.357 123.087 120.375 114.023 127.232C104.96 134.088 94.3218 138.563 83.0824 140.248C71.8431 141.933 60.3606 140.775 49.6845 136.878C39.0085 132.981 29.4793 126.471 21.9681 117.942" stroke="url(#paint1_linear_622:13617)" stroke-width="10" stroke-linecap="round"/>
                                    <path d="M9.60279 97.5926C6.37325 89.2671 4.81515 80.3871 5.01745 71.4595C5.21975 62.5319 7.1785 53.7316 10.7818 45.561C14.3852 37.3904 19.5626 30.0095 26.0184 23.8398C32.4742 17.6701 40.082 12.8323 48.4075 9.6028" stroke="url(#paint2_linear_622:13617)" stroke-width="10" stroke-linecap="round"/>
                                    <path d="M73 5.00001C86.6504 5.00001 99.9849 9.10831 111.269 16.7904" stroke="url(#paint3_linear_622:13617)" stroke-width="10" stroke-linecap="round"/>
                                    <circle cx="73.5" cy="72.5" r="29" fill="#e4e4f2" stroke="#e4e4f2"/>
                                    <path d="M74 82.8332C68.0167 82.8332 63.1666 77.9831 63.1666 71.9998C63.1666 66.0166 68.0167 61.1665 74 61.1665C79.9832 61.1665 84.8333 66.0166 84.8333 71.9998C84.8333 77.9831 79.9832 82.8332 74 82.8332ZM74 80.6665C76.2985 80.6665 78.5029 79.7534 80.1282 78.1281C81.7535 76.5028 82.6666 74.2984 82.6666 71.9998C82.6666 69.7013 81.7535 67.4969 80.1282 65.8716C78.5029 64.2463 76.2985 63.3332 74 63.3332C71.7014 63.3332 69.497 64.2463 67.8717 65.8716C66.2464 67.4969 65.3333 69.7013 65.3333 71.9998C65.3333 74.2984 66.2464 76.5028 67.8717 78.1281C69.497 79.7534 71.7014 80.6665 74 80.6665ZM70.75 67.6665H77.25L79.9583 71.4582L74 77.4165L68.0416 71.4582L70.75 67.6665ZM71.8658 69.8332L70.8691 71.2307L74 74.3615L77.1308 71.2307L76.1341 69.8332H71.8658Z" fill="#6A6A9F"/>
                                    <defs>
                                    <linearGradient id="paint0_linear_622:13617" x1="45.9997" y1="19" x2="46.0897" y2="124.308" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#E323FF"/>
                                    <stop offset="1" stop-color="#7517F8"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_622:13617" x1="1.74103e-06" y1="8.70228e-06" x2="6.34739e-08" y2="140.677" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#4DFFDF"/>
                                    <stop offset="1" stop-color="#4DA1FF"/>
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_622:13617" x1="36.4997" y1="5.07257e-06" x2="36.6213" y2="142.36" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FFD422"/>
                                    <stop offset="1" stop-color="#FF7D05"/>
                                    </linearGradient>
                                    <linearGradient id="paint3_linear_622:13617" x1="1.74103e-06" y1="8.70228e-06" x2="6.34739e-08" y2="140.677" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#4DFFDF"/>
                                    <stop offset="1" stop-color="#4DA1FF"/>
                                    </linearGradient>
                                    </defs>
                                </svg>
                                <div>
                                    <h5 class="text-xl text-gray-600 text-center">Global Activities</h5>
                                    <div class="mt-2 flex justify-center gap-4">
                                        <h3 class="text-3xl font-bold text-gray-700">$23,988</h3>
                                        <div class="flex items-end gap-1 text-green-500">
                                            <svg class="w-3" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.00001 0L12 8H-3.05176e-05L6.00001 0Z" fill="currentColor"/>
                                            </svg>
                                            <span>2%</span>
                                        </div>
                                    </div>
                                    <span class="block text-center text-gray-500">Compared to last week $13,988</span>
                                </div>
                                <table class="w-full text-gray-600">
                                    <tbody>
                                        <tr>
                                            <td class="py-2">Tailored ui</td>
                                            <td class="text-gray-500">896</td>
                                            <td>
                                                <svg class="w-16 ml-auto" viewBox="0 0 68 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect opacity="0.4" width="17" height="21" rx="1" fill="#e4e4f2"/>
                                                    <rect opacity="0.4" x="19" width="14" height="21" rx="1" fill="#e4e4f2"/>
                                                    <rect opacity="0.4" x="35" width="14" height="21" rx="1" fill="#e4e4f2"/>
                                                    <rect opacity="0.4" x="51" width="17" height="21" rx="1" fill="#e4e4f2"/>
                                                    <path d="M0 7C8.62687 7 7.61194 16 17.7612 16C27.9104 16 25.3731 9 34 9C42.6269 9 44.5157 5 51.2537 5C57.7936 5 59.3731 14.5 68 14.5" stroke="url(#paint0_linear_622:13631)" stroke-width="2" stroke-linejoin="round"/>
                                                    <defs>
                                                    <linearGradient id="paint0_linear_622:13631" x1="68" y1="7.74997" x2="1.69701" y2="8.10029" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#E323FF"/>
                                                    <stop offset="1" stop-color="#7517F8"/>
                                                    </linearGradient>
                                                    </defs>
                                                </svg>
                                            </td>   
                                        </tr>
                                        <tr>
                                            <td class="py-2">Customize</td>
                                            <td class="text-gray-500">1200</td>
                                            <td>
                                                <svg class="w-16 ml-auto" viewBox="0 0 68 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect opacity="0.4" width="17" height="21" rx="1" fill="#e4e4f2"/>
                                                    <rect opacity="0.4" x="19" width="14" height="21" rx="1" fill="#e4e4f2"/>
                                                    <rect opacity="0.4" x="35" width="14" height="21" rx="1" fill="#e4e4f2"/>
                                                    <rect opacity="0.4" x="51" width="17" height="21" rx="1" fill="#e4e4f2"/>
                                                    <path d="M0 12.929C8.69077 12.929 7.66833 9.47584 17.8928 9.47584C28.1172 9.47584 25.5611 15.9524 34.2519 15.9524C42.9426 15.9524 44.8455 10.929 51.6334 10.929C58.2217 10.929 59.3092 5 68 5" stroke="url(#paint0_linear_622:13640)" stroke-width="2" stroke-linejoin="round"/>
                                                    <defs>
                                                    <linearGradient id="paint0_linear_622:13640" x1="34" y1="5" x2="34" y2="15.9524" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#8AFF6C"/>
                                                    <stop offset="1" stop-color="#02C751"/>
                                                    </linearGradient>
                                                    </defs>
                                                </svg>
                                            </td>   
                                        </tr>
                                        <tr>
                                            <td class="py-2">Other</td>
                                            <td class="text-gray-500">12</td>
                                            <td>
                                                <svg class="w-16 ml-auto" viewBox="0 0 68 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect opacity="0.4" width="17" height="21" rx="1" fill="#e4e4f2"/>
                                                    <rect opacity="0.4" x="19" width="14" height="21" rx="1" fill="#e4e4f2"/>
                                                    <rect opacity="0.4" x="35" width="14" height="21" rx="1" fill="#e4e4f2"/>
                                                    <rect opacity="0.4" x="51" width="17" height="21" rx="1" fill="#e4e4f2"/>
                                                    <path d="M0 6C8.62687 6 6.85075 12.75 17 12.75C27.1493 12.75 25.3731 9 34 9C42.6269 9 42.262 13.875 49 13.875C55.5398 13.875 58.3731 6 67 6" stroke="url(#paint0_linear_622:13649)" stroke-width="2" stroke-linejoin="round"/>
                                                    <defs>
                                                    <linearGradient id="paint0_linear_622:13649" x1="67" y1="7.96873" x2="1.67368" y2="8.44377" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#FFD422"/>
                                                    <stop offset="1" stop-color="#FF7D05"/>
                                                    </linearGradient>
                                                    </defs>
                                                </svg>
                                            </td>   
                                        </tr>
                                    </tbody>
                                </table> 
                            </div>
                        </div>
                        <div>
                            <div class="h-full py-6 px-6 rounded-xl border border-gray-200 bg-white">
                                <h5 class="text-xl text-gray-700">Downloads</h5>
                                <div class="my-8">
                                    <h1 class="text-5xl font-bold text-gray-800">64,5%</h1>
                                    <span class="text-gray-500">Compared to last week $13,988</span>
                                </div>
                                <svg class="w-full" viewBox="0 0 218 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 67.5C27.8998 67.5 24.6002 15 52.5 15C80.3998 15 77.1002 29 105 29C132.9 29 128.6 52 156.5 52C184.4 52 189.127 63.8158 217.027 63.8158" stroke="url(#paint0_linear_622:13664)" stroke-width="3" stroke-linecap="round"/>
                                    <path d="M0 67.5C27.2601 67.5 30.7399 31 58 31C85.2601 31 80.7399 2 108 2C135.26 2 134.74 43 162 43C189.26 43 190.74 63.665 218 63.665" stroke="url(#paint1_linear_622:13664)" stroke-width="3" stroke-linecap="round"/>
                                    <defs>
                                    <linearGradient id="paint0_linear_622:13664" x1="217.027" y1="15" x2="7.91244" y2="15" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#4DFFDF"/>
                                    <stop offset="1" stop-color="#4DA1FF"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_622:13664" x1="218" y1="18.3748" x2="5.4362" y2="18.9795" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#E323FF"/>
                                    <stop offset="1" stop-color="#7517F8"/>
                                    </linearGradient>
                                    </defs>
                                </svg>
                                <table class="mt-6 -mb-2 w-full text-gray-600">
                                    <tbody>
                                        <tr>
                                            <td class="py-2">From new users</td>
                                            <td class="text-gray-500">896</td>
                                            <td>
                                                <svg class="w-16 ml-auto" viewBox="0 0 68 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect opacity="0.4" width="17" height="21" rx="1" fill="#e4e4f2"/>
                                                    <rect opacity="0.4" x="19" width="14" height="21" rx="1" fill="#e4e4f2"/>
                                                    <rect opacity="0.4" x="35" width="14" height="21" rx="1" fill="#e4e4f2"/>
                                                    <rect opacity="0.4" x="51" width="17" height="21" rx="1" fill="#e4e4f2"/>
                                                    <path d="M0 7C8.62687 7 7.61194 16 17.7612 16C27.9104 16 25.3731 9 34 9C42.6269 9 44.5157 5 51.2537 5C57.7936 5 59.3731 14.5 68 14.5" stroke="url(#paint0_linear_622:13631)" stroke-width="2" stroke-linejoin="round"/>
                                                    <defs>
                                                    <linearGradient id="paint0_linear_622:13631" x1="68" y1="7.74997" x2="1.69701" y2="8.10029" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#E323FF"/>
                                                    <stop offset="1" stop-color="#7517F8"/>
                                                    </linearGradient>
                                                    </defs>
                                                </svg>
                                            </td>   
                                        </tr>
                                        <tr>
                                            <td class="py-2">From old users</td>
                                            <td class="text-gray-500">1200</td>
                                            <td>
                                                <svg class="w-16 ml-auto" viewBox="0 0 68 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect opacity="0.4" width="17" height="21" rx="1" fill="#e4e4f2"/>
                                                    <rect opacity="0.4" x="19" width="14" height="21" rx="1" fill="#e4e4f2"/>
                                                    <rect opacity="0.4" x="35" width="14" height="21" rx="1" fill="#e4e4f2"/>
                                                    <rect opacity="0.4" x="51" width="17" height="21" rx="1" fill="#e4e4f2"/>
                                                    <path d="M0 12.929C8.69077 12.929 7.66833 9.47584 17.8928 9.47584C28.1172 9.47584 25.5611 15.9524 34.2519 15.9524C42.9426 15.9524 44.8455 10.929 51.6334 10.929C58.2217 10.929 59.3092 5 68 5" stroke="url(#paint0_linear_622:13640)" stroke-width="2" stroke-linejoin="round"/>
                                                    <defs>
                                                    <linearGradient id="paint0_linear_622:13640" x1="34" y1="5" x2="34" y2="15.9524" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#8AFF6C"/>
                                                    <stop offset="1" stop-color="#02C751"/>
                                                    </linearGradient>
                                                    </defs>
                                                </svg>
                                            </td>   
                                        </tr>
                                    </tbody>
                                </table>   
                            </div>
                        </div>
                        <div>
                            <div class="lg:h-full py-8 px-6 text-gray-600 rounded-xl border border-gray-200 bg-white">
                                <svg class="w-40 m-auto" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M27.9985 2.84071C31.2849 2.84071 34.539 3.488 37.5752 4.74562C40.6113 6.00324 43.3701 7.84657 45.6938 10.1703C48.0176 12.4941 49.861 15.2529 51.1186 18.289C52.3762 21.3252 53.0235 24.5793 53.0235 27.8657C53.0235 31.152 52.3762 34.4061 51.1186 37.4423C49.861 40.4785 48.0176 43.2372 45.6938 45.561C43.3701 47.8848 40.6113 49.7281 37.5752 50.9857C34.539 52.2433 31.2849 52.8906 27.9985 52.8906C24.7122 52.8906 21.4581 52.2433 18.4219 50.9857C15.3857 49.7281 12.627 47.8848 10.3032 45.561C7.97943 43.2372 6.1361 40.4785 4.87848 37.4423C3.62086 34.4061 2.97357 31.152 2.97357 27.8657C2.97357 24.5793 3.62086 21.3252 4.87848 18.289C6.13611 15.2529 7.97943 12.4941 10.3032 10.1703C12.627 7.84656 15.3857 6.00324 18.4219 4.74562C21.4581 3.488 24.7122 2.84071 27.9985 2.84071L27.9985 2.84071Z" stroke="#e4e4f2" stroke-width="3"/>
                                    <path d="M27.301 2.50958C33.0386 2.35225 38.6614 4.13522 43.26 7.57004C47.8585 11.0049 51.1637 15.8907 52.641 21.437C54.1182 26.9834 53.6811 32.8659 51.4002 38.133C49.1194 43.4001 45.1283 47.7437 40.0726 50.4611C35.0169 53.1785 29.1923 54.1108 23.541 53.1071C17.8897 52.1034 12.7423 49.2225 8.93145 44.9305C5.12062 40.6384 2.86926 35.1861 2.54159 29.4558C2.21391 23.7254 3.82909 18.0521 7.12582 13.3536" stroke="url(#paint0_linear_622:13696)" stroke-width="5" stroke-linecap="round"/>
                                    <path d="M13.3279 30.7467C13.3912 29.48 13.8346 28.5047 14.6579 27.8207C15.4939 27.124 16.5896 26.7757 17.9449 26.7757C18.8696 26.7757 19.6612 26.9404 20.3199 27.2697C20.9786 27.5864 21.4726 28.0234 21.8019 28.5807C22.1439 29.1254 22.3149 29.746 22.3149 30.4427C22.3149 31.2407 22.1059 31.9184 21.6879 32.4757C21.2826 33.0204 20.7949 33.3877 20.2249 33.5777V33.6537C20.9596 33.8817 21.5296 34.287 21.9349 34.8697C22.3529 35.4524 22.5619 36.1997 22.5619 37.1117C22.5619 37.8717 22.3846 38.5494 22.0299 39.1447C21.6879 39.74 21.1749 40.2087 20.4909 40.5507C19.8196 40.88 19.0089 41.0447 18.0589 41.0447C16.6276 41.0447 15.4622 40.6837 14.5629 39.9617C13.6636 39.2397 13.1886 38.1757 13.1379 36.7697H15.7219C15.7472 37.3904 15.9562 37.8907 16.3489 38.2707C16.7542 38.638 17.3052 38.8217 18.0019 38.8217C18.6479 38.8217 19.1419 38.6444 19.4839 38.2897C19.8386 37.9224 20.0159 37.4537 20.0159 36.8837C20.0159 36.1237 19.7752 35.579 19.2939 35.2497C18.8126 34.9204 18.0652 34.7557 17.0519 34.7557H16.5009V32.5707H17.0519C18.8506 32.5707 19.7499 31.969 19.7499 30.7657C19.7499 30.221 19.5852 29.7967 19.2559 29.4927C18.9392 29.1887 18.4769 29.0367 17.8689 29.0367C17.2736 29.0367 16.8112 29.2014 16.4819 29.5307C16.1652 29.8474 15.9816 30.2527 15.9309 30.7467H13.3279ZM25.6499 37.9477C26.8659 36.9344 27.8349 36.092 28.5569 35.4207C29.2789 34.7367 29.8806 34.0274 30.3619 33.2927C30.8433 32.558 31.0839 31.836 31.0839 31.1267C31.0839 30.4807 30.9319 29.974 30.6279 29.6067C30.3239 29.2394 29.8553 29.0557 29.2219 29.0557C28.5886 29.0557 28.1009 29.271 27.7589 29.7017C27.4169 30.1197 27.2396 30.696 27.2269 31.4307H24.6429C24.6936 29.9107 25.1433 28.758 25.9919 27.9727C26.8533 27.1874 27.9426 26.7947 29.2599 26.7947C30.7039 26.7947 31.8123 27.181 32.5849 27.9537C33.3576 28.7137 33.7439 29.7207 33.7439 30.9747C33.7439 31.9627 33.4779 32.9064 32.9459 33.8057C32.4139 34.705 31.8059 35.4904 31.1219 36.1617C30.4379 36.8204 29.5449 37.6184 28.4429 38.5557H34.0479V40.7597H24.6619V38.7837L25.6499 37.9477Z" fill="currentColor"/>
                                    <path d="M36.1948 28.8842C36.1948 29.4438 36.2557 29.8634 36.3775 30.1432C36.4992 30.423 36.6967 30.5628 36.9699 30.5628C37.5097 30.5628 37.7796 30.0033 37.7796 28.8842C37.7796 27.7717 37.5097 27.2155 36.9699 27.2155C36.6967 27.2155 36.4992 27.3537 36.3775 27.6302C36.2557 27.9067 36.1948 28.3247 36.1948 28.8842ZM38.456 28.8842C38.456 29.6347 38.3293 30.2024 38.0758 30.5875C37.8257 30.9693 37.457 31.1602 36.9699 31.1602C36.5091 31.1602 36.1504 30.9644 35.8936 30.5727C35.6402 30.181 35.5135 29.6182 35.5135 28.8842C35.5135 28.1371 35.6352 27.5742 35.8788 27.1957C36.1257 26.8172 36.4894 26.6279 36.9699 26.6279C37.4472 26.6279 37.8142 26.8238 38.0709 27.2155C38.3276 27.6071 38.456 28.1634 38.456 28.8842ZM40.5395 31.7774C40.5395 32.3402 40.6003 32.7615 40.7221 33.0413C40.8439 33.3178 41.043 33.456 41.3195 33.456C41.596 33.456 41.8001 33.3194 41.9317 33.0462C42.0634 32.7697 42.1292 32.3468 42.1292 31.7774C42.1292 31.2145 42.0634 30.7982 41.9317 30.5283C41.8001 30.2551 41.596 30.1185 41.3195 30.1185C41.043 30.1185 40.8439 30.2551 40.7221 30.5283C40.6003 30.7982 40.5395 31.2145 40.5395 31.7774ZM42.8056 31.7774C42.8056 32.5245 42.6789 33.0906 42.4254 33.4757C42.1753 33.8575 41.8067 34.0484 41.3195 34.0484C40.8521 34.0484 40.4917 33.8526 40.2383 33.4609C39.9881 33.0693 39.8631 32.5081 39.8631 31.7774C39.8631 31.0302 39.9849 30.4674 40.2284 30.0889C40.4753 29.7104 40.839 29.5211 41.3195 29.5211C41.7869 29.5211 42.1506 29.7153 42.4106 30.1037C42.6739 30.4888 42.8056 31.0467 42.8056 31.7774ZM41.5318 26.7316L37.5278 33.9497H36.8021L40.8061 26.7316H41.5318Z" fill="white"/>
                                    <path d="M23.5776 18.4198H25.5424V22.8407H23.5776V18.4198ZM30.4545 16.455H32.4193V22.8407H30.4545V16.455ZM27.0161 13.5078H28.9809V22.8407H27.0161V13.5078Z" fill="#6A6A9F"/>
                                    <defs>
                                    <linearGradient id="paint0_linear_622:13696" x1="5.54791e-07" y1="42.0001" x2="54.6039" y2="41.9535" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#E323FF"/>
                                    <stop offset="1" stop-color="#7517F8"/>
                                    </linearGradient>
                                    </defs>
                                </svg>
                                <div class="mt-6">
                                    <h5 class="text-xl text-gray-700 text-center">Ask to customize</h5>
                                    <div class="mt-2 flex justify-center gap-4">
                                        <h3 class="text-3xl font-bold text-gray-700">28</h3>
                                        <div class="flex items-end gap-1 text-green-500">
                                            <svg class="w-3" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.00001 0L12 8H-3.05176e-05L6.00001 0Z" fill="currentColor"/>
                                            </svg>
                                            <span>2%</span>
                                        </div>
                                    </div>
                                    <span class="block text-center text-gray-500">Compared to last week 13</span>
                                </div>
                                <table class="mt-6 -mb-2 w-full text-gray-600">
                                    <tbody>
                                        <tr>
                                            <td class="py-2">Tailored ui</td>
                                            <td class="text-gray-500">896</td>
                                            <td>
                                                <svg class="w-16 ml-auto" viewBox="0 0 68 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect opacity="0.4" width="17" height="21" rx="1" fill="#e4e4f2"/>
                                                    <rect opacity="0.4" x="19" width="14" height="21" rx="1" fill="#e4e4f2"/>
                                                    <rect opacity="0.4" x="35" width="14" height="21" rx="1" fill="#e4e4f2"/>
                                                    <rect opacity="0.4" x="51" width="17" height="21" rx="1" fill="#e4e4f2"/>
                                                    <path d="M0 7C8.62687 7 7.61194 16 17.7612 16C27.9104 16 25.3731 9 34 9C42.6269 9 44.5157 5 51.2537 5C57.7936 5 59.3731 14.5 68 14.5" stroke="url(#paint0_linear_622:13631)" stroke-width="2" stroke-linejoin="round"/>
                                                    <defs>
                                                    <linearGradient id="paint0_linear_622:13631" x1="68" y1="7.74997" x2="1.69701" y2="8.10029" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#E323FF"/>
                                                    <stop offset="1" stop-color="#7517F8"/>
                                                    </linearGradient>
                                                    </defs>
                                                </svg>
                                            </td>   
                                        </tr>
                                        <tr>
                                            <td class="py-2">Customize</td>
                                            <td class="text-gray-500">1200</td>
                                            <td>
                                                <svg class="w-16 ml-auto" viewBox="0 0 68 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect opacity="0.4" width="17" height="21" rx="1" fill="#e4e4f2"/>
                                                    <rect opacity="0.4" x="19" width="14" height="21" rx="1" fill="#e4e4f2"/>
                                                    <rect opacity="0.4" x="35" width="14" height="21" rx="1" fill="#e4e4f2"/>
                                                    <rect opacity="0.4" x="51" width="17" height="21" rx="1" fill="#e4e4f2"/>
                                                    <path d="M0 12.929C8.69077 12.929 7.66833 9.47584 17.8928 9.47584C28.1172 9.47584 25.5611 15.9524 34.2519 15.9524C42.9426 15.9524 44.8455 10.929 51.6334 10.929C58.2217 10.929 59.3092 5 68 5" stroke="url(#paint0_linear_622:13640)" stroke-width="2" stroke-linejoin="round"/>
                                                    <defs>
                                                    <linearGradient id="paint0_linear_622:13640" x1="34" y1="5" x2="34" y2="15.9524" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#8AFF6C"/>
                                                    <stop offset="1" stop-color="#02C751"/>
                                                    </linearGradient>
                                                    </defs>
                                                </svg>
                                            </td>   
                                        </tr>
                                        <tr>
                                            <td class="py-2">Other</td>
                                            <td class="text-gray-500">12</td>
                                            <td>
                                                <svg class="w-16 ml-auto" viewBox="0 0 68 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect opacity="0.4" width="17" height="21" rx="1" fill="#e4e4f2"/>
                                                    <rect opacity="0.4" x="19" width="14" height="21" rx="1" fill="#e4e4f2"/>
                                                    <rect opacity="0.4" x="35" width="14" height="21" rx="1" fill="#e4e4f2"/>
                                                    <rect opacity="0.4" x="51" width="17" height="21" rx="1" fill="#e4e4f2"/>
                                                    <path d="M0 6C8.62687 6 6.85075 12.75 17 12.75C27.1493 12.75 25.3731 9 34 9C42.6269 9 42.262 13.875 49 13.875C55.5398 13.875 58.3731 6 67 6" stroke="url(#paint0_linear_622:13649)" stroke-width="2" stroke-linejoin="round"/>
                                                    <defs>
                                                    <linearGradient id="paint0_linear_622:13649" x1="67" y1="7.96873" x2="1.67368" y2="8.44377" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#FFD422"/>
                                                    <stop offset="1" stop-color="#FF7D05"/>
                                                    </linearGradient>
                                                    </defs>
                                                </svg>
                                            </td>   
                                        </tr>
                                    </tbody>
                                </table>   
                            </div>
                        </div>
                    </div>
                </div>
                  <!-- About Section -->
                  <div class="bg-white p-3 shadow-sm rounded-sm">
                      <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                          <span clas="text-green-500">
                              <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                  stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                          </span>
                          <span class="tracking-wide">About</span>
                      </div>
                      <div class="text-gray-700">
                          <div class="grid md:grid-cols-2 text-sm">
                              <div class="grid grid-cols-2">
                                  <div class="px-4 py-2 font-semibold">First Name</div>
                                  <div class="px-4 py-2">Jane</div>
                              </div>
                              <div class="grid grid-cols-2">
                                  <div class="px-4 py-2 font-semibold">Last Name</div>
                                  <div class="px-4 py-2">Doe</div>
                              </div>
                              <div class="grid grid-cols-2">
                                  <div class="px-4 py-2 font-semibold">Gender</div>
                                  <div class="px-4 py-2">Female</div>
                              </div>
                              <div class="grid grid-cols-2">
                                  <div class="px-4 py-2 font-semibold">Contact No.</div>
                                  <div class="px-4 py-2">+11 998001001</div>
                              </div>
                              <div class="grid grid-cols-2">
                                  <div class="px-4 py-2 font-semibold">Current Address</div>
                                  <div class="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
                              </div>
                              <div class="grid grid-cols-2">
                                  <div class="px-4 py-2 font-semibold">Permanant Address</div>
                                  <div class="px-4 py-2">Arlington Heights, IL, Illinois</div>
                              </div>
                              <div class="grid grid-cols-2">
                                  <div class="px-4 py-2 font-semibold">Email.</div>
                                  <div class="px-4 py-2">
                                      <a class="text-blue-800" href="mailto:jane@example.com">jane@example.com</a>
                                  </div>
                              </div>
                              <div class="grid grid-cols-2">
                                  <div class="px-4 py-2 font-semibold">Birthday</div>
                                  <div class="px-4 py-2">Feb 06, 1998</div>
                              </div>
                          </div>
                      </div>
                      <button
                          class="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">Show
                          Full Information</button>
                  </div>
                  <!-- End of about section -->
  
                  <div class="my-4"></div>
  
                  <!-- Experience and education -->
                  <div class="bg-white p-3 shadow-sm rounded-sm">
  
                      <div class="grid grid-cols-2">
                          <div>
                              <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                  <span clas="text-green-500">
                                      <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                          stroke="currentColor">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                      </svg>
                                  </span>
                                  <span class="tracking-wide">Experience</span>
                              </div>
                              <ul class="list-inside space-y-2">
                                  <li>
                                      <div class="text-teal-600">Owner at Her Company Inc.</div>
                                      <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                  </li>
                                  <li>
                                      <div class="text-teal-600">Owner at Her Company Inc.</div>
                                      <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                  </li>
                                  <li>
                                      <div class="text-teal-600">Owner at Her Company Inc.</div>
                                      <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                  </li>
                                  <li>
                                      <div class="text-teal-600">Owner at Her Company Inc.</div>
                                      <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                  </li>
                              </ul>
                          </div>
                          <div>
                              <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                  <span clas="text-green-500">
                                      <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                          stroke="currentColor">
                                          <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                                          <path fill="#fff"
                                              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                      </svg>
                                  </span>
                                  <span class="tracking-wide">Education</span>
                              </div>
                              <ul class="list-inside space-y-2">
                                  <li>
                                      <div class="text-teal-600">Masters Degree in Oxford</div>
                                      <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                  </li>
                                  <li>
                                      <div class="text-teal-600">Bachelors Degreen in LPU</div>
                                      <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                  </li>
                              </ul>
                          </div>
                      </div>
                      <!-- End of Experience and education grid -->
                  </div>
                  <!-- End of profile tab -->
              </div>
          </div>
      </div>
  </div>
    </template>
    