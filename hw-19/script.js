//   1)Создание объекта: Создайте объект car, который содержит свойства brand, model, и year.
const car = {
    brand: "Toyota",
    model: "Camry",
    year: "1996",
    displayinfo: function () {
      return "Car";
    },
  };
  //  2)Доступ к свойствам: Выведите в консоль year свойства созданного объекта car.
  console.log(car.year);
  //      3)Изменение свойств: Измените year в объекте car и выведите обновленное свойство в консоль.
  car.year = 2000;
  console.log(car.year);
  // 4)Добавление свойств: Добавьте новое свойство color в объект car и выведите объект в консоль.
  car.color = "red";
  console.log(car.color);
  //   5)Удаление свойств: Удалите свойство model из объекта car и выведите объект в консоль.
  delete car.model;
  console.log(car);
  // 6)Методы объекта: Добавьте метод displayInfo, который выводит информацию об автомобиле.
  console.log(car.displayinfo());
  // 7)Объект внутри объекта: Создайте объект person, который содержит свойства name и address, где address - это еще один объект с улицей и городом.
  const person = {
    name: "Asan",
    address: {
      street: "Chui",
      sity: "Bishkek",
    },
  };
  console.log(person);
  // 8)Сравнение объектов: Создайте два разных объекта с одинаковыми свойствами и сравните их.
  const person1 = {
    name: "Asan",
    address: {
      street: "Chui",
      sity: "Bishkek",
    },
  };

  const person2 = {
    name: "Asan",
    address: {
      street: "Chui",
      sity: "Bishkek",
    },
  };

  console.log(person1 === person2);
  //     9)Запись в объект через переменную: Используйте переменную для добавления нового свойства в объект
  const newProp = "weight";
  car[newProp] = 5000;
  // 10)Жаны объект ачып туура жол менен копия кылыныз!

  const car1 = Object.assign({}, car);
  car1.year = 2021;
  console.log(car1);

  //       Функция, создающая объект: Напишите функцию, которая создает и возвращает объект student с свойствами name и age.
  // мисалы фунциянын аты createStudent болсо , ал фунцияга ‘Asan’ жана 18 деп аргумент берсем  анда

  // {name: ‘Asan’ ,age: 18 } деп кайтсын (консольго коргозунуз)

  function createStudent(name, age) {
    const student = {
      name,
      age,
    };
    return student;

  }
  console.log(createStudent("Asan", 18));
//   Функция, изменяющая свойства объекта: Напишите функцию, которая изменяет свойство age в переданном ей объекте student.