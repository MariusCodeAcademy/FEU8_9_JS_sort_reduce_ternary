'use strict';
console.log('sort.js file was loaded');

const points = [40, 100, 1, 5, 25, 10];
console.log('points ===', points);

points.sort();
console.log('points po sort ===', points);

points.sort((a, b) => b - a);
console.log('points po sort 2 ===', points);

// sort vidine funkcija turi grazinti teigiama, neigiam arba 0
// pagal tai reiksme keliauja i kaire desine arba pasilieka vietoj
points.sort((a, b) => {
  if (a < b) {
    return -1;
  } else if (b < a) {
    return 1;
  } else {
    return 0;
  }
});
console.log('points po sort 3 ===', points);
