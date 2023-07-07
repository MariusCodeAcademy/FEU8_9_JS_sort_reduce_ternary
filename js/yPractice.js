'use strict';
console.log('yPractice.js file was loaded');

const mixedArray = [
  'banana',
  'giraffe',
  true,
  true,
  42,
  false,
  'unicorn',
  7,
  'laughter',
  true,
  'and',
  null,
  3.14,
];

//
// parasyti koda kuris is sio masyvo
// sukurtu/grazintu kintamaji objekta
// kuris pasako kiek true ir kiek false
// reiksmiu yra siame masyve. pvz {taip: 2, ne: 1}

function yesOrNo() {
  let trueCount = 0;
  let falseCount = 0;

  // sukti cikla
  mixedArray.forEach((el) => {
    // ziureti ar reiksme boolean
    if (typeof el === 'boolean') {
      // taip tada ziureti ar true
      if (el === true) {
        // taip tai dedam prie obj.taip
        trueCount++;
      } else {
        // ne dedam prie obj.ne
        falseCount++;
      }
    }
  });
  console.log('trueCount ===', trueCount);
  console.log('falseCount ===', falseCount);
  // grazinti objekta
  let rezult = {
    taip: trueCount,
    ne: falseCount,
  };
  console.log('rezult ===', rezult);
  return rezult;
}
function yesOrNo2() {
  let rezult = {
    taip: 0,
    ne: 0,
  };
  // mixedArray.filter((el) => el === true);
  // sukti cikla
  mixedArray.forEach((el) => {
    if (typeof el === 'boolean') {
      // taip tada ziureti ar true
      if (el === true) {
        // taip tai dedam prie obj.taip
        rezult.taip++;
      } else {
        // ne dedam prie obj.ne
        rezult.ne++;
      }
    }
  });

  console.log('rezult ===', rezult);
  return rezult;
}
let rez = yesOrNo2();
console.log('rez ===', rez);
