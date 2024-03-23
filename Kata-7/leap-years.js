// Number: 9;
// Name: Leap Years;
// Kata: 7 kyu;
// Url: https://www.codewars.com/kata/526c7363236867513f0005ca;

///////////// v1 /////////////

function isLeapYear(year) {
	if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
		return true
	} else {
		return false
	}
}

///////////// v2 /////////////

function isLeapYear(year) {
	return year % 4 == 0 && year % 100 !== 0 || year % 400 == 0 ? true : false
}

///////////// v3 /////////////

function isLeapYear(year) {
	return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}


console.log(isLeapYear(2024));
console.log(isLeapYear(2000));
console.log(isLeapYear(2015));