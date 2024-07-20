// Main file ...
const assert = require('assert')

const isVowel = require('./isVowel.test')

console.assert(isVowel('b'), "It's not a vowel");
console.assert(isVowel('a'), "It's a vowel");

console.log('------------------------');
console.log(assert);
console.log('------------------------');

// if (isVowel('b')) {
//     console.log('Its a vowel');
// } else {
//     console.log('Its not a vowel');
// }

// if (isVowel('a')) {
//     console.log('Its a vowel');
// } else {
//     console.log('Its not a vowel');
// }
