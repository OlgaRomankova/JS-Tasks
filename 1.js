function getArrayOfStrings(arr) {
      return arr.filter(el => {el.typeof === 'string' || el instanceof String})
 }
 console.log(getArrayOfStrings([0, 1, 'cat', 3, true, 'dog']))
 console.log(getArrayOfStrings([1, 2, 3, 4, 5]))
 console.log(getArrayOfStrings([ 'cat', 3, true, 'dog']))


// function getArrayOfStrings(arr) {
//        const res = arr.filter(function(element) 
//        { element.typeof === 'string' || element instanceof String}) 
//        return (res)}

//   console.log(getArrayOfStrings([0, 1, 'cat', 3, true, 'dog']))





