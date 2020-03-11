/**
 * let's see what some of our newer array methods are...
 */
 
 /**
  * Find() method:
 */
 var myArray = [ 'Hello, World!', 2, 3, true, 5, null, 38 ];
 var myValue = myArray.find( function ( element ) { return element > 4; } );
 console.log( myValue ); // Returns 5, an element from our array!

 // For checking if an element exists in the array.
 var isMyStringInside = myArray.find( function ( element) { return element === 'Hello, World!'; } );
 console.log( isMyStringInside ); // We would get the matching element.

 // Find is helpful for checking is an element exists in an array!
 var isMyStringInside = myArray.find( function ( element) { return element === 'Goodbye, Everyone :('; } );
 console.log( isMyStringInside ); // Not found :( 

 /**
  * .findIndex()
  */

// still searching for an element
  var findAnIndex = myArray.findIndex( function ( element ) { return element === 2; } );
console.log( findAnIndex ); // but this time, if return the value's INDEX.

 /**
  * .entries()
  */

var pairing = myArray.entries();
console.log( pairing ); // returns an iterator.
console.log( pairing.next().value ); // we can keep bumping to the next item, getting a nice key/value array to let us know what's inside!
console.log( pairing.next().value );
console.log( pairing.next().value );
console.log( pairing.next().value );
console.log( pairing.next().value );
console.log( pairing.next().value );
console.log( pairing.next().value ); console.log( pairing.next().value );

 /**
  * .from() method:
  */

var fromArray = Array.from( 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' );
console.log( fromArray ); // 26 element array
var fromArray2 = Array.from( 'Hello, World!' );
console.log( fromArray2 ); // 13 element array - even spaces and special chars will be captured as elements!


 /**
  * .filter() method:
  * returns array of all matches.
  */

  var filtered = myArray.filter( function ( element ) {return element > 4; } );
 console.log( filtered ); // ALL matches returned! 5 and 38

 /**
  * .reduced() method:
  * 
  */

 var reduceResult = myArray.reduce( function ( accumulator, currentVal ) {
     return accumulator + currentVal;
 } );
 console.log( reduceResult ); // because we have strings in here, they are getting concatenated.
 
 console.log( [ 1, 2, 3, 4 ].reduce(function (a, v ) { return a + v; } ) ); // because we have numbers in here, they are being added (mathematically.)

