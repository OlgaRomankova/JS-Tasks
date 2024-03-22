// Extracts a name from template string 'Hello, First_Name Last_Name!'

function extractNameFromTemplate(value) {
    let c = value.replace("Hello,", '')
    let d = c.replace("!", '')
    return d
    }

console.log(extractNameFromTemplate("Hello, John Doe!"))
console.log(extractNameFromTemplate('Hello, Chuck Norris!'))    //Yuuhu!

// Returns a first char of the given string

function getFirstChar(value) {
return value[0]
}
console.log(getFirstChar("cat"))
console.log(getFirstChar("John Doe"))

//Removes a leading and trailing whitespace characters from string
function removeLeadingAndTrailingWhitespaces(value) {
return value.trim()
}
console.log(removeLeadingAndTrailingWhitespaces('  Abracadabra'))
console.log(removeLeadingAndTrailingWhitespaces( 'cat              '))
console.log(removeLeadingAndTrailingWhitespaces( '\tHello, World! '))

