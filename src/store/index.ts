import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import applyLoanStore from '@/loan/store/applyLoanStore'
import loanListsStore from '@/loan/store/loanListsStore'
import RootState from './types'

export const key: InjectionKey<Store<RootState>> = Symbol()

export const store = createStore({
  modules: {
    applyLoanStore,
    loanListsStore,
  },
})

export const useStore = (): Store<RootState> => {
  return baseUseStore(key)
}
