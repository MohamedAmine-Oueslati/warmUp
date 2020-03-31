// 1-using + operator combine your partner first and last name .
var firstName = 'Wala' ;
var lastName = 'Nour' ;
var fullName = firstName + ' ' + lastName ;

// 2-find if the number 13 is a multiple of 3 or not.
13 % 3 === 0 ? "13 is a multiple of 3" : "13 is not a multiple of 3" ;

// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
var arr = [13,14,13,15,16,17,19,13,16,15] ;
function average(arr) {
	var sum = 0 ;
    for (var i = 0 ; i < arr.length ; i++){
	    sum += arr[i] ;
    }
    return sum / arr.length ;
}

average(arr)

// 4-calculate your age in seconds.
var age = 28
function ageInSeconds (age) {
	return age * 365 * 24 * 60 * 60 ;
}

ageInSeconds (age)
