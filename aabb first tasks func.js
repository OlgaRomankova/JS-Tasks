function concatenateStrings(value1, value2) {
       let c
       c = value1 + value2
    return c
}
console.log(
"first result-",
concatenateStrings("aa", "bb"), "second result-",
concatenateStrings("", "bb"), "third result-",
concatenateStrings("aa", ""))




function getStringLength(value) {
    return value.length
    }
console.log(getStringLength("aaaaa"))
console.log(getStringLength("b"))
console.log(getStringLength(""))


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

