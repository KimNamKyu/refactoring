//컬렉션 캡슐화하기
const COURSES = {
  korean: { basic: 'korean', advanced: 'korean advanced' },
  english: { basic: 'english', advanced: 'english advanced' },
  mathematics: { basic: 'mathematics', advanced: 'mathematics advanced' },
}

class Person {
  constructor(name) {
    this._name = name
    this._courses = []
  }
  get name() { return this.name }
  get course() { return this._courses }
  set course(aList) { this._courses = [...aList] }

  addCourse(aCourse) {
    this._courses.push(aCourse)
  }
  removeCourse(aCourse, fnIfAbsent = () => { throw new RangeError();}) {
    const index = this._courses.indexOf(aCourse)
    if(index === -1) fnIfAbsent()
    else this._courses.splice(index, 1)
  }
}

class Course {
  constructor(name, isAdvanced) {
    this._name = name
    this._isAdvanced = isAdvanced
  }
  get name() { return this._name }
  get isAdvanced() { return this._isAdvanced }
}

const readBasicCourseNames = filename => Object.values(filename).map(c => c.basic)
const client1 = () => {
  const aPerson = new Person('testFunc')
  const basicCourseNames = readBasicCourseNames(COURSES)
  aPerson.course = basicCourseNames.map(name => new Course(name, false))
  aPerson.addCourse(new Course('qwer', false))
  return aPerson
}

console.log(client1())