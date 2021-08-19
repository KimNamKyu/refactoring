//중첩된 레코드 캡슐화하기import { readJSON } from '../fileController.js'
import { readJSON } from '../fileController.js'
let customerData = readJSON('ch7/01-2.json')

class CustomerData {
  _data
  constructor(data) {
    this._data = data
  }
}
const getRawDataOfCoustomers = () => customerData
const setRawDataOfCustomers = (arg) => customerData = new CustomerData(arg)

export const writeData = (customerId, year, month, amount) => {
  getRawDataOfCoustomers()[customerId].usages[year][month] = amount
}

export const compareUsage = (customerId, laterYear, month) => {
  const later = getRawDataOfCoustomers()[customerId].usages[laterYear][month]
  const earlier = getRawDataOfCoustomers()[customerId].usages[laterYear - 1][month]
  return { laterAmount: later, change: later - earlier }
}
export const getCustomer = () => customerData
