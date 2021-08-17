<template>
  <div class="w-full h-screen overflow-y-hidden">
    <div class="relative flex">
      <div class="w-full md:w-1/4 h-screen bg-darkBlue"></div>
      <div class="flex absolute inset-0">
        <div class="hidden md:block w-1/4 h-screen px-5">
          <div class="mt-5">
            <router-link to="/" class="block">
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
                <a
                  href="#"
                  class="
                    flex
                    space-x-3
                    text-white
                    my-10
                    items-center
                    hover:text-lightGreen
                  "
                  :class="{
                    'text-white': !item.active,
                    'text-lightGreen': item.active,
                  }"
                >
                  <component :is="item.icon" class="h-6 w-6" />
                  <span class="tab tab-home block text-lg">
                    {{ item.label }}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="overflow-y-scroll w-full md:w-3/4">
          <div class="max-w-5xl mx-auto mt-8 md:px-4">
            <div class="px-4 md:px-0">
              <div>
                <div class="flex justify-between mb-4 md:mb-0">
                  <h2 class="text-white md:text-gray-800 text-sm">
                    Account Balance
                  </h2>
                  <img class="md:hidden" src="/src/assets/Logo-s.svg" alt="" />
                </div>
                <div class="flex justify-between">
                  <div class="flex space-x-1 items-center">
                    <div
                      class="
                        rounded
                        bg-lightGreen
                        px-4
                        py-1
                        text-xs
                        font-medium
                        text-white
                        h-6
                      "
                    >
                      S$
                    </div>
                    <p class="text-white md:text-gray-800 text-lg font-bold">
                      3,000
                    </p>
                  </div>
                  <button
                    class="
                      flex
                      space-x-1
                      items-center
                      px-3
                      py-2
                      bg-transparent
                      text-accentBlue
                      md:bg-basicBlue md:text-white
                      rounded
                    "
                  >
                    <PlusCircleIcon class="h-4 w-4" />
                    <span class="text-sm font-medium">New card</span>
                  </button>
                </div>
              </div>
              <div class="mb-4 md:my-4">
                <ul class="flex space-x-5">
                  <li class="py-1 border-b-2 border-accentBlue cursor-pointer">
                    <span
                      class="text-sm font-semibold text-white md:text-gray-900"
                    >
                      My debit cards
                    </span>
                  </li>
                  <li class="py-1 cursor-pointer">
                    <span class="text-sm text-gray-300"> My debit cards </span>
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="
                flex
                md:flex-row
                flex-col
                max-w-5xl
                md:mx-auto md:my-8
                rounded-md
                md:shadow-card
                py-2
                md:p-5 md:space-x-8
              "
            >
              <div class="md:w-1/2 px-4 pb-4">
                <div class="flex justify-end my-2">
                  <div class="flex space-x-1 items-center">
                    <img
                      class="h-5 w-5"
                      src="/src/assets/remove_red_eye-24px.svg"
                      alt=""
                    />
                    <span class="text-lightGreen font-semibold text-xs">
                      Show card number
                    </span>
                  </div>
                </div>
                <div
                  class="
                    rounded-xl
                    bg-lightGreen
                    w-full
                    p-5
                    card-height
                    flex flex-col
                    h-full
                    justify-between
                  "
                >
                  <div class="flex justify-end">
                    <img class="h-5" src="/src/assets/logo-l.svg" alt="logo" />
                  </div>
                  <div class="my-4">
                    <h2 class="text-white text-2xl font-bold">Mark Henry</h2>
                  </div>
                  <div
                    class="
                      flex
                      space-x-4
                      text-white
                      tracking-wide
                      text-2xl
                      items-center
                      mb-4
                    "
                  >
                    <span> •••• </span>
                    <span> •••• </span>
                    <span> •••• </span>
                    <span class="text-sm font-bold leading-5 py-1"> 2020 </span>
                  </div>
                  <div class="flex text-white text-xs space-x-5">
                    <span class="flex space-x-1 items-center">
                      <span>Thru</span>
                      <span>12/20</span>
                    </span>
                    <span class="flex space-x-1 items-start">
                      <span class="leading-4">cvv</span>
                      <span class="text-xl leading-none font-bold">***</span>
                    </span>
                  </div>
                  <div class="flex justify-end">
                    <img alt="" src="/src/assets/visa-logo.svg" />
                  </div>
                </div>
                <div class="hidden md:block my-5">
                  <div class="py-5 px-2 rounded-t-2xl md:rounded-xl bg-blue-50">
                    <div class="grid grid-cols-5 text-center gap-1">
                      <div
                        v-for="item in quickCardIcons"
                        :key="item.label"
                        class="
                          flex flex-col
                          items-center
                          justify-start
                          space-y-2
                        "
                      >
                        <div class="p-2 flex">
                          <img class="h-8 w-8" :src="item.img" alt="" />
                        </div>
                        <p
                          class="
                            text-sm
                            font-medium
                            text-basicBlue
                            leading-normal
                          "
                        >
                          {{ item.label }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="
                  w-full
                  md:w-1/2
                  bg-white
                  rounded-t-2xl
                  md:rounded-none
                  mb-8
                  md:mb-0
                "
              >
                <div
                  class="
                    md:hidden
                    py-5
                    px-2
                    rounded-t-2xl
                    md:rounded-xl
                    bg-blue-50
                  "
                >
                  <div class="grid grid-cols-5 text-center gap-1">
                    <div
                      v-for="item in quickCardIcons"
                      :key="item.label"
                      class="flex flex-col items-center justify-start space-y-2"
                    >
                      <div class="p-2 flex">
                        <img class="h-8 w-8" :src="item.img" alt="" />
                      </div>
                      <p
                        class="
                          text-sm
                          font-medium
                          text-basicBlue
                          leading-normal
                        "
                      >
                        {{ item.label }}
                      </p>
                    </div>
                  </div>
                </div>

                <div class="px-4">
                  <div
                    class="border border-gray-100 rounded p-6 bg-blue-50 my-6"
                  >
                    <div class="flex justify-between items-center">
                      <div class="flex space-x-2 items-center">
                        <img
                          src="/src/assets/card-details.svg"
                          alt="logo"
                          aria-hidden="true"
                        />
                        <span class="text-sm text-darkBlue">Card Details</span>
                      </div>
                      <div class="rounded-full bg-gray-300">
                        <ChevronDownIcon class="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>
                  <div
                    class="
                      border border-gray-100
                      my-6
                      rounded
                      overflow-y-hidden
                    "
                  >
                    <div class="rounded p-6 bg-blue-50">
                      <div class="flex justify-between items-center">
                        <div class="flex space-x-2 items-center">
                          <img
                            src="/src/assets/recent-transaction.svg"
                            alt="logo"
                            aria-hidden="true"
                          />
                          <span class="text-sm text-darkBlue">
                            Recent Transaction
                          </span>
                        </div>
                        <div class="rounded-full bg-gray-300">
                          <ChevronUpIcon class="h-5 w-5 text-white" />
                        </div>
                      </div>
                    </div>
                    <ul class="p-6">
                      <li
                        v-for="item in recentTransaction"
                        :key="item.id"
                        class="border-b border-gray-200 py-3"
                      >
                        <div class="flex space-x-3">
                          <div
                            class="rounded-full p-4 min-h"
                            :class="[item.bg]"
                          >
                            <img class="h-4" :src="item.img" alt="" />
                          </div>
                          <div class="w-full">
                            <div class="w-full flex justify-between">
                              <span class="font-semibold text-gray-900">
                                Hamleys
                              </span>
                              <div class="flex items-center space-x-1">
                                <span
                                  class="font-bold"
                                  :class="{
                                    'text-gray-700': item.type === 'charge',
                                    'text-lightGreen': item.type === 'refund',
                                  }"
                                >
                                  {{ item.type === 'refund' ? '+' : '-' }} S$
                                  150
                                </span>
                                <ChevronRightIcon
                                  class="h-5 w-5 text-gray-300"
                                />
                              </div>
                            </div>
                            <p class="text-gray-300">20 May 2020</p>
                            <div class="flex space-x-2 items-center py-1">
                              <div class="bg-basicBlue rounded-lg p-2">
                                <img
                                  class="h-3"
                                  src="/src/assets/business-and-finance.svg"
                                  aria-hidden="true"
                                />
                              </div>
                              <span
                                class="font-md text-basicBlue font-semibold"
                              >
                                Refund on Debit Card
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div
                      class="
                        py-4
                        bg-green-50
                        flex
                        justify-center
                        items-center
                        text-center
                      "
                    >
                      <span class="font-semibold text-lightGreen">
                        View All card transactions
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section
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
        <a
          href="#"
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
          :class="{
            'text-gray-400': !item.active,
            'text-lightGreen': item.active,
          }"
        >
          <component :is="item.icon" class="h-6 w-6" />
          <span class="tab tab-home block text-xs">{{ item.label }}</span>
        </a>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { NavbarData } from '@/components/types'
