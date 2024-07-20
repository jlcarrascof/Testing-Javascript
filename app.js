// Main file ...
const assert = require('assert');

const isVowel = require('./isVowel.test');

console.assert(isVowel('e'), "It's not a vowel");
console.assert(isVowel('a'), "It's a vowel");

try {
    assert.ok(isVowel('e'));
    assert.equal(isVowel('e'), false)
} catch (error) {
    console.log(error.message);
}
