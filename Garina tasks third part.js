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
    console.log(unbracketTag("div"))
    console.log(unbracketTag("span"))
    console.log(unbracketTag("a"))

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