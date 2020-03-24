// Style your code and explain it step by step before jumping to code :D
// Read carefully, focus and test your code :) ... /\ HaPPy HaCkInG /\

// **************** git status ****************
// **************** git add fileName.js ****************
// **************** git status ****************
// **************** git commit -m "your message" ****************
// **************** git status ****************
// **************** git push origin master ****************

// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.

// **************** git status ****************
// **************** git add fileName.js ****************
// **************** git status ****************
// **************** git commit -m "your message" ****************
// **************** git status ****************
// **************** git push origin master ****************

// in mathematics one of the methods to calculate the gcd of two numbers is to keep dividing the smallest number by the rest of the last division until the rest reach 0
// then the last rest not equal to 0 will be the gcd ... thats what i did in this function i kept calling it again by putting num2 as first parameter 
// and the rest of the last division as second parameter ... until i reach my condition (rest equal to 0) then i returned the last rest not equal to 0

function gcd (num1,num2) {
    if (num1 % num2 === 0) {
    	return num2
    }
	return gcd(num2, num1 % num2);
}


// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summetion, you'll need to use recursion in this.

// **************** git status ****************
// **************** git add fileName.js ****************
// **************** git status ****************
// **************** git commit -m "your message" ****************
// **************** git status ****************
// **************** git push origin master ****************

// i used recursion in this function to decrease one from number 2 every time i call the function and add one to the result until num2 become equal to 0
// then the result will be equal to num2 (by adding 1 , num2 times) before i added num1 to it ... to get num1 + num2

function sum(num1, num2) {
	if (num2 === 0)
		return num1 ;
	return 1 + sum (num1,num2-1);
}