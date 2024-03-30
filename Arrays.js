
// Returns an index of the specified element in array or -1 if element is not found
// @param {array} arr
// @param {any} value
// @return {number}
// @example
// ['Ace', 10, true], 10 => 1
// ['Array', 'Number', 'string'], 'Date' => -1
// [0, 1, 2, 3, 4, 5], 5 => 5
// */
// function findElement(arr, value) {
// return
// }
// /**

function findElement(arr, value) {
   return arr.indexOf(value)
    
}
   console.log(findElement(['Ace', 10, true], 10))
   console.log(findElement(['Array', 'Number', 'string'], 'Date'))
   console.log(findElement([0, 1, 2, 3, 4, 5], 5))


// Returns the doubled array - elements of the specified array are repeated twice using original order
// @param {array} arr
// @return {array}
// @example
// ['Ace', 10, true] => ['Ace', 10, true, 'Ace', 10, true]
// [0, 1, 2, 3, 4, 5] => [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5]
// [] => []
// */
// function doubleArray(arr) {
// }

function doubleArray(arr) {
  
   return arr.concat(arr)
 }
   console.log(doubleArray(['Ace', 10, true]))
   console.log(doubleArray([0, 1, 2, 3, 4, 5]))
   console.log(doubleArray([]))


   // Returns an array of positive numbers from the specified array in original order
// @param {array} arr
// @return {array}
// @example
// [ 0, 1, 2, 3, 4, 5 ] => [ 1, 2, 3, 4, 5 ]
// [-1, 2, -5, -4, 0] => [ 2 ]
// [] => []
// */
// function getArrayOfPositives(arr) {
// return
// }
// /**
function getArrayOfPositives(arr) {
   return arr.filter(item => item > 0)
   }
   console.log(getArrayOfPositives([0, 1, 2, 3, 4, 5]))
   console.log(getArrayOfPositives([-1, 2, -5, -4, 0]))
   console.log(getArrayOfPositives([]))

// Returns the array with strings only in the specified array (in original order)
// @param {array} arr
// @return {array}
// @example
// [ 0, 1, 'cat', 3, true, 'dog' ] => [ 'cat', 'dog' ]
// [ 1, 2, 3, 4, 5 ] => []
// [ 'cat, 'dog', 'raccon' ] => [ 'cat', 'dog', 'racoon' ]
// */
// function getArrayOfStrings(arr) {
// return
// }
// /**

function getArrayOfStrings(arr) {
  
      return arr.filter(funcСheckString)
   }

   console.log(getArrayOfPositives([0, 1, 'cat', 3, true, 'dog']))
   console.log(getArrayOfPositives([1, 2, 3, 4, 5]))
   console.log(getArrayOfPositives([ 'cat', 3, true, 'dog']))

// Returns the array of useprcase strings from the specified array
// @param {array} arr
// @return {array}
// @example
// [ 'permanent-internship', 'glutinous-shriek', 'multiplicative-elevation' ] => [ 'PERMANENT-INTERNSHIP', 'GLUTINOUS-SHRIEK', 'MULTIPLICATIVE-ELEVATION' ]
// [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ] => [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ]
// */
// function getUpperCaseStrings(arr) {
// return
// }
// /**


function getUpperCaseStrings(arr) {
   const newArray = arr.map(el => {return el.toUpperCase()})
   console.log(newArray)
   }
   getUpperCaseStrings(['permanent-internship', 'glutinous-shriek', 'multiplicative-elevation'])
   getUpperCaseStrings([ 'a', 'b', 'c', 'd', 'e', 'f', 'g'])

// Returns the array of string lengths from the specified string array.
// @param {array} arr
// @return {array}
// @example
// [ '', 'a', 'bc', 'def', 'ghij' ] => [ 0, 1, 2, 3, 4 ]
// [ 'angular', 'react', 'ember' ] => [ 7, 5, 5 ]
// */
// function getStringsLength(arr) {
// return
// }


  
