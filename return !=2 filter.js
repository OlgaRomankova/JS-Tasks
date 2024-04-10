//return numbers !=2

const array1 = [1, 2, 3];

console.log(array1.filter((n) => {return n != 2}));

function arrayDiff(arr) {
      return arr.filter((n) => {return n != 2})
    }
 console.log(arrayDiff([1,2,2,2,3],[2]))
 console.log(arrayDiff([1,5,6,8,2],[2]))

    



function findElement(arr, value) {
  return arr.indexOf(value)
   }
  console.log(findElement(['Ace', 10, true], 10))
  console.log(findElement(['Array', 'Number', 'string'], 'Date'))
  console.log(findElement([0, 1, 2, 3, 4, 5], 5))
