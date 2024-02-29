let variable1 = "My name is ";
console.log(variable1);
let variable2 = "Ermamat";
let variable3 = variable1 + variable2;
console.log(variable3);
let variable4 = `Total cost: $${3 + 5}`;
console.log(variable4);
console.log(`Total cos:$8`);
alert(variable4);
let variable5 = `Total cost: $${(599 + 295) / 100}`;
console.log(variable5);
let variable6 = `Total cost: $${(599 + 295) / 100}. Thank you, come again!`;
alert(variable6);
let variable7 = `items (4): $${2 * 2095 + (2 * 799) / 100}`;
console.log(variable7);
let variable8 = `Shipping & handling: $${(499 + 499) / 100}`;
console.log(variable8);
let variable9 = `Total before tax: $${2 * 2095 + 2 * 799 + 499 + 499 / 100}`;
console.log(variable9);
console.log(
  `Estimated tax (10%): $${Math.round((2 * 2095 + 2 * 499 + 499) * 0.1) / 100}`
);
