// Style your code and explain it step by step before jumping to code :D
// Read carefully, focus and test your code :) ... /\ HaPPy HaCkInG /\

// 1-Define a function called myTrueFun that returns true whenever its called.
// i wrote a function without parameters and i returned true 
function myTrueFun () {
	return true 
}

// 2- Define a function called color in which returns true if type of the input is string and returns false otherwise.
// i added a condition that check if the type of the value i entered is string or not and i returned true or false
function color (string) {
	return (typeof(string) === 'string' ? true : false)
}
// 3-Write a JavaScript function that accepts a number as a parameter and check if the number is prime or not.
// i added a for loop to check if the rest of my number divided by all numbers less than it is equal to 0 or not ... if it is 
// so the number is not a prime if its not so the number is a prime
function Prime (number) {
	if (number === 1) {
		return number + " is not Prime"
	}
	for (var n = number-1 ; n > 1; n--) {
		if (number % n === 0) {
			return number + " is not Prime"
		}
	}
return number + " is prime"
}
// 4-write a function that accepts two numbers as parameters and returns true if the two parameters have the same value , false if not
// i compared the two parameters if they are equal i returned true if they are not i returned false
function sameValue (a,b) {
	return (a === b) ? true : false ;
}