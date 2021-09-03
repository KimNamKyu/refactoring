//기본형을 객체로 바꾸기
class Order {
  constructor(data) {
    this.priority = data.priority;
  }

  //변수 캡슐화 getter 만들기
  get priority() { return this._priority }
  get priorityString() {return this._priority.toString()}
  set priority(aString) { this._priority = new Priority(aString)}
}

class Priority {
  static legalValues() {
    return ['low', 'normal', 'high', 'rush']
  }
  constructor(value) { 
    if(value instanceof Priority) return value;
    if(Priority.legalValues().includes(value)) this._value = value
    else throw new Error(`<${value}는 유효하지 않은 우선순위입니다.`)
   }
   toString() { return this._value }
   get _index() {return Priority.legalValues().findIndex(s => s === this._value)}
   static(other) { return this._index === other._index}
   higherThan(other) {return this._index > other._index}
   lowerThan(other) { return this._index < other._index}
}

const client1 = () => {
  const order = [
    {priority: 'high'}, 
    {priority: 'rush'}, 
    {priority: 'low'}, 
    { priority: 'normal'}
  ].map(o => new Order(o))

  const highPriorityCount = order.filter(o => o.priority.higherThan(new Priority('normal'))).length
  return highPriorityCount
}

console.log(client1())