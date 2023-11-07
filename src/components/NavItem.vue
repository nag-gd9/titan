<script setup>
import {Disclosure, DisclosureButton, DisclosurePanel} from "@headlessui/vue";
import {ChevronDownIcon} from "@heroicons/vue/24/solid";
import { computed } from 'vue';
import { GeneralStore } from '@/stores';

const props = defineProps({
    item: Object,
});
 
const hasActiveChild = computed(() => {
  function hasActiveItem(items) {
    return items.some(item => item.active || hasActiveItem(item.children));
  }
 
  return hasActiveItem(props.item.children);
});

const general_store = GeneralStore()

</script>
<template >
  <router-link
    v-if="!item.children.length"
    :class="[
      'group flex w-full items-center rounded-md py-2 px-3 text-xs',
      'hover:bg-gray-100',
      item.active ? 'font-semibold text-gray-900' : 'font-medium text-gray-800',
    ]"
    :to="item.href" 
  >
    <component
      :class="[
        'mr-2 h-6 w-6 shrink-0 group-hover:text-lime-500',
        item.active ? 'text-lime-500' : 'text-gray-600',
      ]"
      :is="item.icon"
      v-if="item.icon"
      
    ></component>
    <span v-show="general_store.sidebarHover || general_store.sidebarOpened">{{ item.label }}</span>
  </router-link>
 
  <Disclosure
    v-else
    v-slot="{open}"
    :default-open="hasActiveChild"
    >
    <DisclosureButton 
      :class="[
        'group flex w-full items-center rounded-md py-2 px-3 text-left text-xs',
        'hover:bg-gray-100',
        open ? 'font-semibold text-lime-600' : 'font-medium text-gray-900',
      ]"
    >
      <component
        :class="[
          'mr-2 h-6 w-6 shrink-0 group-hover:text-lime-500',
          open ? 'text-lime-500' : 'text-gray-700',
          
        ]"
        :is="item.icon"
        v-if="item.icon"
      ></component>
      <span v-show="general_store.sidebarHover || general_store.sidebarOpened"
        :class="[
            'flex-1',
            
        ]"
        >{{ item.label }}</span>
      <ChevronDownIcon v-show="general_store.sidebarHover || general_store.sidebarOpened"
        :class="[
          'h-6 w-6 shrink-0',
          open ? '-rotate-180 text-lime-500' : 'text-gray-400',
        ]"
      />
    </DisclosureButton>
 
    <DisclosurePanel v-show="general_store.sidebarHover || general_store.sidebarOpened" class="ml-4 text-gray-400">
      <NavItem
        v-for="child in item.children"
        :item="child"
      />
    </DisclosurePanel>
  </Disclosure>
</template>