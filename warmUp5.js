// 1) Write a function named greaterNum that:
// - takes 2 arguments, both numbers.
// - returns whichever number is the greater (higher) number.
// ex greaterNum(5, 10) => "The greater number of 5 and 10 is 10."
<<<<<<< HEAD
function greaterNum (num1,num2) {
	return (num1 > num2) ? "The greater number of "+num1+" and "+num2+" is "+num1+"." 
	: "The greater number of "+num1+" and "+num2+" is "+num2+".";
}
=======

>>>>>>> f7116e6bad742d738191118e716e7a8f26aa143c

// 2) Write a function named isEven using  for loop that
// -  iterate from x to y.
// -  return array contain the even values,
//  ex:  isEven(1,10) => [2,4,6,8,10]

<<<<<<< HEAD
function isEven(x, y) {
   var array = [] ;
	for (var i = 0 ; x <= y ; x++) {
       if (x % 2 === 0) {
        array[i] = x ;
        i++;
       }
	}
	return array ;
}

// }
=======
>>>>>>> f7116e6bad742d738191118e716e7a8f26aa143c
//3) write a function named sum that
// - Use a while loop to add up the numbers from x to y.
// ex sum(1,5) => 15

<<<<<<< HEAD
function sum (x,y) {
	var sum = 0 ;
	while (x <= y ) {
		sum += x ;
		x++;
	}
	return sum ;
}
=======
>>>>>>> f7116e6bad742d738191118e716e7a8f26aa143c

//4) Write a function named factorial that
// -  Use Recursion to calculate the factorial of a number
// -  the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n
// - 5! = 5*4*3*2*1 = 120
// ex : factorial(5) => 120

<<<<<<< HEAD
function factorial(n){  
   return (n === 1 || n === 0) ? 1 :  n*factorial(n-1) ; 
 };

=======
>>>>>>> f7116e6bad742d738191118e716e7a8f26aa143c
//5) write a function named decimals
//- the function will format a number up to specified decimal places
//- the function will return a string
//- if the parameters not a number return false
// ex :
//      decimals(2100, 'a') ==> false
//      decimals('a', 5) ==> false
//      decimals(2.100212, 2) ==> '2.10'
//      decimals(2.100212, 3) ==> '2.100'
//      decimals(2100, 2) ==> '2100.00'
//
<<<<<<< HEAD
function decimals (x,y) {
	if (typeof x !== 'number' || typeof y !== 'number') {
		return false ;
	}
	return x.toFixed(y)
}
=======
>>>>>>> f7116e6bad742d738191118e716e7a8f26aa143c
