'use strict';
console.log('ternary.js file was loaded');

let isAdmin = false;

let rezultString = '';

if (isAdmin === true) {
  rezultString = 'Sveiki Admin, prisijunge siandien';
} else {
  rezultString = 'Sveiki paprastas vartotojas, prisijunge siandien';
}

console.log('rezultString ===', rezultString);
// ternary operator
// condition ? exprIfTrue : exprIfFalse

let adminOrUser = isAdmin === true ? 'Admin' : 'Paprastas Vartotojas';
rezultString = `Sveiki ${adminOrUser}, prisijunge siandien`;
// rezultString = `Sveiki ${
//   isAdmin === true ? 'Admin' : 'Paprastas Vartotojas'
// }, prisijunge siandien`;
console.log('rezultString ===', rezultString);
