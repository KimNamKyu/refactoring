//단계 쪼개기
import { readJSON } from '../fileController.js'

const products = readJSON('ch6/11-products.json')
const shippingMethod = {
  discountFee: 0.1,
  feePerCase: 0.03,
  discountThreshold: 0.12,
}
const applyShipping = (priceData, shippingMethod) => {
  const shippingPerCase = priceData.basePrice > shippingMethod.discountThreshold ? shippingMethod.discountFee : shippingMethod.feePerCase
  const shippingCost = priceData.quantity * shippingPerCase
  return priceData.basePrice - priceData.discount + shippingCost
}

const calculatePricingData = (product, quantity) => {
  const basePrice = product.basePrice * quantity
  const discount = Math.max(quantity - product.discountThreshold, 0) * product.basePrice * product.discountRate
  return { basePrice: basePrice, quantity: quantity, discount: discount } //중간데이터구조
}

const priceOrder = (product, quantity, shippingMethod) => {
  const priceData = calculatePricingData(product, quantity)
  return applyShipping(priceData, shippingMethod)
}

products.forEach(product => {
  console.log(priceOrder(product, 10, shippingMethod))
})




