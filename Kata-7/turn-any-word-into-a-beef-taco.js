// Number: 8;
// Name: Turn any word into a beef taco;
// Kata: 7 kyu;
// Url: https://www.codewars.com/kata/59414b46d040b7b8f7000021/javascript;

///////////// v1 /////////////

function tacofy(word) {

    let arr = [];
    arr.push("shell");

    word.toLowerCase().split('').forEach(letter => {
        switch (letter) {
            case 't':
                arr.push('tomato')
                break;
            case 'l':
                arr.push('lettuce')
                break;
            case 'c':
                arr.push('cheese')
                break;
            case 'g':
                arr.push('guacamole')
                break;
            case 's':
                arr.push('salsa')
                break;

            case 'a':
                arr.push('beef')
                break;
            case 'e':
                arr.push('beef')
                break;
            case 'i':
                arr.push('beef')
                break;
            case 'o':
                arr.push('beef')
                break;
            case 'u':
                arr.push('beef')
                break;

            default:
                break;
        }
    });

    arr.push('shell');
    return arr
}

///////////// v2 /////////////

function tacofy(word) {

	const keys = {
		a: 'beef',
		e: 'beef',
		u: 'beef',
		i: 'beef',
		o: 'beef',
		t: 'tomato',
		l: 'lettuce',
		c: 'cheese',
		g: 'guacamole',
		s: 'salsa',
	}

	const output = ['shell']

	for (const letter of [...word.toLowerCase()]) {

		if (letter in keys) {
			output.push(keys[letter]);
		}


	}

	output.push('shell');
	return output
}


console.log(tacofy("sadaw"));

