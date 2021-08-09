import { OptionsData } from '@/components/types'

export interface SendStatus {
  isSending: boolean
  isSent: boolean
  error: boolean
}

export interface FetchStatus {
  isFetching: boolean
  isFetched: boolean
  error: boolean
}

export interface LoanData {
  id?: string
  amount: number
  loanTerm: OptionsData
  loanType: OptionsData
  status: 'PENDING' | 'APPROVED' | 'COMPLETED'
  roi: number
  repaymentAmount: number
  periods: number
  completedPeriods: number
  repaidAmount: number
}
