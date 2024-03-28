// Number: 15;
// Name: WeIrD StRiNg CaSe;
// Kata: 6 kyu;
// Url: https://www.codewars.com/kata/52b757663a95b11b3d00062d/javascript;

///////////// v1 /////////////

function toWeirdCase(str) {
    words = str.split(' ');

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let transformedWord = '';

        for (let letterIndex = 0; letterIndex < word.length; letterIndex++) {
            if (letterIndex % 2 === 0) {
                transformedWord += word[letterIndex].toUpperCase();
            } else {
                transformedWord += word[letterIndex].toLowerCase();
            }
        }

        words[i] = transformedWord;
    }

    return words.join(' ');
}

///////////// v2 /////////////

function toWeirdCase(str) {
    let result = '';
    let counter = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            result += ' ';
            counter = 0;
        } else if (counter % 2 === 0) {
            result += str[i].toUpperCase();
            counter++;
        } else if (counter % 2 !== 0) {
            result += str[i].toLowerCase();
			counter++;
        }
    }

    return result
}

console.log(toWeirdCase('Hello'));
console.log(toWeirdCase('ThIs Is A TeSt'));
