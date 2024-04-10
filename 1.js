//return numbers !=2

const array1 = [1, 2, 3];

console.log(array1.filter((n) => {return n != 2}));
function arrayDiff(arr) {
      return arr.filter((n) => {return n != 2})
    }
    console.log(arrayDiff([1,2,2,2,3],[2]))

    function highAndLow(numbers){
      numbers = numbers.split(" ");
      return Math.max.apply(null, numbers) + " " +  Math.min.apply(null, numbers)
    }
    console.log(highAndLow( "1 2 5 4 88 -1"))

const letters = ["is2 Thi1s T4est 3a"];

console.log(letters.sort())

function order(words)
{
return words.split(' ').sort(function(a,b){
  return a.match(/\d/) - b.match(/\d/)}).join(' ')
}
console.log(order("is2 Thi1s T4est 3a"))    //Thi1s is2 3a T4est
console.log(order("4of Fo1r pe6ople g3ood th5e the2"))

function findElement(arr, value) {
  return arr.indexOf(value)
   
}
  console.log(findElement(['Ace', 10, true], 10))
  console.log(findElement(['Array', 'Number', 'string'], 'Date'))
  console.log(findElement([0, 1, 2, 3, 4, 5], 5))
