<template>
  <div class="w-full h-screen">
    <div id="side-navigation" class="flex">
      <aside class="hidden md:block w-1/4 h-screen bg-darkBlue px-5">
        <div class="mt-5">
          <router-link to="/home" class="block">
            <img
              class="h-10 object-cover"
              src="/src/assets/asphire-logo.png"
              alt=""
            />
          </router-link>
          <div class="leading-tight text-gray-500 mt-3">
            <span class="block">
              Trusted the way of banking for 3,000+ SMEs and startups in
              Singapore.
            </span>
          </div>
        </div>
        <div>
          <ul class="mt-20 sidebar-nav">
            <li v-for="item in navData" :key="item.name">
              <router-link
                :to="item.routerLink"
                class="
                  flex
                  space-x-3
                  text-white
                  my-10
                  items-center
                  hover:text-lightGreen
                "
              >
                <component :is="item.icon" class="h-8 w-8" />
                <span class="tab tab-home block text-lg">{{ item.label }}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </aside>
      <slot></slot>
    </div>
    <section
      id="bottom-navigation"
      class="
        block
        md:hidden
        fixed
        inset-x-0
        bottom-0
        z-10
        bg-white
        shadow-md
        border border-gray-200
      "
    >
      <div id="tabs" class="flex justify-between">
        <router-link
          :to="item.routerLink"
          v-for="item in navData"
          :key="item.name"
          class="
            w-full
            text-gray-400
            flex flex-col
            justify-center
            items-center
            text-center
            pt-2
            pb-1
          "
        >
          <component :is="item.icon" class="h-6 w-6" />
          <span class="tab tab-home block text-xs">{{ item.label }}</span>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { NavbarData } from './types'
import {
  UserIcon,
  CashIcon,
  HomeIcon,
  ArrowCircleUpIcon,
} from '@heroicons/vue/solid'
export default defineComponent({
  name: 'NavBar',
  setup(_, ctx) {
    const navData = ref<Array<NavbarData>>([
      {
        name: 'home',
        icon: HomeIcon,
        label: 'Home',
        routerLink: '/',
      },
      {
        name: 'loan',
        icon: CashIcon,
        label: 'Loan',
        routerLink: '/loan',
      },
      {
        name: 'status',
        icon: ArrowCircleUpIcon,
        label: 'Status',
        routerLink: '/status',
      },
      {
        name: 'settings',
        icon: UserIcon,
        label: 'Settings',
        routerLink: '/setting',
      },
    ])
    return {
      navData,
    }
  },
})
</script>

<style lang="scss">
#bottom-navigation,
.sidebar-nav {
  .router-link-active {
    @apply text-lightGreen font-medium;
  }
}
</style>
