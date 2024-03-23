// Number: 10;
// Name: Cat years, Dog years;
// Kata: 8 kyu;
// Url: https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b;

///////////// v1 /////////////

function humanYearsCatYearsDogYears(humanYears) {

    let catYears;
    let dogYears;

    switch (humanYears) {
		case 1:
			catYears = 15;
			dogYears = 15;
			break;
		case 2:
			catYears = 24;
			dogYears = 24;
			break;
		case humanYears:
			catYears = (24 + (humanYears - 2) * 4);
			dogYears = (24 + (humanYears - 2) * 5);
			break;
		default:
			catYears = 0;
			dogYears = 0;
	}

	return [humanYears, catYears, dogYears]
}

///////////// v2 /////////////

function humanYearsCatYearsDogYears(humanYears) {
	switch (humanYears) {
		case 1:
			return [1, 15, 15];
		case 2:
			return [2, 24, 25];
		default:
			return [humanYears, (humanYears - 2) * 4 + 24, (humanYears - 2) * 5 + 24];
	}
}

///////////// v3 /////////////

function humanYearsCatYearsDogYears(humanYears) {
	[
		humanYears,
		( humanYears - 1 ? 16 : 11 ) + 4 * humanYears,
		( humanYears - 1 ? 14 : 10 ) + 5 * humanYears,
	]
}

///////////// v4 /////////////

function humanYearsCatYearsDogYears(humanYears) {
	if (humanYears == 1) return [1, 15, 15]
	if (humanYears == 2) return [2, 24, 24]
	return [humanYears, (humanYears - 2) * 4 + 24, (humanYears - 2) * 5 + 24]
}


console.log(humanYearsCatYearsDogYears(1));
console.log(humanYearsCatYearsDogYears(2));
console.log(humanYearsCatYearsDogYears(3));
console.log(humanYearsCatYearsDogYears(10));