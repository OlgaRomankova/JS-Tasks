function findAverage(array) {
    if(array.length === 0) return 0;
        let sum = array.reduce((x, y) => x + y, 0)
         return sum/array.length}
   

  console.log(findAverage([1,1,1]))
  console.log(findAverage([1,2,3]))
  console.log(findAverage([1,2,3,4]))
  console.log(findAverage([]))