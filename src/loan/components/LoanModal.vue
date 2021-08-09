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
        :fieldValue="fieldValue"
        @onChange="onChange"
      />
      <Select
        name="loanTerm"
        :options="options"
        :fieldValue="filedValue2"
        label="Loan Term"
        @onChange="onChagneSelect"
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
import { defineComponent, ref } from 'vue'
// import { OptionsData } from '@/components/types'
import Input from '@/components/Input.vue'
import Select from '@/components/Select.vue'
export default defineComponent({
  components: {
    Input,
    Select,
  },
  setup(props, { emit }) {
    const fieldValue = ref('')
    const filedValue2 = ref('')
    const options = ref([
      {
        label: '10 Months',
        value: '10M',
      },
      {
        label: '20 Months',
        value: '20M',
      },
      {
        label: '30 Months',
        value: '30M',
      },
    ])
    const onChange = (payload) => {
      fieldValue.value = payload.value
    }
    const onChagneSelect = (payload) => {
      console.log(payload)
      filedValue2.value = payload.value
    }
    const onCloseModal = () => {
      emit('onCloseModal')
    }
    const onSubmitForm = () => {
      console.log('on Submit')
      emit('onCloseModal')
    }
    return {
      fieldValue,
      filedValue2,
      onChange,
      options,
      onChagneSelect,
      onCloseModal,
      onSubmitForm,
    }
  },
})
</script>

<style></style>
