<template>
  <Navbar>
    <div class="overflow-y-scroll w-full">
      <div class="bg-darkBlue md:bg-white h-screen w-full py-3 md:px-10">
        <router-link to="/" class="flex justify-end md:hidden">
          <img
            class="h-5 object-cover"
            src="/src/assets/asphire-logo.png"
            alt=""
          />
        </router-link>
        <div class="flex items-center space-x-2 p-2 mt-5 mb-3">
          <div class="p-1 rounded bg-lightGreen">
            <CashIcon class="h-5 w-5 text-white" />
          </div>
          <h1
            class="text-white md:text-gray-700 font-medium text-lg md:text-xl"
          >
            Loan
          </h1>
        </div>
        <div
          class="
            flex
            md:flex-row
            flex-col
            container
            md:mx-auto md:my-8 md:border md:border-gray-100
            shadow
            py-2
            md:p-5 md:space-x-8
          "
        >
          <div class="md:w-1/2 px-2">
            <div
              class="
                rounded-xl
                bg-lightGreen
                w-full
                p-3
                card-height
                flex flex-col
                h-full
                justify-between
              "
            >
              <div>
                <h2 class="text-white text-sm">Maximum Amount</h2>
                <h3 class="text-white font-semibold text-3xl mt-3">$50000</h3>
              </div>
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
            <div class="hidden md:block my-5">
              <Card />
            </div>
          </div>
          <div
            class="
              md:w-1/2
              mt-4
              md:mt-0
              bg-white
              rounded-t-lg
              md:rounded-t-none
            "
          >
            <div class="md:hidden mb-3">
              <Card />
            </div>
            <template v-if="fetchStatus.isFetched">
              <div class="pb-5">
                <Accodion>
                  <template v-slot:header>
                    <span>Pending for Approval</span>
                  </template>
                  <template v-slot:content>
                    <ul class="divide-y divide-gray-200">
                      <li
                        v-for="item in pendingLoans"
                        :key="item.id"
                        class="px-3 py-4 flex space-x-2"
                      >
                        <div>
                          <template v-if="item.loanType.value === 'home-loan'">
                            <div class="p-2 rounded-full bg-blue-50">
                              <HomeIcon class="text-blue-400 h-6 w-6" />
                            </div>
                          </template>
                          <template
                            v-else-if="item.loanType.value === 'student-loan'"
                          >
                            <div class="p-2 rounded-full bg-green-50">
                              <AcademicCapIcon class="text-green-400 h-6 w-6" />
                            </div>
                          </template>
                          <template v-else>
                            <div class="p-2 rounded-full bg-red-50">
                              <UserIcon class="text-red-400 h-6 w-6" />
                            </div>
                          </template>
                        </div>
                        <div class="flex justify-between w-full">
                          <div>
                            <p class="font-medium text-base text-gray-600">
                              {{ item.loanType.label }}
                            </p>
                            <p>{{ item.loanTerm.label }}</p>
                          </div>
                          <div class="flex items-center space-x-2">
                            <span
                              class="font-semibold text-lightGreen text-base"
                            >
                              ${{ item.amount }}
                            </span>
                            <span>
                              <ChevronRightIcon class="h-5 w-5 text-gray-300" />
                            </span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </template>
                </Accodion>
              </div>
              <div>
                <Accodion>
                  <template v-slot:header>
                    <span>Loan Repayment</span>
                  </template>
                  <template v-slot:content>
                    <ul class="divide-y divide-gray-200 bg-white">
                      <li
                        v-for="item in approvedLoans"
                        :key="item.id"
                        class="px-3 py-4"
                      >
                        <div class="flex space-x-2">
                          <div>
                            <template
                              v-if="item.loanType.value === 'home-loan'"
                            >
                              <div class="p-2 rounded-full bg-blue-50">
                                <HomeIcon class="text-blue-400 h-6 w-6" />
                              </div>
                            </template>
                            <template
                              v-else-if="item.loanType.value === 'student-loan'"
                            >
                              <div class="p-2 rounded-full bg-green-50">
                                <AcademicCapIcon
                                  class="text-green-400 h-6 w-6"
                                />
                              </div>
                            </template>
                            <template v-else>
                              <div class="p-2 rounded-full bg-red-50">
                                <UserIcon class="text-red-400 h-6 w-6" />
                              </div>
                            </template>
                          </div>
                          <div class="flex justify-between w-full">
                            <div>
                              <p class="font-medium text-base text-gray-600">
                                {{ item.loanType.label }}
                              </p>
                              <p>{{ item.loanTerm.label }}</p>
                            </div>
                            <div class="flex items-center space-x-2">
                              <span
                                class="font-semibold text-lightGreen text-base"
                              >
                                ${{ item.amount }}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="flex justify-between items-center py-3">
                          <div>
                            <dl class="flex space-x-1 text-gray-700">
                              <dt>Repayment Amount:</dt>
                              <dd class="font-medium">
                                ${{ item.repaymentAmount }}
                              </dd>
                            </dl>
                            <dl class="flex space-x-1 text-gray-700">
                              <dt>Completed:</dt>
                              <dd class="font-medium">
                                {{ item.repaidAmount }}
                              </dd>
                            </dl>
                          </div>
                          <button
                            class="
                              flex
                              space-x-3
                              items-center
                              text-basicBlue
                              bg-gray-100
                              px-3
                              py-2
                              rounded
                              hover:bg-gray-50
                            "
                            @click="openApplyRepaymentModal(item)"
                          >
                            <CashIcon class="h-5 w-5" />
                            Repayment
                          </button>
                        </div>
                      </li>
                    </ul>
                  </template>
                </Accodion>
              </div>
            </template>
          </div>
        </div>
      </div>
      <Modal
        title="Apply New Loan"
        :isOpen="applyLoanModalIsOpen"
        @onClose="closeModal"
        dialogClass="modal-h-xl"
      >
        <LoanModal @onCloseModal="closeModal" />
      </Modal>
      <Modal
        title="Reocrd Repayment"
        :isOpen="recordRepaymentModalOpen"
        @onClose="closeRepaymentModal"
      >
        <div class="text-center">
          <p class="leading-relaxed my-3">
            Please conform Repayment for The Loan
          </p>
          <div class="flex justify-center space-x-2">
            <button
              type="button"
              class="
                bg-gray-300
                text-gray-700
                px-4
                py-2
                rounded
                font-medium
                text-sm
              "
              @click="closeRepaymentModal"
            >
              Cancel
            </button>
            <button
              class="
                bg-basicBlue
                px-4
                py-2
                rounded
                text-white
                font-medium
                text-sm
                hover:opacity-90
                focus:opacity-90
              "
              @click="submitRepayment"
            >
              Apply
            </button>
          </div>
        </div>
      </Modal>
    </div>
  </Navbar>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, computed } from 'vue'
