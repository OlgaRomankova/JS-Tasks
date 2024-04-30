// Spread
// В какой-то момент мы решаем создать еще один массив, 
// который будет включать все сериалы из обоих массивов. Как это сделать?

// Мы можем использовать метод .concat(), 
// который возвращает новый массив, состоящий из элементов 1-го и 2-го массива.

const tvSeriesOne = ['Ozark', 'Fargo', 'Dexter']
const tvSeriesTwo = ['Mr. Robot', 'Barry', 'Suits']
const tvSeries = tvSeriesOne.concat(tvSeriesTwo);
console.log(tvSeries)     // [ "Ozark", "Fargo", "Dexter", "Mr. Robot", "Barry", "Suits" ]

// Что если мы захотим вставить сериал Sherlock в середину нашего общего списка?

// Теоретически, мы также сможем это сделать с помощью метода .concat():

const tvSeriesOne1 = ['Ozark', 'Fargo', 'Dexter'];
const tvSeriesTwo1 = ['Mr. Robot', 'Barry', 'Suits'];
let tvSeries1 = [];
tvSeries1 = tvSeries1.concat(tvSeriesOne1);
tvSeries1.push('Sherlock');
tvSeries1 = tvSeries1.concat(tvSeriesTwo1);
console.log(tvSeries1);
// [ "Ozark", "Fargo", "Dexter", "Sherlock", "Mr. Robot", "Barry", "Suits" ]
// Если использовать оператор spread, то наш код будет выглядеть более коротко и понятно.
// Так будет выглядеть создание одного общего массива с помощью оператора spread:
const tvSeriesOne2 = ['Ozark', 'Fargo', 'Dexter'];
const tvSeriesTwo2 = ['Mr. Robot', 'Barry', 'Suits'];
const tvSeries2 = [...tvSeriesOne2, ...tvSeriesTwo2];
const tvSeries3 = [...tvSeriesOne2, 'Sherlock', ...tvSeriesTwo2];
console.log(tvSeries2);
console.log(tvSeries3)
// [ "Ozark", "Fargo", "Dexter", "Mr. Robot", "Barry", "Suits" ]
// 1-й способ создать копию массива – использовать метод .concat():

let allSeriesList4 = [].conctat(tvSeries);
// 2-й способ - с помощью оператора spread. 
// Можно создать новый пустой массив и добавить в него 
// каждый элемент исходного массива.

const tvSeriesOne4 = ['Ozark', 'Fargo', 'Dexter'];
const tvSeriesTwo4 = ['Mr. Robot', 'Barry', 'Suits'];
const tvSeries4 = [...tvSeriesOne, 'Sherlock', ...tvSeriesTwo];
// Создаем копию
const allSeriesList = [...tvSeries];
// Меняем первый элемент новго массива
allSeriesList[0] = 'Friends';
console.log(tvSeries);
// [ "Ozark", "Fargo", "Dexter", "Sherlock", "Mr. Robot", "Barry", "Suits" ]
console.log(allSeriesList);
// [ "Friends", "Fargo", "Dexter", "Sherlock", "Mr. Robot", "Barry", "Suits" ]
// Таким образом, мы использовали оператор spread, 
// чтобы создать копию массива tvSeries. Наши изменения в 
// новом массиве allSeriesList никак не затронули исходный массив tvSeries.