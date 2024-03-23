// Number: 4;
// Name: Credit Card Mask;
// Kata: 7 kyu;
// Url: https://www.codewars.com/kata/5412509bd436bd33920011bc;

///////////// v1 /////////////

function maskify(cc) {
	let str = cc.replace(/./g, '#');
	return str.slice(4) + cc.slice(-4);
}

console.log(maskify("21321312312"));