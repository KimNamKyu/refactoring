// 6.8 매개변수 객체 만들기
const station = {
  name: 'ZB1',
  readings: [
    { temp: 47, time: '2016-11-10 09:10' },
    { temp: 53, time: '2016-11-10 09:20' },
    { temp: 58, time: '2016-11-10 09:30' },
    { temp: 53, time: '2016-11-10 09:40' },
    { temp: 51, time: '2016-11-10 09:50' },
  ],
}

class NumberRange {
  constructor(min, max) {
    this._data = {min: min, max: max}
    
  }
  get min() {return this._data.min}
  get max() {return this._data.max}
  constain(arg) {return (arg.temp >= this.min && arg.temp <= this.max)}
}

const operatingPlan = {
  temperatureFloor: 50,
  temperatureCeiling: 56,
}

const range = new NumberRange(operatingPlan.temperatureFloor, operatingPlan.temperatureCeiling)
const readingsOutsideRange = (station, range) => station.readings.filter(r => !range.constain(r))
console.log(readingsOutsideRange(station, range))


