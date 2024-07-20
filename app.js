// Main file ...
const isVowel = require('./isVowel.test')

console.assert(isVowel('b'), "It's not a vowel");

// if (isVowel('b')) {
//     console.log('Its a vowel');
// } else {
//     console.log('Its not a vowel');
// }

if (isVowel('a')) {
    console.log('Its a vowel');
} else {
    console.log('Its not a vowel');
}
