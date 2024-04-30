// Complete the solution so that it returns true 
// if the first argument(string) passed in ends with the 2nd argument (also a string).
// Examples:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false
// solution('abcde', 'cde'), true
// solution('abcde', 'abc'), false

function solution(str, ending){
    return str.slice(0-ending.length) == ending ? true : false
   
  }
console.log(solution("abc", "bc"))
console.log(solution("abc", ""))

function solution1(str, ending){
  return str.endsWith(ending)
}
console.log(solution1("abc", "bc"))
console.log(solution1("abc", ""))
