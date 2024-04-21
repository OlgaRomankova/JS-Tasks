// Task
// Sum all the numbers of a given array ( cq. list ),
//  except the highest and the lowest element ( by value, not by index! ).
//  The highest or lowest element respectively is a single element at each edge,
//  even if there are more than one with the same value.
// Mind the input validation. Если в массиве меньше два и меньше элементов вернуть 0
// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

function sumArray(array) {
  if(array == null || array.length < 2) {  
    return 0}
  let sum = array.reduce((x, y) => x + y)
 return sum - Math.max.apply(null, array) - Math.min.apply(null, array)}
console.log(sumArray([6, 2, 1, 8, 10]))
console.log(sumArray([-6, -20, -1, -10, -12]))
console.log(sumArray([-6, 20, -1, 10, -12]))

function sumArray1(array) {
  if(!array) return 0
 return array.sort((a, b) => a - b).slice(1, -1).reduce((x, y) => x + y, 0)
 }
console.log(sumArray1([6, 2, 1, 8, 10]))
console.log(sumArray1([-6, -20, -1, -10, -12]))
console.log(sumArray1([-6, 20, -1, 10, -12]))
console.log(sumArray1([ ]))



