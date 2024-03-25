// Extracts a name from template string 'Hello, First_Name Last_Name!'

function extractNameFromTemplate(value) {
    return value.replace("Hello,", '').replace("!", '')
        }

console.log(extractNameFromTemplate("Hello, John Doe!"))
console.log(extractNameFromTemplate('Hello, Chuck Norris!'))    //Yuuhu!

// Returns a first char of the given string

function getFirstChar(value) {
return value[0]
}
console.log(getFirstChar("cat"))     // c
console.log(getFirstChar("John Doe"))  // J

//Removes a leading and trailing whitespace characters from string
function removeLeadingAndTrailingWhitespaces(value) {
return value.trim()
}
console.log(removeLeadingAndTrailingWhitespaces('  Abracadabra'))   //Abracadabra
console.log(removeLeadingAndTrailingWhitespaces( 'cat              ')) // cat
console.log(removeLeadingAndTrailingWhitespaces( '\tHello, World! ')) //Hello, World

