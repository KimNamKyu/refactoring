//레코드 캡슐화하기
class Organization {
  #name
  #country
  constructor(data) {
    this.#name = data.name
    this.#country = data.country
  }
  set name(aString) {
    this.#name = aString
  }
  get name() { return this.#name }

  set country(aCountryCode) {
    this.#country = aCountryCode
  }
  get country() { return this.#country }
}
let result = ''
const organization = new Organization({ name: '애크미 구스베리', country: 'GB' })

const getOrganization = () => {return organization}
getOrganization().name = '애그머니 블루베리'
result += `<h1>${getOrganization().name}</h1>`


console.log(result)