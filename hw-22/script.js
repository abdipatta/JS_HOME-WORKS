//1-задача     1 - 100 чейинки сандарды чыгаруу (console'го) for loop
console.log("1-тапшырма");
for (let i = 1; i < 100; i = i + 1) {
  console.log(i);
}

//2-задача     1 - 100 чейинки жуп(четный) сандарды чыгаруу (console'го) for loop
console.log("2-тапшырма");
for (let i1 = 0; i1 < 100; i1 = i1 + 2) {
  console.log(i1);
}

//3-задача     1 - 100 чейинки сандардын жуп(четный) сандарынын суммасын чыгаруу. Мисалы 2, 4, 6 ж. б. (console'го) for loop
console.log("3-тапшырма");
let sum = 0;
for (let i = 0; i < 100; i = i + 2) {
  sum += i;
}
console.log(sum);
// 4-задача     Сандар массивин түзүңүз:const nums = [10,20,30]
// Бул массивдеги акыркы мааниниcин 99га өзгөртүңүз
console.log("4-тапшырма");
const nums = [10, 20, 30];
nums[2] = 99;
console.log(nums);
//5-задача    Создайте функцию getLastValue(array), которая принимает массив и возвращает последнее значение в массиве.
// Подсказка: индексы массивов начинаются с 0, поэтому последний индекс равен количеству значений в массиве минус 1
// (lastIndex = array.length - 1)
// getLastValue([1,20,22,24,5]) ====> 5
//   getLastValue(['hi','hello','good']) ===> ‘good’
console.log("5-тапшырма");
const array = ["erma", "era", "erik"];
function getLastValue(array) {
  console.log(array[array.length - 1]);
}
getLastValue(array);
// 6-задача    Создайте цикл for, который ведет обратный отсчет от 5 до 0
// 5
// 4
// 3
// 2
// 1
// 0
console.log("6-тапшырма");
for (let i2 = 5; i2 <= 5 && i2 >= 0; i2 = i2 - 1) {
  console.log(i2);
}
//7-задача  1 - 100 чейинки сандарды чыгаруу (console'го) while циклыны колдонунуз
console.log("7-тапшырма");
let i3 = 1;
while (i3 < 100) {
  console.log(i3);
  i3 = i3 + 1;
}
// 8-задача     1 - 100 чейинки жуп(четный) сандарды чыгаруу (console'го) while циклыны колдонунуз
console.log("8-тапшырма");
let i4 = 0;
while (i4 < 100) {
  console.log(i4);
  i4 = i4 + 2;
}
//9-задача     Создайте цикл, который принимает массив чисел и создает новый массив, в котором каждое число увеличивается на 1
// [1,2,3] ===> [2,3,4]
console.log("9-тапшырма");
let numbers = [1, 2, 3, 4, 5];
let i5 = numbers.map((x) => x + 1);
console.log(i5);
//10-задача  Создайте функцию addNum(array,num), которая принимает массив чисел и возвращает массив, в котором каждое число увеличено на 'num'
console.log("10-тапшырма");
const num3 = [1, 4, 9];
const addNum = (array, num) => {
  let newArray = [];
  for (i = 0; i < array.length; i++) {
    newArray.push(array[i] + num);
  }
  return newArray;
};
console.log(addNum(num3, 5));

// 11-задача     Создайте массив strings, пройдитесь по нему циклом и проверьте, находится ли строка 'search' внутри массива. Если да, console.log(2) (индекс 'search' в массиве). Если нет, console.log '-1'
// const strings = ["hello", "world", "search", "good"];
// console.log(strings.indexOf("search"));
console.log("11-тапшырма");
const strings = ["hello", "world", "search", "good"];

let searchIndex = -1;
for (let i6 = 0; i6 < strings.length; i6++) {
  if (strings[i6] === "search") {
    searchIndex = i6;
    break;
  }
}

if (searchIndex !== -1) {
  console.log(searchIndex);
} else {
  console.log("-1");
}
//12-задача      Создайте функцию countPositive(nums), которая принимает массив чисел и возвращает, сколько чисел в массиве больше 0.
console.log("12-тапшырма");
function countPositive(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      count++;
    }
  }
  return count;
}

const numberss = [1, -3, 5];
const numbersss = [-2, 3, -5, 7, 10];
console.log(countPositive(numbersss));
console.log(countPositive(numberss));
//13-задача      Создайте функцию removeEgg(foods), которая принимает массив строк и возвращает массив, из которого удалена строка 'egg'.         (подсказка: пройдитесь по массиву и проверьте, является ли каждая строка "яйцом". Если это "яйцо", используйте 'continue;', чтобы  пропустить  его. Если это не "яйцо", добавьте его к результату)
console.log("13-тапшырма");
const foods = ["egg", "apple", "egg", "ham"];
function removeEgg(foods) {
  let result = [];
  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === "egg") {
      continue;
    }
    result.push(foods[i]);
  }
  return result;
}
console.log(removeEgg(foods));
// 14-задача     Создайте функцию findIndex(array,word), которая ищет в массиве строку (в параметре 'word') и возвращает индекс первого появления этой строки. Если ее нет в массиве, верните - 1.
console.log("14-тапшырма");
const array1 = ["green", "red", "blue", "red"];
const word = ["green", "red", "blue", "red"];
function findIndex(array1, word) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === word) {
      return i;
    }
  }
  return -1;
}
console.log(findIndex(array1, word));
console.log(findIndex(array1, "kiwi"));

