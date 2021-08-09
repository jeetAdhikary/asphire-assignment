/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { LoanData } from '@/types'
import axios from 'axios'

const LOAN_URL = 'https://aspire-assignment-cee95-default-rtdb.firebaseio.com'

export const createLoan = (data: LoanData) => {
  return axios.post(`${LOAN_URL}/loans.json`, data)
}

export const fetchLoan = () => {
  return axios.get(`${LOAN_URL}/loans.json`)
}

export const recordRepaymentService = (docId: string, data: unknown) => {
  return axios.put(`${LOAN_URL}/loans/${docId}.json`, data)
}
