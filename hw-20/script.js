// 1)Сабакта жазылган код
const totalResult = JSON.parse(localStorage.getItem("total")) || {
    lose: 0,
    win: 0,
    nichya: 0,
  };
  showResultFromStorege();
  const resultp = document.querySelector(".result");
  function playGame(params) {
    const computerMove = computerSelect();
  
    if (params === "Кайчы") {
      if (computerMove === "Кайчы") {
        result = "тен";
      } else if (computerMove === "Кагаз") {
        result = "Утуш";
      } else if (computerMove === "Кудук") {
        result = "Утулуу";
      }
    }
    if (params === "Кудук") {
      if (computerMove === "Кудук") {
        result = "тен";
      } else if (computerMove === "Кагаз") {
        result = "Утулуу";
      } else if (computerMove === "Кайчы") {
        result = "Утуш";
      }
    }
    if (params === "Кагаз") {
      if (computerMove === "Кагаз") {
        result = "тен";
      } else if (computerMove === "Кудук") {
        result = "Утуш";
      } else if (computerMove === "Кайчы") {
        result = "Утулуу";
      }
    }
    if (result === "Утуш") {
      totalResult.win = totalResult.win + 1;
    } else if (result === "Утулуу") {
      totalResult.lose = totalResult.lose + 1;
    } else {
      totalResult.nichya = totalResult.nichya + 1;
    }
    showResultFromStorege();
  
    resultp.innerHTML = `Result:<span style='color:red'>${result}</span>`;
  
    document.querySelector(
      ".moves"
    ).innerHTML = `Сиз ${params} === Компьютер ${computerMove}`;
  
    localStorage.setItem("total", JSON.stringify(totalResult));
  
    document.querySelector(
      ".js_total"
    ).innerHTML = `Результат: w:${totalResult.win}, l:${totalResult.lose}, N:${totalResult.nichya}`;
  }
  
  function computerSelect() {
    const randomNumber = Math.random();
    let result = "";
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      result = "Кудук";
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      result = "Кайчы";
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      result = "Кагаз";
    }
    return result;
  }
  function showResultFromStorege() {
    document.querySelector(
      ".js_total"
    ).innerHTML = `Результат: w:${totalResult.win}, l:${totalResult.lose}, N:${totalResult.nichya}`;
  }
  // localStorage.setItem('magic', 677865768);
  // console.log(localStorage.getItem('magic'));
  
  // localStorage.setItem("parol",8987575454);
  // const sNumber = localStorage.getItem("parol");
  
  // console.log(sNumber);
  
  // const userTime = localStorage.setItem("time",new Date());
  
  // const students={
  //   name: "Ermamat",
  //   age: 22,
  //   phone: 911,
  // }
  // const perevestiVString = JSON.stringify(students);
  // console.log(perevestiVString);
  // const obratno = JSON.parse(perevestiVString);
  // console.log(obratno);
  // localStorage.setItem("student", perevestiVString);
  // const studentErmamat=JSON.parse(localStorage.getItem("student"));
  //  console.log(studentErmamat);
  const js = "124";
  // Бул тапшырма object жана математикадагы плюска тиешелуу.
  // 1.1 Бизде бир буюм бар, мисалы, баскетбол тобу (мяч). Бул продукттун аты бар - "баскетбольный мяч" жана баасы - 2095.
  // Эми объектке которуп бериниз .
  const basketball = {
    price: 2095,
  };
  // 1.2 Объектти тузгондон кийин консольго чыгарып бериниз.
  console.log(basketball);
  // 1.3 Эми буюмдун баасын өзгөртүү керек. Биз бааны 500гө көтөрөбүз.  (2590 деп жазып койбонуз сураныч) (математикадагы плюс менен кошуп бериниз).
  basketball.price = basketball.price + 500;
  // 1. 4 Озгондон объекти консольго коргозуп бериниз.+
  console.log(basketball);
  
  // Биз биздин продукт, баскетбол менен иштөөнү улантууда (устунку объект менен). Бизде анын аты бар - “баскетбольный мяч” жана баасы - 2595.
  // 2.1 Эми биз товарды жеткирүү убактысы тууралуу маалымат кошкубуз келет.
  // 'delivery-time' : ‘3 күн’
  // 2.2 Биз жеткирүү убактысын "3 күнгө" коюп, продукт маалыматын кайра консольк чыгарабыз.
  basketball.delivery_time = "3 күн";
  console.log(basketball);
  // У нас есть функция (function) comparePrice, которая принимает два товара и возвращает тот из них, у которого цена меньше. (google'dan котторо албай койдум)  функцияны сиз тузосуз!
  // Биз эки буюм жаратабыз (object): product1 - 2095 баасы бар, аты баскетбол тобу, ал эми product2 - 1090 баасы бар ,аты болсо байпак .
  // кыскасы байпактын баасы менен баскетбол тобун баасы менен салыштырып, керектуу туура объекти кайтарып бериниз . (Объектин ключтору менен салыштырып беринизчи сураныч)
  const baipak = {
    price: 1090,
  };
  function comparePrice() {
    if (basketball.price > baipak.price) {
      return baipak.price;
    }
    return basketball.price;
  }
  console.log(comparePrice());
  
  // Товардын аттары окшош экенин таап беретурган функция . Окшош болсо true , болбосо false кайтара турган функция
  // Биз эки аргумент алган isSameProduct функциясын аныктайбыз: продукт1 жана продукт2. Функциянын ичинде биз бул буюмдардын атын жана баасын салыштырабыз. Эгерде товардын аты да, баасы да бирдей болсо, функция чындыкты кайтарат, антпесе ал жалганды кайтарат
  const product1 = {
    name: "basketball",
    price: 2095,
  };
  
  const product2 = {
    name: "socks",
    price: 1090,
  };
  
  const product3 = {
    name: "basketball",
    price: 2095,
  };
  
  function isSameProduct(product1, product3) {
    if (product1 === product3) {
      return true;
    }
    return false;
  }
  console.log(isSameProduct());
  
  console.log(isSameProduct(product1, product2));
  // function isSameProduct1(){
  //   if(product1.name===product3.name && product1.price===product3.price){
  // return true;
  //   } return false;
  // }
  // console.log(isSameProduct1());
  
  // function isSameProduct2(){
  //   if(product1.name===product2.name && product1.price===product2.price){
  // return true;
  //   } return false;
  // }
  // console.log(isSameProduct2());
  
  // 5
  // Сапты кичине тамгага айландырыңыз
  // 'Good Morning'.
  // 'TESTING'
  // жон гана конослько коргозуп берсениз болот.
  const Good_Morning = "Good Morning";
  const TESTING = "TESTING";
  console.log(Good_Morning.toLowerCase());
  console.log(TESTING.toLowerCase());
  
  console.log("Good_Morning".toLowerCase());
  console.log("TESTING".toLowerCase());
  
  console.log("Good_Morning".toUpperCase());
  console.log("TESTING".toUpperCase());
  // 6)Саптын кайталанышы (google дан караныз , сабакта отулгон эмес) Консольго коргозуу гана жетет
  console.log("hello".repeat(2));
  console.log("test".repeat(3));
  
  // 7)DOM менен тапшырмалар
  
  // Баскыч элементин тандоо жана консолго чыгаруу
  console.log(document.querySelector("#seventh"));
  // 8)"js-button" классы менен баскычтын мазмунун өзгөртүү
  
  document.querySelector("#js_button").innerText = "Hello";
  // 9)Орел баскычын басканда Сенин тандооңуз: Орел   (экранга коргозуп бериниз)
  // ал эми кешка басканда Сенин тандооңуз: Решка (экранга коргозуп бериниз)
  const orel = document.getElementById("orel");
  const reshka = document.getElementById("reshka");
  const resultt = document.getElementById("resultt");
  
  orel.addEventListener("click", function () {
    resultt.textContent = "Сиздин тандооңуз: Орел";
  });
  
  reshka.addEventListener("click", function () {
    resultt.textContent = "Сиздин тандооңуз: Решка";
  });
  //   localStorage менен практика
  // 1.Озунуздун телефон номеринизди localStorage салып бериниз
  // 2. Андан сон , localStorage'тен алып бериниз (консльго коргозсонзу жетет)
  localStorage.setItem("MyPhoneNumber", "0772414637");
  console.log(localStorage.getItem("MyPhoneNumber"));
  
  localStorage.setItem("MyName", "Ermamat");
  console.log(localStorage.getItem("MyName"));
  
  localStorage.setItem("product", JSON.stringify(product1));
  console.log(JSON.parse(localStorage.getItem("product")));
  
  // person обьекттин экранга коргозуп бериниз, страницаны обновленние кылсам дагы очбосуу зарыл (Javascript менен кылып бериниз)
  // При загрузке страницы проверяем, есть ли данные в локальном хранилище
  
  
  const totalResultt = JSON.parse(localStorage.getItem("totall")) || {
    losee: 0,
    winn: 0,
  };
  showResultFromStoregee();
  const resultpp = document.querySelector(".Jyiyntyk");
  
  function playGame1(param) {
    const computerM = computer();
  
    if (param === "Бүркүт") {
      if (computerM === "Бүркүт") {
        Jyiyntyk = "Утуу";
      } else {
        Jyiyntyk = "Утул";
      }
    }
    if (param === "Куйруктар") {
      if (computerM === "Куйруктар") {
        Jyiyntyk = "Утуу";
      } else{
        Jyiyntyk = "Утул";
      } 
    }
   
    if (Jyiyntyk === "Утуу") {
      totalResultt.winn = totalResultt.winn + 1;
    } else if (Jyiyntyk === "Утул") {
      totalResultt.losee = totalResultt.losee + 1;
    }
  
    showResultFromStoregee();
  
    resultpp.innerHTML = `Resultt:<span style='color:red'>${Jyiyntyk}</span>`;
  
    document.querySelector(
      ".movess"
    ).innerHTML = `Сиз ${param} === Компьютер ${computerM}`;
  
    localStorage.setItem("totall", JSON.stringify(totalResultt));
  
    document.querySelector(
      ".js_totall"
    ).innerHTML = `Результат: winn:${totalResultt.winn}, losee:${totalResultt.losee}`;
  }
  
  function computer() {
    const randomNum = Math.random();
    let Jyiyntyk = "";
    if (randomNum >= 0 && randomNum <= 0.5) {
      Jyiyntyk = "Куйруктар";
    } else if (randomNum > 0.5 && randomNum < 1) {
      Jyiyntyk = "Бүркүт";
    } 
    return Jyiyntyk;
  }
  
  function showResultFromStoregee() {
    document.querySelector(
      ".js_totall"
    ).innerHTML = `Результат: winn:${totalResultt.winn}, losee:${totalResultt.losee}`;
  }
  