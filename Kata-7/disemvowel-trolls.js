// Number: 11;
// Name: Disemvowel Trolls;
// Kata: 8 kyu;
// Url: https://www.codewars.com/kata/52fba66badcd10859f00097e;

///////////// v1 /////////////

function disemvowel(str) {
	return str.replace(/[aeiou]/gi, "");
}

console.log(disemvowel('This website is for losers LOL!'))