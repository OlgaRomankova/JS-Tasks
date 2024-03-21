function concatenateStrings(value1, value2) {
       let c
       c = value1 + value2
    return c
}
concatenateStrings("aa", "bb")
concatenateStrings("", "bb")
concatenateStrings("aa", "")

let string = concatenateStrings("aa", "bb")
console.log(string)

let string1 = concatenateStrings("", "bb")
console.log(string1)

let string2 = concatenateStrings("aa", "")
console.log(string2)

function getStringLength(value) {
        console.log(value.length)
    }
getStringLength("aaaaa")
getStringLength("b")
getStringLength("")


function getStringFromTemplate(firstName, lastName) {
    const greeting = "Hello"
    console.log(`${greeting}, ${firstName} ${lastName}!`)
}
getStringFromTemplate("Olga", "Romankova")
getStringFromTemplate("Kristina", "Garina")
getStringFromTemplate("Everybody!", "Have a nice day")


function concatenateStrings1(value1, value2) {
   console.log(value1 + value2)
 }
concatenateStrings1("aa", "bb")
concatenateStrings1("", "bb")
concatenateStrings1("aa", "")

