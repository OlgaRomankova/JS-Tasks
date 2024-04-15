function reverseWords(str) {
    return str.split("") // ("") разбивает на элементы
    .reverse()           // переворачивает все предложение
    .join("")            // ("") соединяет в слова
    .split(" ")          // ("_") разбирает на слова
    .reverse()           // переворачивает элементы с слове
    .join(" ")           // ("_") соберет в слова ("") соберет все вместе
};
console.log(reverseWords("sihT si na !elpmaxe"))
console.log(reverseWords("elbuod  secaps"))


function reverseWords1(str) {
    return str.split(' ').map(function(word){
      return word.split('').reverse(). join("")    
    }).join(" ")                         
  }
  console.log(reverseWords1("olleH !dlroW"))


  function reverseWords3(str) {
    return str.split(" ").map((word) => word.split("").reverse().join("")).join(" ");
  }
  console.log(reverseWords1("4321 8765"))