//15-задача     Создайте функцию addArrays(array1,array2), которая берет 2 массива чисел и складывает каждое число в массивах вместе
console.log("15-тапшырма");
const array2 = [1, 1, 2];
const array3 = [1, 1, 3];
function addArrays(array2, array3) {
  const maxLength = Math.max(array2.length, array3.length);
  const result = [];
  for (let i = 0; i < maxLength; i++) {
    const num1 = array2[i] || 0;
    const num2 = array3[i] || 0;
    result.push(num1 + num2);
  }
  return result;
}

console.log(addArrays(array2, array3));

//16-задача    Создайте функцию minMax(nums), которая принимает массив чисел и возвращает объект с минимальным и максимальным числами в массиве (сделайте это с помощью цикла, а не используя что-то вроде Math.min)
console.log("16-тапшырма");
const numberssss = [1, -3, 5];
const numbersssss = [-2, 3, -5, 7, 10];
function minMax(nums) {
  if (nums.length === 0) {
    return null;
  }
  let min = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
    } else if (nums[i] > max) {
      max = nums[i];
    }
  }
  return { min: min, max: max };
}

console.log(minMax(numberssss));
console.log(minMax(numbersssss));

// 17-задача     Создайте функцию countWords(words), которая принимает массив строк и возвращает объект с количеством появлений каждой строки.        (Подсказка: вы можете получить доступ к объекту с помощью переменной: object[variable];
//   при этом в качестве имени свойства используется значение внутри переменной)
console.log("17-тапшырма");
const words = ["apple", "grape", "apple", "apple"];
function countWords(words) {
  const wordCount = {};
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (wordCount[word]) {
      wordCount[word]++;
    } else {
      wordCount[word] = 1;
    }
  }
  return wordCount;
}

console.log(countWords(words));

// while (strings.indexOf("search")===true) {
//     console.log(strings.indexOf('search'));
//     console.log(-1)
//   }

// const myFirstArray1=[
// 1,2,3
// ]
// console.log(myFirstArray1);

// const infoArray1=[
//   'Kyrgyz','russia',
// ]
// console.log(infoArray1);

// console.log(infoArray1[0]);

// const someNumber1=1;
// console.log(infoArray1[someNumber1]);

// const myFirstArray = [1, 2, 3];
// console.log(myFirstArray);
// const myFirstObj = {
//   3: 1,
//   4: 2,
//   2: 3,
// };

// console.log(myFirstObj);

// const infoArray = ["Russia", "Bishkek", 144, { srudent: "Erma" }, [88, 99]];
// console.log(infoArray);
// console.log(infoArray[1]);

// const someNumber = 0;
// console.log(infoArray[someNumber]);

// const array = [10, 20, 30, 40, "Ermamat"];
// console.log(array);
// console.log(array[2]);
// console.log(array[4]);
// array[4] = "Erma";
// console.log(array);
// console.log(array.length);

// const newArr = [20, 30, 90];
// console.log(newArr);
// newArr.splice(1, 1);
// console.log(newArr);

// const todoList = ["Ermamat", "Asan", "Aitkul"];

// function addToDo() {
//   const inputValue = document.querySelector(".js-button");
//   todoList.push(inputValue.value);
//   console.log(inputValue.value);
// }
// console.log(typeof[2,3]);
// // console.log(Arrray.isArray(todoList));
// let index = 1;
// while (index <= 5) {
//   console.log(index);
//   index = index + 1;
// }
// //  console.clear();
// let i = 0;
// while (i < todoList.length) {
//   console.log(i);
//   i = i + 1;
// }
// console.log("work");

// let b = 2;
// console.log(b);
// console.log(todoList[b]);

// for(let c=0; c<5; c=c+1){
//     console.log(c);
// }
// const nums=[1,2,3,4]
// let total=0;
// for (let i=0; i<4){

// }
// const todoList = ["Ermamat", "Asan", "Aitkul"];

// function addToDo() {
//   const inputValue = document.querySelector(".js-button");
//   todoList.push(inputValue.value);
//   console.log(inputValue.value);
// }

// let index = 0;
// while (index < 100) {
//   console.log(index);
//   index = index + 2;
// }

// let index1 = 1;
// while (index1 < 100) {
//   console.log(index1);
//   index1 = index1 + 1;
// }

// for (let i = 1; i >= 1 && i < 100; i++) {
//   console.log(i);
// }

// for (let i1 = 1; i1 < 100; i1++) {
//   console.log(i1);
// }

// let index3 = 1;
// while (index3 < 100) {
//   console.log(index3);
//   index = index3 + 2;
// }

// for (let i2 = 1; i2 < 100; i2 = i2 + 2) {
//   console.log(i2);
// }
