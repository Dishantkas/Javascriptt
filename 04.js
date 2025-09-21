let value = 3;
let negValue = -value;
console.log( negValue );
console.log( 1 + 1 + "2" ); // 22
console.log( "1" + 1 + 1 ); // 111
console.log( 1 + 1 + +"2" ); // 4   
console.log( "A" - "B" + 2 ); // NaN
console.log( 1 + 1 - "2" ); // 0
console.log( 1 + 3 - - "2" ); // 6
console.log( true + 2 ); // 3
console.log( +"3" + 4 ); // 7
console.log( "4" - 2 ); // 2
console.log( "4px" - 2 ); // NaN
console.log( " -9 " + 5 ); // " -9 5"
console.log( " -9 " - 5 );      // -14              
console.log( null + 1 ); // 1
console.log( undefined + 1 ); // NaN
console.log( " \t \n" - 2 ); // -2
console.log( " \t \n" + 2 ); // " \t \n2"
console.log( 5 - - "2" ); // 7
console.log( 5 + - "2" ); // 3


// prefix increment
let counter = 2;
const preIncrement = ++counter;
console.log( `preIncrement: ${preIncrement}, counter: ${counter}` ); // preIncrement: 3, counter: 3
// postfix increment
counter = 2;
const postIncrement = counter++;
console.log( `postIncrement: ${postIncrement}, counter: ${counter}` ); // postIncrement: 2, counter: 3