const java = 'JavaScript'
// Индексы начинаются с нуля
// Вызов метода и вычитание вместе!
const lastIndex = java.length - 1
console.log(lastIndex) // 9

// let's do it through a function

function lastCharacterIndex(value){
    return value.length - 1
}
console.log(lastCharacterIndex("JavaScript"))