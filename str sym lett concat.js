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

const name = 'JavaScript';
// Используется интерполяция
// console.log(`Последний символ: ${name[length(name) - 1]}`);
// 'Последний символ: t'

function lastSymbol(value1){
   let c = value1.length - 1
       return value1[c]
}
console.log("Last symbol:", lastSymbol("JavaScript"))

function lastSymbol(value2){
    return value2[value2.length - 1]        
 }
 console.log("Last symbol:", lastSymbol("JavaScript"))

//  Print the first and last letters of the sentence written 
// in the text constant in the following format: 
// First: N
// Last: t
 const text = 'Never forget what you are, for surely the world will not';
 console.log(`${"First:"} ${text[0]}\n${"Last:"} ${text[text.length - 1]}`)

 // let's do it through a function
 function firstAndLastSymbol(value3){
    return (`${"First:"} ${value3[0]}\n${"Last:"} ${value3[value3.length - 1]}`)        
 }
 console.log(firstAndLastSymbol("JavaScript"))
 console.log(firstAndLastSymbol("Never forget what you are, for surely the world will not"))