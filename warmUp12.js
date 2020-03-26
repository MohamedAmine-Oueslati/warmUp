// 1-Write a function that takes a string as an input and returns the reverse of each letter
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o0l1l2e3h4"
function reverseStr(str) {
	var array = [] ;
	var j = 0 ;
	var arr = str.split('')
    var i = arr.length - 1 ;
    while (i >= 0 ) {
        array[j] = arr[i]
        array[j+1] = j/2 ;
        i--;
        j += 2;
    }
    return array.join('') ;
}
// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]
function sameLength (arr){
	var array = [] ;
    for (var i = 0 ; i < arr.length ; i++) {
    	    for (var j = i + 1 ; j < arr.length ; j++) {
                if ( arr[i].length === arr[j].length ) {
    		        array[0] = arr[i];
    		        array.push(arr[j]);

                }    
            }
    }
    return array ;
}
