// 2)Создайте кнопку с зеленным фоном с текстом ON
// Если кликнем на кнопку то текст должен поменяться на OFF , а цвет фона красным

function changeButtonText() {
    const btn = document.querySelector(".on");
    if (btn.innerText === "ON") {
      btn.innerHTML = "OFF";
      btn.classList.toggle("extra-class");
    } else {
      btn.innerHTML = "ON";
      btn.classList.toggle("extra-class");
    }
  }
  // 3)Инпутка атын жазган болсо ылдыйкы суроттко окшотуп чыгарып бериниз
  const input = document.querySelector("#input");
  const result = document.querySelector("#result");
  const btn = document.querySelector("#submit");
  
  btn.addEventListener("click", () => {
    result.innerHTML = input.value;
    input.value = "";
  });
  // // Учунчу тапшырманы ENTER баскычын басканда  иштейтурган кылып бериниз
  const input2 = document.querySelector("#input2");
  const result2 = document.querySelector("#result2");
  
  input2.addEventListener("keyup", function (e) {
    if (e.code === "Enter") {
      result2.innerHTML = input2.value;
      input2.value = "";
    }
  });
  //   Инпутка жазган нерсем ылдыйда чыгып туруу заарыл.
  function showInputValue() {
    console.log(event.target.value);
    document.querySelector(".heading").innerText = event.target.value;
  }
  // У classList есть еще один метод, classList.contains('class-name'),
  // // который проверяет, есть ли у элемента класс.
  // // Используйте document.querySelector() и classList.contains('js-button'), чтобы проверить, имеет ли эта кнопка класс 'js-button'.
  // // Потом просто выведите результат в консоль
  // const btn =document.querySelector("#js-button")
  // console.log(btn);
  // const showClass=()=>{
  //     if (btn.classList.contains("js-button")){
  //         return ("В кнопке есть класс 'js-button'");
  //      }else{
  //          return ("В кнопке нет класс 'js-button'");
  //      };
  //     }
  //     btn.onclick=function(){
  //         alert(showClass);
  //     }
  
  // // Создайте кнопку с зеленным фоном с текстом ON
  // // Если кликнем на кнопку то текст должен поменяться на OFF , а цвет фона красным
  // const btn2=document.querySelector("#elem");
  
  // function changeButtonText(btn){
  //     if( btn2.innerText === "ON"){
  // btn2.innerHTML = "OFF";
  // btn2.classList.add("extra-class");
  //     }else{
  //         btn2.innerHTML = "ON";
  //         btn2.classList.remove("extra-class");
  //     }
  // }
  
  // console.log(document.querySelector('h1'));
  
  // let user={
  //     name: 'Ermamat',
  //     age: '22',
  //     teacher: true,
  //     money: undefined,
  //     friends: null,
  // }
  // console.log(typeof user.age);
  // console.log(typeof user.name);
  // console.log(typeof user.teacher);
  // console.log(typeof user);
  // console.log(typeof user.friends);
  
  // if(typeof user.age === "string")
  // console.log(user.age+14);
  
  // console.log(document.querySelector('.js-button'));
  // const btn =document.querySelector('.js-button');
  
  // function changeButtonText(parametr){
  //     const btn =document.querySelector(`${parametr}`);
  // if(btn.innerText ==='Subscribe'){
  //     btn.innerHTML = 'Subscribed';
  //     btn.classList.toggle('extra-class');
  // }else{
  //     btn.innerHTML ='Subscribe';
  //     btn.classList.toggle('extra-class');
  // }
  // }
  // let inputValue =document.querySelector('.js-input');
  // let result = document.querySelector('.result');
  // function calculate(){
  //     let total=0
  //     const newInpValue = Number(inputValue.value)
  //     if (newInpValue>40){
  //        total= 40+newInpValue;
  //     }else{
  //         total=40-newInpValue;
  //     }
  //     result.innerHTML=total;
  // }
  
  // function showInputValue(){
  //     console.log(event.target.value);
  //     document.querySelector('.heading').innerText= event.target.value;
  // }
  
  // const MyBtn = document.querySelector('.btn1');
  // function showExample(){
  //     document.querySelector('.text').innerHTML='Hello';
  // }
  // // MyBtn.onmouseleave=showExample;
  // MyBtn.addEventListener('click',showExample)
  