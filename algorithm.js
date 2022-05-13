// function solution(num) {
//     return num % 2 == 0? "Even" : "Odd"; // num % 2 ? "Odd" : "Even"
// }
// console.log(Number(true))

// process.stdin.setEncoding('utf8'); //표준입출력
// process.stdin.on('data', data => {
//     const n = data.split(" ");
//     const a = Number(n[0]), b = Number(n[1]);
//     for (let i = 0; i<b; i++){
//         let tmp = "";
//         for (let j = 0; j < a; j++) {
//             tmp = tmp + "*"
//         }
//         console.log(tmp)
//
//     }
// });

// process.stdin.setEncoding('utf8');
// process.stdin.on('data', data => {
//     const n = data.split(" ");
//     const a = Number(n[0]), b = Number(n[1]);
//     const row = '*'.repeat(a) * b
//     for(let i =0; i < b; i++){
//         console.log(row)
//     }
//
// });


// function solution(s) {
//     const half = s.length / 2
//     return s.length % 2 == 0 ? s.slice(half - 1, half + 1) : s.slice(half, half + 1)
// }
//
// console.log(solution('12345678'))

// function solution(a, b) {
//     return (a+b) * (Math.abs(a-b)+1)/2
// }
//
// console.log(solution(6,3))