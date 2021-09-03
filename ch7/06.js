class TrackingInformation {
  
}

class Shipment {
  _shippingCompany
  _trackingNumber
  get shippingCompany() {
    return this._shippingCompany
  }
  set shippingCompany(arg) {
    this._shippingCompany = arg
  }
  get trackingNumber() {
    return this._trackingNumber
  }
  set trackingNumber(arg) {
    this._trackingNumber = arg
  }
  get display() {
    return `${this.shippingCompany}: ${this.trackingNumber}`
  }
}

const client1 = () => {
  const aShipment = new Shipment()
  const vendor = { name: 'A-SHIP', number: '010-1234-5678' }
  aShipment.shippingCompany = vendor.name
  aShipment.trackingNumber = vendor.number
  return aShipment.display
}
console.log(client1())