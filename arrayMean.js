// Number: 1;
// Name: Grasshopper - Array Mean;
// Kata: 8 kyu;
// Url: https://www.codewars.com/kata/55d277882e139d0b6000005d;

///////////// v1 /////////////

var findAverage = function (nums) {
    return sum = nums.reduce((acc, number) => acc + number, 0) / nums.length;
}


console.log(findAverage([1, 3, 5, 7]));