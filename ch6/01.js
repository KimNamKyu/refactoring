//6-1.함수 추출하기
const printBanner = () => {
  console.log('*******************')
  console.log('*** 고 객 채 무 ***')
  console.log('*******************')
}

const printDetailes = (invoice, outstanding) => {
  console.log(`고객명 : ${invoice.customer}`)
  console.log(`채무액 : ${outstanding}`)
  console.log(`마감일 : ${invoice.dueDate.toLocaleDateString()}`)
}

const recordDueDate = (invoice) => { //마감일(dueDate)을 기록한다.
  const today = new Date()
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30)
}
const calculateOutstanding = (invoice) => {
  let result = 0  
  //미해결 채무(result)를 계산한다.
  for(const o of invoice.orders) {
    result += o.amount
  }
  return result
}
const printOwing = invoice => {
  printBanner()
  const outstanding = calculateOutstanding(invoice)
  recordDueDate(invoice)
  printDetailes(invoice, outstanding)    
}

printOwing({
  customer: 'southkyu',
  orders: [
    {name: '사채', amount: 100},
    {name: '대출', amount: 1000},
  ]
})






