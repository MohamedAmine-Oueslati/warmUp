// Style your code and explain it step by step before jumping to code :D
// Read carefully, focus and test your code :) ... /\ HaPPy HaCkInG /\

// 1-implement the function mult that takes a single parameter n, and computes the multiplication of all integers up to n
//starting from 0, e.g.:
// mult(3); // => 6
// mult(4); // => 24

// i used a for loop so the counter variable i declared keeps increasing by 1 and multply all integers from 1 up to n

function mult (n) {
	if (n === 0) {
		return 0 ;
	}
	var total = 1 ;
	for (var i = 1 ; i <= n ; i++) {
		total *= i
	}
	return total ;
}

// 2- Use a while loop to build a single string with the numbers 1 through n
// separated by the number next to the current number.
//Have it return the new string.
// eg= 1 2 2 3 3 4 4 5 5 6 6 ...

// i declared an array to put my values in it ... then i used join(' ') to transform it to a string with space between each two characters
//i added two counter variables j and i ... j moves from index to index+2 ... and i the value assigned to each index 
function buildString (n) {
	var i = 1 ;
	var j = 1 ;
	var arr = [] ;
    arr[0] = 1 ;
	while (i < n) {
		arr[j] = i + 1 ;
		arr[j+1] = i + 1 ;
		i++;
		j += 2 ;
	}
	return arr.join(' ') ;
}