<template>
  <div class="py-5 px-2 rounded-t-xl md:rounded-xl bg-blue-100">
    <div class="grid grid-cols-5 text-center gap-1">
      <div class="flex flex-col items-center justify-start space-y-2">
        <div class="p-2 flex w-min bg-basicBlue rounded-full">
          <SparklesIcon class="h-5 w-5 text-white" />
        </div>
        <p class="text-sm font-medium text-basicBlue">Special Offer</p>
      </div>
      <div class="flex flex-col items-center justify-start space-y-2">
        <div class="p-2 flex w-min bg-basicBlue rounded-full">
          <QrcodeIcon class="h-5 w-5 text-white" />
        </div>
        <p class="text-sm font-medium text-basicBlue">QR Code</p>
      </div>
      <div class="flex flex-col items-center justify-start space-y-2">
        <div class="p-2 flex w-min bg-white rounded-full">
          <ShieldCheckIcon class="h-5 w-5 text-lightGreen" />
        </div>
        <p class="text-sm font-medium text-basicBlue">Special Offer</p>
      </div>
      <div class="flex flex-col items-center justify-start space-y-2">
        <div class="p-2 flex w-min bg-basicBlue rounded-full">
          <SpeakerphoneIcon class="h-5 w-5 text-white" />
        </div>
        <p class="text-sm font-medium text-basicBlue">Notification</p>
      </div>
      <div class="flex flex-col items-center justify-start space-y-2">
        <div class="p-2 flex w-min bg-basicBlue rounded-full">
          <ShoppingCartIcon class="h-5 w-5 text-white" />
        </div>
        <p class="text-sm font-medium text-basicBlue">Loan Cart</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  SparklesIcon,
  QrcodeIcon,
  ShieldCheckIcon,
  SpeakerphoneIcon,
  ShoppingCartIcon,
} from '@heroicons/vue/solid'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    SparklesIcon,
    QrcodeIcon,
    ShieldCheckIcon,
    SpeakerphoneIcon,
    ShoppingCartIcon,
  },
})
</script>

<style></style>
