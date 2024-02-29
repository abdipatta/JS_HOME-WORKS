вернутЗдачи(500, 30);
      let result = вернутЗдачи(500, 30);
      alert(вернутЗдачи(500, 30));

      function Ermamat(name, surname) {
        return name + surname;
      }
      Ermamat("Erma ", "AbdipattUulu");
      alert(Ermamat("Erma", "AbdipattUulu"));

      let b = ".com";
      function pluscom(a, b) {
        return a + b;
      }
      alert(pluscom("Adilet", b));
      //1-zadacha
      function showmsg() {
        alert("Hello");
      }
      showmsg();
      //2-zadacha
      function sum(a, b) {
        return a + b;
      }

      alert(sum(7, 5));
      //3-zadacha
      function kvadrat(chislo) {
        return chislo * chislo;
      }
      alert(kvadrat(7));
      //4-zadacha
      let привет = "Hello";
      function приветствие(привет, имя) {
        return привет + имя;
      }
      alert(приветствие(привет, " Ermamat"));
      //5-zadacha
      function обьединение(firststring, secondstring) {
        return firststring + secondstring;
      }
      alert(обьединение("биринчисап", "экинчисап"));

      //6-zadacha
      function четнечет(проверка) {
        if (проверка % 2 === 0) {
          return "четный";
        }
        return "Нечетный";
      }
      alert(четнечет(4));
      //7-zadacha
      function большее(firstchislo, secondchislo) {
        if (firstchislo > secondchislo) {
          return firstchislo;
        }
        return secondchislo;
      }
      alert(большее(100, 30));
      //8-zadacha
      function узундугу(строка) {
        return строка.length;
      }
      alert(узундугу("Ermamat"));
      //9-zadacha
      function приветимявозраст(аты, жашы) {
        return `Привет. ${аты}! Тебе ${жашы}лет.`;
      }
      alert(приветимявозраст("Ermamat", 21));
      //10-zadacha
      function возвратсуминачеразность(биринчисан, экинчисан) {
        if (биринчисан > 10 && экинчисан > 10) {
          return биринчисан + экинчисан;
        }
        return биринчисан - экинчисан;
      }
      alert(возвратсуминачеразность(9, 12));

      function podezd(batir) {
        if (batir >= 1 || batir <= 20) {
          console.log("1-podezd");
        } else if (batir >= 21 || batir <= 48) {
          console.log("2-podezd");
        } else if (batir >= 49 || batir <= 90) {
          console.log("3-podezd");
        }
        console.log("Bul jerde jok!");
      }
      podezd(1);