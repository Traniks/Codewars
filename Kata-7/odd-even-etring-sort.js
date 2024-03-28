// Number: 13;
// Name: Odd-Even String Sort;
// Kata: 7 kyu;
// Url: https://www.codewars.com/kata/580755730b5a77650500010c;

///////////// v1 /////////////

function sortMyString(S) {
	let evenChars = '';
	let oddChars = '';

    for (let i = 0; i < S.length; i++) {
        if (i % 2 === 0) {
            evenChars += S[i];
        } else {
            oddChars += S[i];
        }
    }

    return evenChars + ' ' + oddChars;
}

///////////// v2 /////////////

function sortMyString(s) {
    let even = s.split('').filter((v, i) => i % 2 === 0).join('');
    let odd = s.split('').filter((v, i) => i % 2 !== 0).join('');
    
    return even + ' ' + odd;
}


console.log(sortMyString('CodeWars'));
console.log(sortMyString("YCOLUE'VREER"));
