/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ApplyLoanField } from '@/loan/store/types'
import { LoanData } from '@/types'
import { waitForDebugger } from 'inspector'
const ROI = 0.0025 // 13% yearly

export const roundToTwo = (num: number): number => {
  return +(Math.round(Number(num.toString() + 'e+2')).toString() + 'e-2')
}

export const generateLoanData = (data: ApplyLoanField): LoanData | void => {
  if (!data.loanTerm || !data.loanType) {
    return
  }
  const repayment = generateRepaymentAmount(data.amount, +data.loanTerm.value)
  return {
    amount: +data.amount,
    loanTerm: data.loanTerm,
    loanType: data.loanType,
    status: 'PENDING',
    roi: ROI,
    repaymentAmount: repayment,
    periods: +data.loanTerm.value,
    completedPeriods: 0,
    repaidAmount: 0,
  }
}

export const generateRepaymentAmount = (
  principal: number,
  period: number
): number => {
  console.log(ROI * ((1 + ROI) ^ period))
  console.log(((1 + ROI) ^ period) - 1)
  const repayment =
    ((ROI * Math.pow(1 + ROI, period)) / (Math.pow(1 + ROI, period) - 1)) *
    principal

  return +roundToTwo(repayment)
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const dataMassaging = (data: { [s: string]: unknown }) => {
  return Object.entries(data).map((item) => {
    return {
      id: item[0],
      ...(item[1] as LoanData),
    }
  })
}

export const repaymentDataMassaging = (data: LoanData): LoanData => {
  const completedPeriods = data.completedPeriods + 1
  return {
    ...data,
    repaidAmount: roundToTwo(data.repaidAmount + data.repaymentAmount),
    completedPeriods: completedPeriods,
    id: undefined,
    status: data.periods === completedPeriods ? 'COMPLETED' : data.status,
  }
}

export const wait = (time = 2000) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      return resolve()
    }, time)
  })
}
