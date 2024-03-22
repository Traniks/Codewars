// Number: 7;
// Name: Even or Odd;
// Kata: 8 kyu;
// Url: https://www.codewars.com/kata/53da3dbb4a5168369a0000fe;

///////////// v1 /////////////

function evenOrOdd(number) {
    if (number % 2 == 0) {
        return "Even"
    } else {
        return "Odd"
    }
}

///////////// v2 /////////////

function evenOrOdd(number) {
    return number % 2 == 0 ? "Even" : "Odd"
}

console.log(evenOrOdd(2));
console.log(evenOrOdd(3));
console.log(evenOrOdd(4));