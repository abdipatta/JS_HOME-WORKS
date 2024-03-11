//1-zadacha    Используйте деструктуризацию объекта, чтобы извлечь значения свойств и сохранить их в отдельные переменные.
console.log("1-zadacha");
const user1 = {
  id: 1,
  first_name: "Garrott",
  last_name: "Eberdt",
  email: "geberdt0@wp.com",
  gender: "Male",
  ip_address: "49.230.15.110",
  isAdmin: true,
};
const { id, first_name, last_name, email, gender, ip_address, isAdmin } = user1;
console.log(id);
console.log(first_name);

// 2-zadacha   Используйте деструктуризацию массива, чтобы извлечь значения и сохранить их в отдельные переменные.
console.log("2-zadacha");
const fruits = ["apple", "banana", "lemon", "kiwi", true];
const [apple, banana, lemon, kiwi, boolen] = fruits;
console.log(apple);
console.log(banana);
console.log(boolen);

// 3-zadacha    Используйте деструктуризацию , чтобы извлечь значения. Для каждого объекта в массиве!
console.log("3-zadacha");
const workers = [
  {
    id: 1,
    name: "Emile",
    lastname: "Van Weedenburg",
    email: "evanweedenburg0@technorati.com",
  },
  {
    id: 2,
    name: "Orv",
    lastname: "Gretton",
    email: "ogretton1@about.me",
  },
];
workers.forEach(({ id, name, lastname, email }) => {
  console.log({ id }, { name }, { lastname }, { email });
});

// 4-zadacha    Создайте переменную с именем 'add' и сохраните в ней функцию. Эта функция будет выводить console.log(2+3) ; Запустите функцию дважды
console.log("4-zadacha");
// function sum(){
//   return 2+3
// }
// // console.log(sum());
// const add=sum();
// console.log(add);
// console.log(add);

let add = function () {
  console.log(2 + 3);
};
add();
add();
//5-zadacha   Продолжая упражнение 1, создайте функцию runTwice(fun), которая принимает функцию (в качестве параметра) и запускает ее дважды.
//           runTwice(function() {console.log('12b')}); ===> console.log('12b') дважды
//           runTwice(add) ===> console.log(5) дважды
console.log("5-zadacha");
function runTwise(fun) {
  fun();
  fun();
}

runTwise(function () {
  console.log("12b");
});

console.log(runTwise(add));

// 6-zadacha    Создайте кнопку ниже. При нажатии на кнопку через 2 секунды текст внутри кнопки изменится на "Finished".
//7-zadacha   Продолжая упражнение 1, измените кнопку так, чтобы при нажатии на нее текст сразу менялся на "Loading...", а через 2 секунды - на "Finished".

const btn = document.querySelector("#Start");

btn.addEventListener("click", function () {
  btn.textContent = "Loading...";
  setTimeout(function () {
    btn.textContent = "Finished";
  }, 2000);
});
//8-zadacha    Создайте кнопку "Add to cart" . При нажатии на эту кнопку отобразите сообщение "Added" под кнопкой. Затем, через 2 секунды, уберите сообщение.
const addBtn = document.querySelector("#addToCartButton");
const messageDiv = document.querySelector("#message");

addBtn.addEventListener("click", function () {
  messageDiv.textContent = "Added";
  setTimeout(function () {
    messageDiv.textContent = "";
  }, 2000);
});
//9-zadacha    Представьте, что мы создаем приложение для обмена сообщениями. Используем setInterval() и document.title для создания функции внизу (заголовок меняется каждые 5 секунд)
function changeTitle() {
  let titles = ["(2) New messages", "App"];
  let currentIndex = 0;
  let interId = setInterval(function () {
    document.title = titles[currentIndex];
    currentIndex = (currentIndex + 1) % titles.length;
  }, 5000);
  return interId;
}
changeTitle();
//10-zadacha   for of loop'ту колдонуп computers array'дин ичиндеги элементердин price свойствосунун сммасын табыныз
console.log("10-zadacha");
const computers = [
  {
    title: "Mackbook Air M1",
    price: 85000,
  },
  {
    title: "Dell",
    price: 65000,
  },
  {
    title: "Asus ZenBook",
    price: 40000,
  },
  {
    title: "Acer Aspire",
    price: 45000,
  },
  {
    title: "Mackbook Pro",
    price: 100000,
  },
];
let totalPrice = 0;
for (const computer of computers) {
  totalPrice += computer.price;
}
console.log("The total price of all computers:", totalPrice);

