const arr = ['permanent-internship', 'glutinous-shriek', 'multiplicative-elevation'];
const upper = arr.map(element => {
  return element.toUpperCase();
});
console.log(upper);
                                                // ✅ convert all array elements to Uppercase
const arr1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
const upper1 = [];
arr1.forEach(element => {
  upper1.push(element.toUpperCase());
});
console.log(upper1);

function getUpperCaseStrings(arr2) {
    const upper2 = [];
    arr2.forEach(element => {
    upper2.push(element.toUpperCase());
         });
         }
    console.log(getUpperCaseStrings(['permanent-internship', 'glutinous-shriek', 'multiplicative-elevation']))
    console.log(getUpperCaseStrings([ 'a', 'b', 'c', 'd', 'e', 'f', 'g']))

    var massiv = [ {'ff':'ff'}, 123, [],  "stroka1", [456], "stroka3", {'dd':'rr'}, 
    "stroka2", 567, "stroka5", 183, "stroka6", true, false, "stroka4"]
    massiv.filter(i => i.constructor.name == "String")