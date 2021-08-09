import { GetterTree, MutationTree, ActionTree } from 'vuex'
import RootState from '@/store/types'

import { ApplyLoanState, LoadFieldPayload } from './types'
import { createLoan } from '@/service'
import { generateLoanData } from '@/utils/loan'

type Getters = GetterTree<ApplyLoanState, RootState>
type Actions = ActionTree<ApplyLoanState, RootState>
type Mutations = MutationTree<ApplyLoanState>

const initialState: ApplyLoanState = {
  fields: {
    loanTerm: null,
    amount: 0,
    loanType: null,
  },
  status: {
    isSending: false,
    isSent: false,
    error: false,
  },
}
const state: ApplyLoanState = JSON.parse(JSON.stringify(initialState))

const getters: Getters = {}
const actions: Actions = {
  applyLoanFieldUpdate({ commit }, payload) {
    commit('APPLY_LOAN_FIELD_UPDATE', payload)
  },
  async applyLoanSave({ state, commit }) {
    commit('APPLY_LOAN_REQUEST')
    try {
      const requestPayload = generateLoanData(state.fields)
      if (requestPayload) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const res = await createLoan(requestPayload)
        console.log(requestPayload)
      }
      commit('APPLY_LOAN_SUCCESS')
    } catch (err) {
      commit('APPLY_LOAN_FAILURE')
    }
  },
}
const mutations: Mutations = {
  APPLY_LOAN_FIELD_UPDATE(state, payload: LoadFieldPayload) {
    state.fields[payload.name] = payload.value
  },
  APPLY_LOAN_REQUEST(state) {
    const { status } = state
    status.isSending = true
    status.isSent = false
    status.error = false
  },
  APPLY_LOAN_SUCCESS(state) {
    const { status } = state
    status.isSending = false
    status.isSent = true
    status.error = false
  },
  APPLY_LOAN_FAILURE(state) {
    const { status } = state
    status.isSending = false
    status.isSent = false
    status.error = true
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