// const myArray = ["yellow", 100, true, "toyota", { name: "Asan", id: 883 }];
// // let color = myArray[0];
// // console.log(color);
// // let num = myArray[1];
// // console.log(num);
// // let bool = myArray[2];
// // console.log(bool);
// // let user = myArray[4];
// // console.log(user);
// let [uuu, san, , , user] = myArray;
// console.log(uuu);
// console.clear();

// const rect = { width: 100, heigth: 200 };
// let { heigth, width } = rect;

// console.log(heigth);
// console.log(width);
// console.clear();

// const newObj = {
//   name: "User",
//   addres: {
//     town: "Bishkek",
//     street: "Chuy",
//   },
// };
// const {
//   name: adamdynAty,
//   addres: { town, street },
// } = newObj;

// console.log(adamdynAty);
// console.clear();

// const coinFlip = (params) => {
//   let orel = 0;
//   let reshka = 0;
//   for (let i = 1; i <= params; i++) {
//     if (Math.random() > 0.5) {
//       orel = orel + 1;
//     } else {
//       reshka = reshka + 1;
//     }
//   }
//   return { orel: orel, reshka: reshka };
// };

// const result = coinFlip(500);
// console.log(result);

// function saveOrGetFromLocal(obj, key) {
//   const icMatching = localStorage.getItem(key);
//   if (!icMatching) {
//     localStorage.setItem(key, JSON.stringify(obj));
//     return "Saved";
//   } else {
//     return JSON.parse(localStorage.getItem(key));
//   }
// }
// console.log(saveOrGetFromLocal({ user: "Ermamat" }, "user"));

// console.clear();

// function decloration() {
//   console.log("decloration");
// }

// // let myFunction = function () {
// //   console.log("work");
// // };

// // const arrowFn = () => {
// //   console.log("arrow");
// // };
// (function () {
//   console.log("work");
// })();

// (() => {
//   console.log("arrow");
// })();

// // const arrowFn = (param) => {
// //   return param * param;
// // };
// // console.log(arrowFn(4));

// // const arrowFn = (param) =>param * param;
// //   console.log(arrowFn(4));

// // const showObj=(param)=>{
// //     console.log(param,);
// // }

// function example(param) {
//   param();
// }
// example(function () {
//   console.log("error");
// });
// example(() => {
//   console.log("strelka");
// });
// console.clear();

// // setTimeout(function(){
// //     console.log("timeout");
// // }, 5000)

// const myButton = document.querySelector(".button");
// function showConsole() {
//   myButton.innerHTML = "loading...";
//   setTimeout(function showConsole() {
//     goBack();
//   }, 3000);

// }
// showConsole();

// function goBack() {
//   myButton.innerHTML = 'Add';
// }

// setInterval(() => {
//   console.log("work");
// }, 1000);

// const timer = document.querySelector("#timer");
// let timerValue = 0;
// let timerID = null;
// function updateTimer() {
//   timer.innerHTML = timerValue;
// }
// function startTimer() {
//     if (timerID===null){
//         timerID = setInterval(() => {
//         timerValue++;
//         updateTimer();
//       }, 100);
//       console.log(timerID);
// }
// setTimeout(()=>{
// clearInterval(timerID);
// timerID=null;
// timerValue=0
// updateTimer();
// },10000)
// }
// function stopTimer() {
//     clearInterval(timerID);
//     timerID=null;
// }

// function resetTimer(){
//     clearInterval(timerID)
//     timerID=null;
//     timerValue=0;
//     updateTimer();
// }
