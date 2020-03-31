// Style your code and explain it step by step before jumping to code :D
// Read carefully, focus and test your code :) ... /\ HaPPy HaCkInG /\

//create a function isSubset that should take two arrays and determine whether the second array is a subset of the first array.
//For example:

// array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
// array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
// array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false
<<<<<<< HEAD

// i used 2 loops 1 for array and 1 for sub to check if each element in sub is found in array ... if its found i delete it and i exit the loop with (break)
// if the loop was not broken thats mean the element was not found in array so i return false ... otherwise i return true
function isSubset (array,sub) {
	var j = 0 ;
	for (var i = 0 ; i < sub.length ; i++) {
		for (var j = 0 ; j < array.length ; j++) {
			if ( sub[i] === array[j])  {
				delete array[j] ;
				break;
		    }
		}
		if (j === array.length) {
			return false
		}
	}
	return true
}
=======
>>>>>>> f7116e6bad742d738191118e716e7a8f26aa143c
