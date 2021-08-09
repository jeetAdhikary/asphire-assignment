<template>
  <form
    @submit.prevent="onSubmitForm"
    class="h-full flex flex-col justify-between"
  >
    <div>
      <Input
        name="amount"
        placeholder="50000"
        label="Loan Amount"
        inputType="number"
        :fieldValue="amount"
        @onChange="onChange"
      />
      <Select
        name="loanType"
        :options="loanTypeOptions"
        :fieldValue="loanType"
        label="Loan Type"
        @onChange="onChange"
      >
      </Select>
      <Select
        name="loanTerm"
        :options="loanTermOptions"
        :fieldValue="loanTerm"
        label="Loan Term"
        @onChange="onChange"
      >
      </Select>
    </div>
    <div class="flex space-x-2 justify-end">
      <button
        type="button"
        class="bg-gray-300 text-gray-700 px-4 py-2 rounded font-medium text-sm"
        @click="onCloseModal"
      >
        Cancel
      </button>
      <button
        type="submit"
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
      >
        Apply
      </button>
    </div>
  </form>
</template>
<script>
import { computed, defineComponent, ref } from 'vue'
// import { OptionsData } from '@/components/types'
import { useStore } from '@/store'
import Input from '@/components/Input.vue'
import Select from '@/components/Select.vue'
export default defineComponent({
  components: {
    Input,
    Select,
  },
  setup(props, { emit }) {
    const store = useStore()
    const amount = computed(() => store.state.applyLoanStore.fields.amount)
    const loanType = computed(() => store.state.applyLoanStore.fields.loanType)
    const loanTerm = computed(() => store.state.applyLoanStore.fields.loanTerm)
    const status = computed(() => store.state.applyLoanStore.status)
    const loanTermOptions = ref([
      {
        label: '10 Weeks',
        value: '10',
      },
      {
        label: '20 Weeks',
        value: '20',
      },
      {
        label: '30 Weeks',
        value: '30',
      },
    ])
    const loanTypeOptions = ref([
      {
        label: 'Home Loan',
        value: 'home-loan',
      },
      {
        label: 'Student Loan',
        value: 'student-loan',
      },
      {
        label: 'Personal Loan',
        value: 'personal-loan',
      },
    ])
    const onChange = (payload) => {
      store.dispatch('applyLoanFieldUpdate', payload)
    }
    const onCloseModal = () => {
      emit('onCloseModal')
    }
    const onSubmitForm = async () => {
      console.log('on Submit')
      await store.dispatch('applyLoanSave')
      if (!status.value.error) {
        emit('onCloseModal')
        store.dispatch('fetchLoanList')
      }
    }
    return {
      amount,
      loanType,
      loanTerm,
      onChange,
      loanTermOptions,
      loanTypeOptions,
      onCloseModal,
      onSubmitForm,
      status,
    }
  },
})
</script>

<style></style>
