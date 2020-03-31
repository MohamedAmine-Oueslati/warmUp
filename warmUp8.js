// 1 - Write a function named objKey that take an object as a parameter and returns an array containing the keys of the object
// objKey({name:'ahmed',age:20}) ==> ['name','age']

<<<<<<< HEAD
function objKey (obj) {
		return Object.keys(obj) ;
}

// 2 - Write a function named objLength to get the length of a JavaScript object
// objLength({name:'ahmed',age:20}) ==> 2
function objLength (obj) {
	var arr = [] ;
	var i = 0 ;
	for (var key in obj) {
		arr[i] = obj.hasOwnProperty(key) ;
		i++;
	}
    return arr.length ;
}

// 3 - Write a function named objSort to sort an array of JavaScript objects based on the id
// objSort([{id:2,value:50},{id:0,value:70},{id:1,value:40}]) ==> [{id:0,value:70},{id:1,value:40},{id:2,value:50}]
function objSort (array) {
var arr = []
    for (var j = 0 ; j < array.length ; j++) {
	for (var i = 0 ; i < array.length ; i++) {
		if ( array[i].id === j ) {
			arr[j] = array[i] ;
        }
	}
	}
	return arr ;
}
=======
// 2 - Write a function named objLength to get the length of a JavaScript object
// objLength({name:'ahmed',age:20}) ==> 2

// 3 - Write a function named objSort to sort an array of JavaScript objects based on the id
// objSort([{id:2,value:50},{id:0,value:70},{id:1,value:40}]) ==> [{id:0,value:70},{id:1,value:40},{id:2,value:50}]
>>>>>>> f7116e6bad742d738191118e716e7a8f26aa143c
