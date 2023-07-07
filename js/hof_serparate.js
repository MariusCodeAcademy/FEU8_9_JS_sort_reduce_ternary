'use strict';
console.log('hof.js file was loaded');

// higher order functions

const points = [40, 100, 1, 5, 25, 10];
const avg = [40, 100, 1, 5, 25, 10];
console.log('points ===', points);

// su vidine anoninme arrow funkcija
points.forEach((sk) => {
  console.log(sk);
});
// su isorine funkcija , rasom fn pavadinima be skliausteliu
// debugger;
points.forEach(printNums);

function printNums(num) {
  console.log('num ===', num);
}
// printNums(5);
