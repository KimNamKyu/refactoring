//클래스 추출하기
class Person {
  constructor() {
    this._telephoneNumber = new TelephoneNumber()
  }
  get name() { return this._name }
  set name(arg) { this._name = arg }
  get telephoneNumber() { return this._telephoneNumber.toString}
  get areaCode() { return this._telephoneNumber.areaCode }
  set areaCode(arg) { this._telephoneNumber.areaCode = arg }
  get number() { return this._telephoneNumber.number }
  set number(arg) { this._telephoneNumber.number = arg }
}

class TelephoneNumber {
  get areaCode() { return this._officeAreacCode }
  set areaCode(arg) { this._officeAreacCode = arg }
  get number() { return this._number }
  set number(arg) { this._number = arg }
  get toString() { return `(${this.areaCode}) ${this.number}`}
}
