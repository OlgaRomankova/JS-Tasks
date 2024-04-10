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
          // из массива в строку без запятой

function smash(words) {
return words.join(" ") }
console.log(smash(["hello", "world"])) 

//  из массива в строку с запятой
function smash1(words1) {
    return words1.join()
 }
console.log(smash1(["hello", "world"])) 

const stringToNumber = function(str){
  
    return String(str)
  }
  console.log(stringToNumber("1234"))
 

  function friend(friends)
  {
     return friends.filter(el => el.length === 4)
  }
  console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]))
   

   