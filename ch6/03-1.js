/**
 * 6.3 변수 추출하기
 */
 const price = order => {
   const basePrice = order.quantity * order.itemPrice;
   const quantityDiscount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05
   const shopping = Math.min(basePrice * 0.1, 100)
  return (
    basePrice - quantityDiscount + shopping
  )
}

const orderA = {
  itemPrice: 600,
  quantity: 3,
}
const orderB = {
  itemPrice: 8000,
  quantity: 2,
}

console.log(price(orderA))
console.log(price(orderB))