function SeriesSum(n) {
    if(!n)  return "0.00" 
    let sum = 1, j = 4
    for(i = 1; i < n; i++) {
    sum += 1 / j
    j += 3}
  return sum.toFixed(2)
  }
  console.log(SeriesSum(2))
  console.log(SeriesSum(3))
  console.log(SeriesSum(4))
  console.log(SeriesSum(0))