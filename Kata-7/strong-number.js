// Number: 12;
// Name: Strong Number (Special Numbers Series #2);
// Kata: 7 kyu;
// Url: https://www.codewars.com/kata/5a4d303f880385399b000001;

///////////// v1 /////////////

function strong(n) {
    let sum = sumOfFactorials(n)

    function factorial(num) {
        let result = 1;

        for (let i = 1; i <= num; i++) {
			result *= i
		}

        return result
    }

    function sumOfFactorials(n) {
        let sum = 0;
        let arr = String(n).split('').map(Number);

        arr.forEach(digit => {
            sum += factorial(digit);
        });

        return sum
    }

    return sum == n ? 'STRONG!!!!' : 'Not Strong !!'
}

console.log(strong(1));
console.log(strong(2));
console.log(strong(7));
console.log(strong(145));