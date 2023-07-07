'use strict';
console.log('reduce.js file was loaded');

const points = [40, 100, 1, 5, 25, 10];
console.log('points ===', points);

// array.reduce((total, currentValue, currentIndex, arr) => {}, initialValue)
// initialValue === total veiksmo pradzioje
// susumuoti points su foreach()
let total = 0;
points.map((sk) => {
  total = total + sk;
});
console.log('total ===', total);
console.log('total / points.length; ===', (total / points.length).toFixed(2));
// susumuoti points su reduce()

let reduceTotal = points.reduce((total, sk, i) => {
  let tarpSuma = total + sk;
  console.log(`ciklas: ${i}, total: ${total}, sk: ${sk}, suma: ${tarpSuma}`);
  return tarpSuma;
}, 0);
// let short = points.reduce((acc, sk) => acc + sk);
// console.log('short ===', short);
console.log('reduceTotal ===', reduceTotal);
let sampleArr = [1, 1, 1];
// 1/3 +  1/3 + 1/3 = 1
// 1 + 1 + 1 = 3
// 3 / 3 = 1
const avg1 = points.reduce((avg, sk) => {
  let dedamoji = sk / points.length;
  return avg + dedamoji;
}, 0);
console.log('avg1 ===', avg1.toFixed(2));

let colors = ['red', 'green', 'blue'];

const stringLis = colors.reduce((finalString, color) => {
  let colorString = `<li>${color}</li>`;
  // console.log('colorString ===', colorString);
  return finalString + colorString;
}, '');
console.log('stringLis ===', stringLis);
document.body.insertAdjacentHTML('afterbegin', stringLis);

const stringLis2 = colors
  .map((color) => `<li>${color}</li>`)
  .reverse()
  .join('');
console.log('stringLis2 ===', stringLis2);
