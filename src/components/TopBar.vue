<template>
  <div id="topbar" 
    class="sticky top-0 min-h-8 h-8 backdrop-opacity-10 backdrop-invert bg-white/80 shadow-2xl flex items-center justify-between px-3 md:px-2 space-x-3 md:space-x-6 border-b"
  >
    <div class="flex items-center flex-1">
      <button
        @click="general_store.sidebarOpened = true"
        class="mr-3 md:hidden flex-none flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full text-red-600 hover:ring-2 hover:ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600"
        type="button"
        value="Open sidebar"
      >
        <Bars3BottomLeftIcon class="h-5 w-5" />
      </button>
      <AcademicCapIcon class="w-6 h-6 bg-green-500 rounded-full" />
      <div class="pl-1 text-xs font-bold">{{title}}</div>
    </div>
    
    <Menu  as="div" class="relative flex-shrink-0">
      <MenuButton 
        class="rounded-ful focus:scale-105"
      >
        <img
          class="inline w-7 h-7 rounded-full"
          src="https://pbs.twimg.com/profile_images/1333896976602193922/MtWztkxt_400x400.jpg"
          alt=""
        />
      </MenuButton>

      <transition
        enter-active-class="transition duration-100 ease-out transform"
        enter-from-class="opacity-0 scale-90"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition duration-100 ease-in transform"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-90"
      >
        <MenuItems 
          class="overflow-hidden absolute right-0 mt-2 w-48 bg-white rounded-md border shadow-lg origin-top-right focus:outline-none"
        >
          <MenuItem v-slot="{ active }">
            <a
              href="#"
              :class="{ 'bg-gray-100': active }"
              class="block py-2 px-4 text-sm text-gray-700"
              >My Profile</a
            >
          </MenuItem>
          <MenuItem v-slot="{ active, disabled }" disabled>
            <a
              href="#"
              :class="{ 'bg-gray-100': active, 'opacity-40': disabled }"
              class="block py-2 px-4 text-sm text-gray-700"
              >Settings</a
            >
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a
              href="/help"
              :class="{ 'bg-gray-100': active }"
              class="block py-2 px-4 text-sm text-gray-700"
              >Help</a
            >
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a
              href="/account/logout"
              :class="{ 'bg-gray-100': active }"
              class="block py-2 px-4 text-sm text-gray-700"
              >Log out</a
            >
          </MenuItem>
        </MenuItems>
      </transition>
    </Menu>
    
  </div>
  <div id="myBar" class="w-full h-[2px] bg-cover bg-center bg-[url('@/assets/top-colored-bar.jpg')]"></div>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import {
  Bars3BottomLeftIcon,
  AcademicCapIcon,
} from "@heroicons/vue/24/solid/index.js";
import { GeneralStore, AUTH } from "@/stores";

const general_store = GeneralStore();
const user = AUTH();

const title = import.meta.env.VITE_APP_TITLE;


</script>
<script>
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("topbar").style.top = "0";
  } else {
    document.getElementById("topbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
</script>