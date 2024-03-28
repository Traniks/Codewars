// Number: 14;
// Name: Roman Numerals Encoder;
// Kata: 6 kyu;
// Url: https://www.codewars.com/kata/51b62bf6a9c58071c600001b/javascript;

///////////// v1 /////////////

function toRoman(num) {
    const romanNumerals = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
    ];

    let result = '';

    romanNumerals.forEach(({ value, symbol }) => {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    });

    return result;
}

///////////// v2 /////////////

function solution(num) {
	const romanNumerals = {
		"M": 1000,
		"CM": 900,
		"D": 500,
		"CD": 400,
		"C": 100,
		"XC": 90,
		"L": 50,
		"XL": 40,
		"X": 10,
		"IX": 9,
		"V": 5,
		"IV": 4,
		"I": 1
	}

	let result = ''

	for (let key in romanNumerals) {
		while (num >= romanNumerals[key]) {
			result += key;
			num -= romanNumerals[key];
		}
	}

	return result
}

console.log(solution(1));
console.log(solution(5));
console.log(solution(354));
console.log(solution(1000));
console.log(solution(3999));