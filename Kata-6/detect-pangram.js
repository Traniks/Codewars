// Number: 6;
// Name: Detect Pangram;
// Kata: 6 kyu;
// Url: https://www.codewars.com/kata/545cedaa9943f7fe7b000048;

///////////// v1 /////////////

function isPangram(string) {
	const allSymbols = 'abcdefghijklmnopqrstuvwxyz'.split('')

	string = string.toLowerCase()
	return allSymbols.every(x => string.includes(x))
}

console.log(isPangram('The quick brown fox jumps over the lazy dog.'))
console.log(isPangram('This is not a pangram.'))