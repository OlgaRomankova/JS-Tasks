// Transforms the numeric array into the according array of squares:
// f(x) = x * x
// @param {array} arr
// @return {array}
// @example
// [ 0, 1, 2, 3, 4, 5 ] => [ 0, 1, 4, 9, 16, 25 ]
// [ 10, 100, -1 ] => [ 100, 10000, 1 ]
// */
// function toArrayOfSquares(arr) {
// return
// }
// /**

function toArrayOfSquares(arr) {
    return arr.map((x) => x * x)
    }
console.log(toArrayOfSquares([ 0, 1, 2, 3, 4, 5 ]))
console.log(toArrayOfSquares([ 10, 100, -1 ]))

//     Returns the 3 largest numbers from the specified array
// @param {array} arr
// @return {array}
// @example
// [] => []
// [ 1, 2 ] => [ 2, 1 ]
// [ 1, 2, 3 ] => [ 3, 2, 1 ]
// [ 1,2,3,4,5,6,7,8,9,10 ] => [ 10, 9, 8 ]
// [ 10, 10, 10, 10 ] => [ 10, 10, 10 ]
// */
// function get3TopItems(arr) {
// return}

function get3TopItems(arr) {
     return arr.sort((a, b) => b - a).slice(0, 3)
}
console.log(get3TopItems([]))
console.log(get3TopItems([ 1, 2 ]))
console.log(get3TopItems([ 1, 2, 3 ]))
console.log(get3TopItems([ 1,2,3,4,5,6,7,8,9,10 ]))
console.log(get3TopItems([ 10, 10, 10, 10 ]))

Sorts the specified array by country name first and city name (if countries are equal) in ascending order.
@param {array} arr
@return {array}
@example
[
 { country: 'Russia',  city: 'Moscow' },
 { country: 'Belarus', city: 'Minsk' },
 { country: 'Poland',  city: 'Warsaw' },
 { country: 'Russia',  city: 'Saint Petersburg' },
 { country: 'Poland',  city: 'Krakow' },
 { country: 'Belarus', city: 'Brest' }
]
                 =>
[
 { country: 'Belarus', city: 'Brest' },
 { country: 'Belarus', city: 'Minsk' },
 { country: 'Poland',  city: 'Krakow' },
 { country: 'Poland',  city: 'Warsaw' },
 { country: 'Russia',  city: 'Moscow' },
 { country: 'Russia',  city: 'Saint Petersburg' }