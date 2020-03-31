// 1-Choose the correct comparison operator to display "true", when: 5 is less than 7.
<<<<<<< HEAD
//answer :

console.log (5 < 7) ;
=======
//answer : 5 < 7 ? true : false;
>>>>>>> f7116e6bad742d738191118e716e7a8f26aa143c

//2- Write a function named helloWorld that:
//takes 1 argument, a language code (e.g. "fr", "es", "en")
//returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
//ex: helloWorld('fr') ==> 'Bonjour tout le monde'
//    helloWorld('es') ==> 'Hola, Mundo'
//    helloWorld('') ==> 'Hello, World'
<<<<<<< HEAD
function helloWorld (code) {
	if (code === "fr") {
		return 'Bonjour tout le monde' ;
	}
	else if (code === "es") {
		return 'Hola, Mundo' ;
	}
	else if (code === "ar") {
		return 'صباح الخير للجميع' ;
	}
	return 'Hello, World' ;
}

//3- write a function to Reverse an array without use array.reverse() method:
// ex: reverseArray([1,2,3]) ==> [3,2,1]
function Reverse (array) {
   var j = 0 ;
   var arr = [];
	for (var i = array.length-1 ; i >= 0 ; i--) {
           arr[j] = array[i] ;
           j++;
	}
	return arr ;
}
=======


//3- write a function to Reverse an array without use array.reverse() method:
// ex: reverseArray([1,2,3]) ==> [3,2,1]
>>>>>>> f7116e6bad742d738191118e716e7a8f26aa143c
