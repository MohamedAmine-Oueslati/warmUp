// 1 - Write functions larger and smaller that each accept two strings as arguments, and return the larger and smaller strings, respectively
 
function larger (str1,str2) {
	if (str1.length > str2.length) {
		return str1
	}
	return str2
}

function smaller (str1,str2) {
	if (str1.length > str2.length) {
		return str2
	}
	return str1
}

// 2 - Write a function called counter that, when invoked, always returns a number that is one more than the previous invocation. For instance:
var newNumber;

function counter(n){
  return newNumber = (n + 1);
}


// 3 -  Meet & Greet: n numbers are coming to a party for numbers. Introduce them each to all the guests as they arrive. You should end up with output looking something like this one for n = 5
// welcome 1
//  welcome 2, meet 1
//  welcome 3, meet 1 and 2
//  welcome 4, meet 1, 2 and 3
//  welcome 5, meet 1, 2, 3 and 4
//

function meetAndGreet(n) { 
 var counter = 1; 
 var x; 
 var total = ''; 
 while (counter <= n) { 
 if (n === 1) { 
 total = 'welcome ' + counter 
 } else if (counter === 1) { 
 total = 'welcome ' + counter + ' '; 
 } else { 
 total = total + 'welcome ' + counter + ', ' + 'meet '; 
 x = 1; 
 while (x < counter) { 
 if (x === counter - 2) { 
 total = total + x + ' and '; 
 } else if (x === counter - 1) { 
 total = total + x; 
 } else { 
 total = total + x + ', '; 
 } 
 x += 1; 
 } 
 total = total + ' ' ; 
 } 
 counter += 1; 
 } 
 return total; 
 }
// 4- Write a function shortestWord that works like longestWord, but returns the shortest word instead.

function shortestWord (str) {
     var array = str.split(' ') ;
     var string = array[0]
     for ( var i = 0 ; i < array.length ; i++) {
     	if (array[i].length < string.length ) {
     		string = array[i] ;
     	}
     }
    return string ;
}
