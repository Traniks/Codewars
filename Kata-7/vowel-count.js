// Number: 5;
// Name: Vowel Count;
// Kata: 8 kyu;
// Url: https://www.codewars.com/kata/54ff3102c1bad923760001f3;

///////////// v1 /////////////

function getCount(str) {
	return (str.match(/[aeiou]/g) || []).length
}

console.log(getCount("Vowels Count Tests"))