import { defineComponent, ref, shallowRef } from 'vue'
import HomeIcon from '@/components/Logo/home.vue'
import CardIcon from '@/components/Logo/cardIco.vue'
import PaymentIcon from '@/components/Logo/payment.vue'
import Credit from '@/components/Logo/credit.vue'
import ProfileIcon from '@/components/Logo/profile.vue'
import loadAssets from '@/utils/assetLoad'
import {
  PlusCircleIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@heroicons/vue/solid'
export default defineComponent({
  components: {
    PlusCircleIcon,
    ChevronUpIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  },
  setup() {
    const navData = ref<Array<NavbarData>>([
      {
        name: 'home',
        icon: shallowRef(HomeIcon),
        label: 'Home',
      },
      {
        name: 'cards',
        icon: shallowRef(CardIcon),
        label: 'Cards',
        active: true,
      },
      {
        name: 'payments',
        icon: shallowRef(PaymentIcon),
        label: 'Payments',
      },
      {
        name: 'credit',
        icon: shallowRef(Credit),
        label: 'Credit',
      },
      {
        name: 'profile',
        icon: shallowRef(ProfileIcon),
        label: 'Profile',
      },
    ])
    const quickCardIcons = ref([
      {
        label: 'Freeze Card',
        img: loadAssets.freezeCard,
      },
      {
        label: 'Set Speed Limit',
        img: loadAssets.setLimit,
      },
      {
        label: 'Add to GPay',
        img: loadAssets.gpay,
      },
      {
        label: 'Replace Card',
        img: loadAssets.replaceCard,
      },
      {
        label: 'Cancel Card',
        img: loadAssets.deactivateCard,
      },
    ])
    const recentTransaction = ref([
      {
        id: 1,
        img: loadAssets.fileStore,
        type: 'refund',
        bg: 'bg-blue-50',
      },
      {
        id: 2,
        img: loadAssets.flights,
        type: 'charge',
        bg: 'bg-green-50',
      },
      {
        id: 3,
        img: loadAssets.megaphone,
        type: 'charge',
        bg: 'bg-red-50',
      },
      {
        id: 4,
        img: loadAssets.fileStore,
        type: 'refund',
        bg: 'bg-blue-50',
      },
    ])
    return {
      navData,
      quickCardIcons,
      recentTransaction,
    }
  },
})
</script>

<style lang="scss" scoped>
.card-height {
  max-height: 14rem;
}
.min-h {
  height: min-content;
}
</style>
