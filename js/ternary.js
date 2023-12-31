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

const user1 = {
  name: 'James',
  town: 'London',
  gender: 'male',
};
const user2 = {
  name: 'Jess',
  town: 'Kaunas',
  gender: 'female',
};

// parasyti funkcija kuri ima obj kaip argumenta ir
// grazina sakini:
// James yra vyras is London

function getSentence(userObj) {
  let vyrArMot = userObj.gender === 'male' ? 'vyras' : 'moteris';
  let sent = `${userObj.name} yra ${vyrArMot} is ${userObj.town}`;
  console.log('sent ===', sent);
  return sent;
}
getSentence(user1);
getSentence(user2);

// jei amziu yra daugiau maziau 18 - vaikas
// jei amziu yra daugiau maziau 55 - sugauges
// jei amziu yra daugiau maziau 180 - isgyvenes
let age = 12;
// nested ternary operator (taip nedaryti bent pirmus metus)
let rezultAge = age < 18 ? 'vaikas' : age < 55 ? 'suauges' : 'isgyvenes';

console.log('rezultAge ===', rezultAge);
