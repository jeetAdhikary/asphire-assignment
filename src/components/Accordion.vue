<template>
  <div class="w-full px-2">
    <div class="w-full border rounded-md">
      <Disclosure v-slot="{ open }" :defaultOpen="true">
        <DisclosureButton
          class="
            flex
            justify-between
            w-full
            p-4
            text-sm
            font-medium
            text-left text-basicBlue
            bg-blue-50
            rounded-md
            hover:bg-blue-100
            focus:outline-none
            focus-visible:ring
            focus-visible:ring-purple-500
            focus-visible:ring-opacity-75
          "
        >
          <slot name="header"></slot>
          <div class="rounded-full bg-gray-300">
            <ChevronUpIcon
              :class="open ? 'transform rotate-180' : ''"
              class="w-5 h-5 text-white"
            />
          </div>
        </DisclosureButton>
        <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
          <div>
            <slot name="content"></slot>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronUpIcon } from '@heroicons/vue/solid'

export default defineComponent({
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    ChevronUpIcon,
  },
})
</script>
<style></style>
