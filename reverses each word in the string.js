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
console.log(reverseWords("olleH !dlroW"))