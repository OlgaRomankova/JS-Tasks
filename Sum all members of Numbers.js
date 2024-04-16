function getSum(a, b){
   if (a === b) return a;
   const max = Math.max(a, b);
   const min = Math.min(a, b);
   let sum = 0
   for(let i = min; i<=max; i++)
   {sum += i}
   return sum
    }
 console.log(getSum(1, 0))
 console.log(getSum(1, 2))
 console.log(getSum(0, 1))
 console.log(getSum(1, 1))
 console.log(getSum(-1, 0))
 console.log(getSum(-1, 2))