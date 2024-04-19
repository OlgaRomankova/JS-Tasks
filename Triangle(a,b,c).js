function isTriangle(a, b, c)
{ if(a + b > c && a + c > b && b + c > a)
   {return true
}  else {
    return false}
}
console.log(isTriangle(1, 2, 2))
console.log(isTriangle(4, 2, 3))
console.log(isTriangle(2, 2, 2))
console.log(isTriangle(1, 2, 3))
console.log(isTriangle(2, 2, 2))
console.log(isTriangle(-5, 1, 3))
console.log(isTriangle(0, 2, 3))
console.log(isTriangle(1, 2, 9))


function isTriangle1(a, b, c)
{ if(a + b <= c || a + c <= b || b + c <= a)
   {return false
}  else  {
    return true}
}
console.log(isTriangle1(1, 2, 3))