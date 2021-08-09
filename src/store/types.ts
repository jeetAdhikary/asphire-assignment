import { ApplyLoanState, LoanListState } from '@/loan/store/types'

export default interface RootState {
  applyLoanStore: ApplyLoanState
  loanListsStore: LoanListState
}
