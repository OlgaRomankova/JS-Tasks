// Добавление/удаление элементов
// arr.push(...items) – добавляет элементы в конец,
// arr.pop() – извлекает элемент из конца,
// arr.shift() – извлекает элемент из начала,
// arr.unshift(...items) – добавляет элементы в начало.
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let pusharray = array.push(11)
console.log(array)
let poparray = array.pop()
console.log(array)
let shiftarray = array.shift()
console.log(array)
let unshiftarray = array.unshift(0)
console.log(array)
// arr.splice() – Метод arr.splice – это универсальный «швейцарский нож»
//  для работы с массивами. Умеет всё: добавлять, удалять и заменять элементы.
let splicearray = array.splice(0, 2); // начиная с индекса 1, удалить 1 элемент
let spliceAddArray = array.splice(0, 3, "Давай", "танцевать")
console.log(array)
console.log(spliceAddArray) // массив из удалённых элементов
// slice



