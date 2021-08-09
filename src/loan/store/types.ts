import { OptionsData } from '@/components/types'
import { FetchStatus, LoanData, SendStatus } from '@/types'

export interface ApplyLoanState {
  fields: ApplyLoanField
  status: SendStatus
}

export interface ApplyLoanField {
  amount: number
  loanTerm: OptionsData | null
  loanType: OptionsData | null
}

export interface LoanListState {
  fetchStatus: FetchStatus
  lists: Array<LoanData>
  sendStatus: SendStatus
}
