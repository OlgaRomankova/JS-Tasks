// hello new branch
// Returns a string that repeated the specified number of times.
// @param {string} value
// @param {string} count
// @return {string}
// @example
// 'A', 5 => 'AAAAA'
// 'cat', 3 => 'catcatcat'
// */
// function repeatString(value, count) {
// return
// }

function repeatString(value, count) {
    return value.repeat(count)
    }
    console.log(repeatString("A", 5))
    console.log(repeatString("cat", 3))

//     Remove the first occurrence of string inside another string
// @param {string} str
// @param {string} value
// @return {string}
// @example
// 'To be or not to be', 'not' => 'To be or to be'
// 'I like legends', 'end' => 'I like legs',
// 'ABABAB','BA' => 'ABAB'
// */
// function removeFirstOccurrences(str, value) {
// return
// }

function removeFirstOccurrences(str, value1) {
       return str.replace(value1, "")
    }
    console.log(removeFirstOccurrences('To be or not to be', 'not'))
    console.log(removeFirstOccurrences('I like legends', 'end'))
    console.log(removeFirstOccurrences('ABABAB','BA'))

//     Remove the first and last angle brackets from tag string
// @param {string} str
// @return {string}
// @example
// '
// ' => 'div'
// '' => 'span'
// '' => 'a'
// */
// function unbracketTag(str) {
// return
// }

function unbracketTag(str) {
    return str.slice(1, -1)
    }
    console.log(unbracketTag("<div>"))
    console.log(unbracketTag("<span>"))
    console.log(unbracketTag("<a>"))

// the second option
    function unbracketTag(str) {
        
        return str.match(/[\w+]/g).join('')
    }
        console.log(unbracketTag("<div>"))
        console.log(unbracketTag("<span>"))
        console.log(unbracketTag("<a>"))
//     Converts all characters of the specified string into the upper case
// @param {string} str
// @return {string}
// @example
// 'Thunderstruck' => 'THUNDERSTRUCK'
// 'abcdefghijklmnopqrstuvwxyz' => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// */
// function convertToUpperCase(str) {
// return

function convertToUpperCase(str) {
    return str.toUpperCase()
}
console.log(convertToUpperCase('Thunderstruck'))
console.log(convertToUpperCase('abcdefghijklmnopqrstuvwxyz'))

// Extracts e-mails from single string with e-mails list delimeted by semicolons
// @param {string} str
// @return {array}
// @example
// 'angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com' => ['angus.young@gmail.com', 'brian.johnson@hotmail.com', 'bon.scott@yahoo.com']
// 'info@gmail.com' => ['info@gmail.com']
// /
// function extractEmails(str) {
// return
// }
function extractEmails(str) {
    return str.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi)
    }
    console.log(extractEmails('angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com'))
    console.log(extractEmails('info@gmail.com'))

//     Returns true if the value is string; otherwise false.
// @param {string} value
// @return {boolean}
// @example
// isString() => false
// isString(null) => false
// isString([]) => false
// isString({}) => false
// isString('test') => true
// isString(new String('test')) => true
// */
// function isString(value) {
// }

function isString(value) {
       
    if (typeof value === 'string' || value instanceof String) {
       return ("true")} else {return ("false")}
  }
console.log(isString())
console.log(isString(null))
console.log(isString([]))
console.log(isString({}))
console.log(isString('test'))
console.log(isString(new String('test')))

