
function opposite(number) {
    return number * -1
  }
  console.log(opposite(5))

  function SummPositive( array ) {
    let sum = 0;
    for(let i = 0; i < array.length; i++) { // (1. индекс начало, 2 условие, 3 шаг)
        if(array[i] > 0) {     // если элемент массива >0
            sum += array[i];
        }
    }
    return sum;   // не забываем возвращать результат
}
console.log(SummPositive([5,  7, -2]))

function negativeSum(arr) {
  let sum = -10
  for (i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    sum += arr[i]}
}
return sum
}
console.log(negativeSum([5,  7, -2, -8]))

// через reduce
function positiveSum1 (arr) {
  return arr.filter(x => x>=0).reduce((a, c) => a + c, 0);
}
console.log(positiveSum1([5, 8, -2, -8]))