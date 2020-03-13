// 1-using + operator combine your partner first and last name .
var firstName = "Mohamed Amine" ;
var lastName = "Oueslati" ;
var fullName = firstName + " " + lastName ;
    console.log (fullName) ;

// 2-find if the number 13 is a multiple of 3 or not.
var x = 13 ;
if ( x % 3 === 0 ) {
	console.log ("13 is a multiple of 3") ;
}
    console.log ("13 is not a multiple of 3") ;

// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
var array = [13,14,13,15,16,17,19,13,16,15] ;
var sum = 0 ;
   for (var i=0 ; i < array.length ; i++) {
   	   sum += array[i] ; 
   }
   console.log(sum/array.length) ;

// 4-calculate your age in seconds.
var age = 28 ;
var ageInSeconds = age * 365 * 24 * 60 * 60 ;
    console.log (ageInSeconds) ;
