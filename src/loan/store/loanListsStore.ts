import { GetterTree, MutationTree, ActionTree } from 'vuex'
import RootState from '@/store/types'

import { LoanListState } from './types'
import { LoanData } from '@/types'
import { fetchLoan, recordRepaymentService } from '@/service'
import { dataMassaging, repaymentDataMassaging } from '@/utils/loan'

type Getters = GetterTree<LoanListState, RootState>
type Actions = ActionTree<LoanListState, RootState>
type Mutations = MutationTree<LoanListState>

const initialState: LoanListState = {
  fetchStatus: {
    isFetched: false,
    isFetching: false,
    error: false,
  },
  sendStatus: {
    isSending: false,
    isSent: false,
    error: false,
  },
  lists: [],
}
const state: LoanListState = JSON.parse(JSON.stringify(initialState))

const getters: Getters = {
  pendingLoans(state) {
    return state.lists.filter((item) => {
      return item.status === 'PENDING'
    })
  },
  approvedLoans() {
    return state.lists.filter((item) => {
      return item.status === 'APPROVED'
    })
  },
}
const actions: Actions = {
  async fetchLoanList({ commit }) {
    commit('FETCH_LOAN_LIST_REQUEST')
    try {
      const res = await fetchLoan()
      const data = dataMassaging(res.data)
      commit('FETCH_LOAN_LIST_SUCCESS', data)
    } catch (err) {
      commit('FETCH_LOAN_LIST_ERROR')
    }
  },
  async recordRepayment({ commit }, payload: LoanData) {
    if (!payload.id) {
      return
    }
    commit('REPAYMENT_LOAN_REQUEST')
    try {
      const requestPayload = repaymentDataMassaging(payload)
      const res = await recordRepaymentService(payload.id, requestPayload)
      commit('REPAYMENT_LOAN_SUCCESS')
    } catch (err) {
      commit('REPAYMENT_LOAN_FAILURE')
    }
  },
}
const mutations: Mutations = {
  FETCH_LOAN_LIST_REQUEST(state) {
    const { fetchStatus } = state
    fetchStatus.isFetching = true
    fetchStatus.isFetched = false
    fetchStatus.error = false
    state.lists = []
  },
  FETCH_LOAN_LIST_SUCCESS(state, payload: LoanData[]) {
    const { fetchStatus } = state
    fetchStatus.isFetching = false
    fetchStatus.isFetched = true
    fetchStatus.error = false
    state.lists = payload
  },
  FETCH_LOAN_LIST_ERROR(state) {
    const { fetchStatus } = state
    fetchStatus.isFetching = false
    fetchStatus.isFetched = false
    fetchStatus.error = true
  },
  REPAYMENT_LOAN_REQUEST(state) {
    const { sendStatus } = state
    sendStatus.isSending = true
    sendStatus.isSent = false
    sendStatus.error = false
  },
  REPAYMENT_LOAN_SUCCESS(state) {
    const { sendStatus } = state
    sendStatus.isSending = false
    sendStatus.isSent = true
    sendStatus.error = false
  },
  REPAYMENT_LOAN_FAILURE(state) {
    const { sendStatus } = state
    sendStatus.isSending = false
    sendStatus.isSent = false
    sendStatus.error = true
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
