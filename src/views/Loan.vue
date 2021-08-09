<template>
  <div class="bg-darkBlue md:bg-white h-screen w-full py-3 px-2 md:px-10">
    <router-link to="/home" class="flex justify-end md:hidden">
      <img class="h-5 object-cover" src="/src/assets/asphire-logo.png" alt="" />
    </router-link>
    <div class="flex items-center space-x-2 mt-5">
      <div class="p-1 rounded bg-lightGreen">
        <CashIcon class="h-5 w-5 text-white" />
      </div>
      <h1 class="text-white md:text-gray-700 font-medium text-lg md:text-xl">
        Loan
      </h1>
    </div>
    <div
      class="
        flex
        md:flex-row
        flex-col
        md:mx-5 md:my-8 md:border md:border-gray-100
        shadow
        p-2
        md:p-5
      "
    >
      <div class="md:w-1/2">
        <div class="rounded-xl bg-lightGreen w-full p-3">
          <h2 class="text-white text-sm">Maximum Amount</h2>
          <h3 class="text-white font-semibold text-3xl mt-3">$50000</h3>
          <div class="flex justify-end">
            <button
              type="button"
              class="rounded-md border-2 border-white px-3 py-1 text-white"
              @click="openApplyLoanModal"
            >
              Apply now
            </button>
          </div>
        </div>
      </div>
      <div class="md:w-1/2">
        <div>
          <Accodion>
            <template v-slot:header>
              <span>Pending for Approval</span>
            </template>
          </Accodion>
        </div>
      </div>
    </div>
  </div>
  <Modal
    title="Apply New Loan"
    :isOpen="applyLoanModalIsOpen"
    @onClose="closeModal"
    dialogClass="h-96"
  >
    <LoanModal @onCloseModal="closeModal" />
  </Modal>
</template>
<script>
import { defineComponent, ref } from 'vue'
import { CashIcon } from '@heroicons/vue/solid'
import Modal from '@/components/Modal.vue'
import LoanModal from '@/loan/components/LoanModal.vue'
import Accodion from '@/components/Accordion.vue'
export default defineComponent({
  name: 'Loan',
  components: {
    CashIcon,
    Modal,
    LoanModal,
    Accodion,
  },
  setup() {
    const applyLoanModalIsOpen = ref(false)
    const closeModal = () => {
      applyLoanModalIsOpen.value = false
    }
    const openApplyLoanModal = () => {
      applyLoanModalIsOpen.value = true
    }
    return {
      applyLoanModalIsOpen,
      openApplyLoanModal,
      closeModal,
    }
  },
})
</script>

<style></style>
