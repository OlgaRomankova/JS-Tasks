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