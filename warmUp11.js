// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors
var femalesName = ["Ranoua", "Khaoula", "Reem", "Hiba", "Amal"];
var malesName = ["Bassem", "Charaf", "Ahmed", "Moez", "Oussama", "Firas"]
var classInstructors = ["Farouk", "Omar", "Hashem", "Seif", "Houda", "Dhia", "Insaf"]

// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.
function middle (array) {
	var x = array.length ;
    if (x % 2 === 0) {
   	    return false
    }
    return array[(x-1)/2];
}
// 3-Change all the numbers in the array to be multiplied by two for even indexes.
function multiplyEven (array) {
	for (var i = 0 ; i < array.length ; i+=2) {
		array[i] *= 2 ;
	}
	return array ;
}