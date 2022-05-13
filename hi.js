// console.log('hi')
//
// // 템플릿 리터럴 (Template literals)
// let shoesPrice = 200000
// console.log(`이 신발의 가격은 ${shoesPrice}원입니다`)
//
//
// console.log(2 + 1) // 3을 출력
// console.log(2 - 1) // 1을 출력
// console.log(4 / 2) // 2를 출력
// console.log(2 * 3) // 6을 출력
// console.log(10 % 3) // 나머지(remainder) 연산자. 1을 출력
// console.log(10 ** 2) // exponentiation. 10의 2승인 100을 출ㄹㅕㄱ
//
// let count = 1
// let preIncrement = ++count
// console.log(`count: ${count}, preIncrement: ${preIncrement}`) // count: 2, preIncrement: 2
//
// const shirtsPrice = 100000
// const pantsPrice = 80000
// let totalPrice = 0
//
// totalPrice += shirtsPrice // totalPrice = totalPrice + shirtsPrice 와 동일
// console.log(totalPrice)
// totalPrice += pantsPrice // totalPrice = totalPrice + pantsPrice 와 동일
// console.log(totalPrice)
//
// totalPrice -= shirtsPrice // totalPrice = totalPrice - shirtsPrice 와 동일
// console.log(totalPrice)
//
// console.log(1 === 1) // true
// console.log(1 === 2) // false
// console.log('Javascript' === 'Javascript') // true
// console.log('Javascript' === 'javascript') // false
//
// console.log(1 === "1") // false를 출력
// console.log(1 == "1") // true를 출력

let shoesPrice = 200000
const capPrice = 100000
const totalPrice = shoesPrice + capPrice

console.log(`총 ${totalPrice * 0.8}원에 물건을 구입합니다.`)