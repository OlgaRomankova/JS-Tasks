// Grade book
// Complete the function so that it finds the average of the 
// three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check 
// for negative values or values greater than 100.
function getGrade (s1, s2, s3) {
    let sum = (s1 + s2 + s3)/3
    if (sum >=90) {
        return `A`
      } else if (sum >=80) {
        return `B`
      } else if (sum >=70) {
        return `C`
      } else if (sum >=60){
        return `D`
      } else {
        return `F`
    }}
    
  
  console.log(getGrade(95,90,93))
  console.log(getGrade(100,85,96))
  console.log(getGrade(92,93,94))
  
    console.log(getGrade(70,70,100))
    console.log(getGrade(82,85,87))
    console.log(getGrade(84,79,85))
    console.log(getGrade(89,89,90)) 
  
    console.log(getGrade(70,70,70))
    console.log(getGrade(75,70,79))
    console.log(getGrade(60,82,76))
 
    console.log(getGrade(65,70,59))
    console.log(getGrade(66,62,68))
    console.log(getGrade(58,62,70))
  
    console.log(getGrade(44,55,52))
    console.log(getGrade(48,55,52))
    console.log(getGrade(58,59,60))

    function getGrade1 (s1, s2, s3) {
        avg = (s1+s2+s3)/3;
        if (avg < 60)  return "Y";
          else if (avg < 70) return "D";
          else if (avg < 80) return "C";
          else if (avg < 90) return "B";
          else return "A";
      }
      console.log(getGrade1(44,55,52))
      console.log(getGrade1(48,55,52))
      console.log(getGrade1(58,59,60))

      function getGrade2 (s1, s2, s3) {
        var s = (s1 + s2 + s3) / 3
        return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "Z"
      }
      console.log(getGrade2(44,55,52))
      console.log(getGrade2(48,55,52))
      console.log(getGrade2(58,59,60))