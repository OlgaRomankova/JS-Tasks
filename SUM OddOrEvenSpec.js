function oddOrEven(array) {
    return array.reduce(function(sum, item) {
      return sum + item
    }, 0) % 2 == 0 ? 'even' : 'odd';
  }
  console.log(oddOrEven([1, 2]));
  console.log(oddOrEven([1, 3]));
  console.log(oddOrEven([]));

function OddOrEvenSpec1(array){
   let sum = array.reduce((x, y) => x + y)
  return sum % 2 === 0 ? "even" : "odd"
}
console.log(OddOrEvenSpec1([0, 1, 4]))
console.log(OddOrEvenSpec1([0, -1, -5]))
console.log(OddOrEvenSpec1([0]))

function OddOrEvenSpec(array) {
    if (array.length == 0) {
    return "even"
    } else {
      let sum = array.reduce((x, y) => {return x + y})
   return sum % 2 == 0 ? "Even" : "Odd"
 }
 }
 console.log(OddOrEvenSpec([0, 1, 4]))
console.log(OddOrEvenSpec([0, -1, -5]))
console.log(OddOrEvenSpec([0]))