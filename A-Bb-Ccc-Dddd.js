// This time no story, no theory. The examples below show you how to write function accum:
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

//первый символ делаем прописным
const capitalizeFirstLetter = (s) => s.charAt(0).toUpperCase() + s.slice(1)
const accum = (str) => 
  str.split('') // разбиваем исходную строку на массив по символу
  .map((word, i) => capitalizeFirstLetter(Array(i+2).join(word).toLowerCase()))
  .join('-'); // объединяем полученные фрагменты (элементы массива)

// map(...) - копируем символ `i+2` раза, т.к. индекс массива начинается с 0, 
// приводим все к нижнему регистру, а потом первый символ к верхнему.


console.log(accum('abcd'));    // "A-Bb-Ccc-Dddd"
console.log(accum('RqaEzty')); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum('cwAt'));    // "C-Ww-Aaa-Tttt"

function accum1(s) {
	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}

console.log(accum1('abcd'));    // "A-Bb-Ccc-Dddd"
console.log(accum1('RqaEzty')); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum1('cwAt'));    // "C-Ww-Aaa-Tttt"

function accum3(s) {
	return s.split('')
  .map((item, index) => item.toUpperCase() + item.toLowerCase().repeat(index))
  .join('-');
}
console.log(accum3('abcd'));    // "A-Bb-Ccc-Dddd"
console.log(accum3('RqaEzty')); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum3('cwAt'));    // "C-Ww-Aaa-Tttt"