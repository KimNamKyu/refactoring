const createStateData = (invoice, plays) => {
  const playFor = aPerformance => plays[aPerformance.playID];
  //총액
  const totalAmount = (data) => data.performances.reduce((total, p) => total + p.amount, 0)
  //적립포인트
  const totalVolumnCredits = (data) => data.performances.reduce((total, p) => total + p.volumeCredits, 0)

  const enrichPerformance = aPerformance => {
    const calculator = createPerformanceCalculator(aPerformance, playFor(aPerformance));
    const result = {...aPerformance}
    result.play = calculator.play;
    result.amount = calculator.amount;
    result.volumeCredits = calculator.volumeCredits;
    return result
  }
  const statementData = {
    customer: invoice.customer,
    performances: invoice.performances.map(enrichPerformance),
  }
  statementData.totalAmount = totalAmount(statementData)
  statementData.totalVolumnCredits = totalVolumnCredits(statementData)
  return statementData
}
export default createStateData


//다형성
const createPerformanceCalculator = (aPerformance, aPlay) => {
  switch (aPlay.type) {
    case 'tragedy': return new TreagedyCalculator(aPerformance, aPlay);
    case 'comedy': return new ComedyCalculator(aPerformance, aPlay);
    default: throw new Error(`알 수 없는 장르: ${aPlay.type}`)
  }
}

class PerformanceCalculator{
  constructor(aPerformance, aPlay) {
    this.performance = aPerformance;
    this.play = aPlay;
  }

  get amount() {
    throw new Error(`서브클래스에서 처리하도록 설계되었습니다.`)
  }

  get volumeCredits() {
    Math.max(this.performance.audience - 30, 0)
  }
}

//서브클래스 (다형성)
class TreagedyCalculator extends PerformanceCalculator {
  get amount() {
    let result = 40000
    if (this.performance.audience > 30) 
      result += 1000 * (this.performance.audience - 30)
    return result;
  }
}
class ComedyCalculator extends PerformanceCalculator {
  get amount() {
    let result = 30000
    if (this.performance.audience > 20) result += 10000 + 500 * (this.performance.audience - 20)
    result += 300 * this.performance.audience
    
    return result;
  }
  get volumeCredits() {
    return super.volumeCredits + Math.floor(this.performance.audience / 5)
  }
}