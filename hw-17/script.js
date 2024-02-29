             //1-zadacha
             const a = 10;
             if (a === 10) {
               console.log("Tuura");
             } else {
               console.log("Tuura emes");
             }
       
             // 2-zadacha
             let apartment = 90;
             if (apartment < 1) {
               console.log("bul jerde jok");
             } else if (apartment <= 20) {
               console.log("1-podiezd");
             } else if (apartment <= 48) {
               console.log("2-podiezd");
             } else if (apartment <= 90) {
               console.log("3-podiezd");
             } else if (apartment > 90) {
               console.log("bul jerde jok");
             } else {
               console.log("bul jerde jok");
             }
       
             // 3-zadacha
             let a1 = 5;
             if (a1 <= 0) {
               console.log(false);
             } else if (a1 <= 5) {
               console.log(true);
             } else if (a1 > 5) {
               console.log(false);
             }
       
             //4_5-zadacha
             const a_clock = 6;
             let name = "Ermamat";
             if (a_clock >= 6 && a_clock < 12) {
               console.log(`Kutman tan ${name} `);
             } else if (a_clock >= 12 && a_clock < 17) {
               console.log(`Kutman kun ${name}`);
             } else {
               console.log(`kutman kech ${name}`);
             }
       
             //5-zadacha
             let names = "Ermamat";
             console.log(`kutman kech, ${names}`);
             //5.1-zadacha
             let names1 = prompt(`Atynyzdy jazynyz!`);
             console.log(`Kutman kech, ${names}`);
       
             //6-zadacha
             const age = +prompt(`Kancha jashtasyz? Jashynyzdy jazynyz!`);
       
             if (age <= 6 || age >= 65) {
               console.log(`Sizdin jashynyz ${ages}jashta. Sizge arzandatuu bar!`);
             } else {
               console.log(`Sizge arzandatuu jok!`);
             }
       
             //7-zadacha
             const coin = Math.random();
             if (coin < 0.5) {
               console.log(`Orel!`);
             } else {
               console.log(`Reshka!`);
             }
             //8-zadacha
             const number = 7; //bul jerde "const"-bashky soz, "number" - ozgormonun aty, "="- jetini jep numberge salat, "7"-ozgormo.
       
             if (number % 2 === 0) {
               //"if"-eger dep kaashanyn ichine sharty jazylat. Bul jerde numberdegi san ekige bolungondon kalgan kaldyk nolgo barabar bolso san jup bolboso tak dep chygarat.
               console.log("Число чётное");
             } else {
               console.log("Число нечётное");
             }
             //9-zadacha
             let num = 5;
             num === 5 ? console.log("Five") : console.log("Not five");
             //9.1-zadacha
             let num1 = 4;
             console.log(num1 === 5 ? "five" : "Not five");