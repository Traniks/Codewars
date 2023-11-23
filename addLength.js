// Number: 3;
// Name: Add Length;
// Kata: 8 kyu;
// Url: https://www.codewars.com/kata/559d2284b5bb6799e9000047;

///////////// v1 /////////////

function addLength(str) {
    const arr = str.split(' ')

    let result = arr.map((item, i) => {
        return str = `${item} ${arr[i].length}`;
    });

    return result;
} 

///////////// v2 /////////////

function addLength(str) {
    return result = str.split(' ').map((item) => {
        return str = `${item} ${item.length}`;
    });
}

///////////// v3 /////////////

function addLength(str) {
    return str.split(' ').map((item) => `${item} ${item.length}`);
}


console.log(addLength('apple ban'));