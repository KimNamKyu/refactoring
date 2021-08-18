
/**
 * 6.2 함수 인라인하기
 * 1. 다형 메서드인지 확인 -> 서브클래스에서 오버라이드하는 메서드는 인라인하면 안된다.
 * 2. 인라인할 함수를 호출하는 곳을 모두 찾는다.
 * 3. 각 호출문을 함수 본문으로 교체한다. 
 * 4. 하나씩 교체할 때마다 테스트
 * 5. 함수 정의(원래 함수)를 삭제한다.
 */
// const moreThanFiveLateDeliveries = (aDriver) => aDriver.numberOfLateDeliveries > 5
const rating = (aDriver) => (aDriver.numberOfLateDeliveries > 5 ? 2 : 1)

const DriverA = { name: 'A', numberOfLateDeliveries: 10 }
const DriverB = { name: 'B', numberOfLateDeliveries: 3 }

console.log(DriverA.name, rating(DriverA))
console.log(DriverB.name, rating(DriverB))