import { LoanData } from '@/types'
import {
  CashIcon,
  AcademicCapIcon,
  HomeIcon,
  UserIcon,
  ChevronRightIcon,
} from '@heroicons/vue/solid'
import Modal from '@/components/Modal.vue'
import LoanModal from '@/loan/components/LoanModal.vue'
import Accodion from '@/components/Accordion.vue'
import Card from '@/components/Card.vue'
import Navbar from '@/components/NavBar.vue'
import { useStore } from '@/store'
export default defineComponent({
  name: 'Loan',
  components: {
    CashIcon,
    Modal,
    LoanModal,
    Accodion,
    AcademicCapIcon,
    HomeIcon,
    UserIcon,
    ChevronRightIcon,
    Card,
    Navbar,
  },
  setup() {
    const store = useStore()
    const applyLoanModalIsOpen = ref(false)
    const recordRepaymentModalOpen = ref(false)
    const selectedLoan = ref<LoanData | null>(null)
    const pendingLoans = computed(() =>
      store.state.loanListsStore.lists.filter(
        (item) => item.status === 'PENDING'
      )
    )
    const approvedLoans = computed(() =>
      store.state.loanListsStore.lists.filter(
        (item) => item.status === 'APPROVED'
      )
    )
    const repaymentSendStatus = computed(
      () => store.state.loanListsStore.sendStatus
    )
    const fetchStatus = computed(() => store.state.loanListsStore.fetchStatus)
    const closeModal = () => {
      applyLoanModalIsOpen.value = false
    }
    const closeRepaymentModal = () => {
      recordRepaymentModalOpen.value = false
    }
    const submitRepayment = async () => {
      store.dispatch('recordRepayment', selectedLoan.value).then(() => {
        if (!repaymentSendStatus.value.error) {
          closeRepaymentModal()
          store.dispatch('fetchLoanList')
        }
      })
    }
    const openApplyLoanModal = () => {
      applyLoanModalIsOpen.value = true
    }
    const openApplyRepaymentModal = (item: LoanData) => {
      recordRepaymentModalOpen.value = true
      selectedLoan.value = item
    }
    onMounted(() => {
      store.dispatch('fetchLoanList')
    })
    return {
      applyLoanModalIsOpen,
      openApplyLoanModal,
      closeModal,
      pendingLoans,
      approvedLoans,
      recordRepaymentModalOpen,
      closeRepaymentModal,
      openApplyRepaymentModal,
      submitRepayment,
      fetchStatus,
    }
  },
})
</script>

<style lang="scss">
.card-height {
  max-height: 12rem;
}
</style>
