"use strict";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  //ES6 enchanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; // this.starterMenu thay thế cho restaurant.starterMenu
  },

  orderDelivery({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address = "abc",
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${this.categories[ing1]}, ${this.categories[ing2]}, ${this.categories[ing3]}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    // nếu chúng ta có nhiều hơn 1 phần tử, phần tử đầu tiên sẽ là main, còn lại là others
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
rest.set(2, "Lisbon, Portugal");
console.log(rest);

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are close :(");

console.log(rest.get("name")); // Classico Italiano
console.log(rest.get(true)); // We are open :D
console.log(rest.get(1)); // Firenze, Italy

const time = 8;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));
console.log(rest.get(true && true)); // giống câu trên
console.log(rest.get(false && false));

console.log(rest.has("categories")); //true
rest.delete(2);
console.log(rest);
console.log(rest.size);

rest.set([1, 2], "Test");

/*
///////////////////////////////////////////////////////////////////////////////////////////////
const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);

console.log(ordersSet); // 6 món nhưng trả về 3, loại bỏ dulicater

console.log(new Set("Nghia")); // trả về từng kí tự

console.log(ordersSet.size); // trả về size sau khi loại bỏ duplicater

console.log(ordersSet.has("Pizza")); //true

console.log(ordersSet.has("Bread")); //false

ordersSet.add("Garlic Bread");

console.log(ordersSet); // add Garlic Bread

ordersSet.delete("Risotto"); // .clear = delete all

console.log(ordersSet); // delete Risotto

for (const order of ordersSet) console.log(order);

// Example
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const positions = [...new Set(staff)]; //[...] chuyển thành 1 array
console.log(positions);
console.log(
  new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
);
///////////////////////////////////////////////////////////////////////////////////////////////
 */

/*
// Property VALUES
///////////////////////////////////////////////////////////////////////////////////////////////
const properties = Object.keys(openingHours); // keys: trả về giá trị là tên của array trong object
console.log(properties); // Mảng chứa 3 phần tử

for (const day of Object.keys(openingHours)) {
  console.log(day);
}
const values = Object.values(openingHours); // values: trả về giá trị là các phần tử trong array
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`In ${key}day we open at ${open} to ${close} `);
}
///////////////////////////////////////////////////////////////////////////////////////////////
*/

/*
//OPTIONAL CHAINING
///////////////////////////////////////////////////////////////////////////////////////////////
if (restaurant.openingHours.mon) {
  console.log(console.log(restaurant.openingHours.mon));
}

//WITH optinal chaining
console.log(restaurant.openingHours?.mon?.open); //? kiểm tra rằng phía trước ? có tồn tại hay ko

// Example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days) {
  //console.log(day);
  const openHour = restaurant.openingHours[day]?.open ?? "closed"; // Nullish operator ?? nhận giá trị 0
  console.log(`On ${day} we're open at ${openHour}`);
}

// Methods

console.log(restaurant.order?.(0, 1) ?? "Method does not exist"); // ?. để check xem method có tồn tại hay ko, sau đó thêm tham số sau dấu .
console.log(restaurant.orderABC?.(0, 1) ?? "Method does not exist"); // method does not exist

//Arrays
const users = [{ name: "Jonas", email: "hello@jonas.io" }];

console.log(users[0]?.name ?? "User array empty!"); //Check xem mảng có phần tử ko?
///////////////////////////////////////////////////////////////////////////////////////////////
*/

/* 
//-- FOR LOOP AND ENTRIES --
///////////////////////////////////////////////////////////////////////////////////////////////

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [item, element] of menu.entries()) {
  //entries lấy giá trị của biến và index của biến cho vào 1 mảng 2 phần tử
  console.log(`${item + 1}: ${element}`);
}

//console.log([...menu.entries()]);

*/

/* 
//-- TOÁN TỬ ||= VÀ &&= --
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const rest1 = {
  name: "Capri",
  numGuests: 0,
};

const rest2 = {
  name: "La Piazaa",
  owner: "Giovanni Rossi",
};
// OR assignment operator
//rest1.numGuests = rest1.numGuests || 10;
//rest2.numGuests = rest2.numGuests || 10;

//rest1.numGuests ||= 10; // rest1.numGuests = rest1.numGuests || 10; numGuest = 10
//rest2.numGuests ||= 10; // rest2.numGuests = rest2.numGuests || 10; numGuest = 10

//nullish assignment operator (null or undefined)
rest1.numGuests ??= 10; // numGuest = 0 (vì ?? coi 0 và '' là 2 giá trị đúng)
rest2.numGuests ??= 10; //

// rest1.owner = rest1.owner && "<ANONYMOUS>";
// rest2.owner = rest2.owner && "<ANONYMOUS>";
console.log(rest1); // rest1.owner: undefined (vì rest1 ko có owner, nên với toán tử && sẽ nhận giá trị sai đầu tiên)
console.log(rest2); // rest2.owner: <ANONYMOUS>

console.log(rest1);
console.log(rest2);

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

*/

/* 
//-- ?? Nullish oporator --
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
restaurant.numGuest = 0;
const guest = restaurant.numGuest || 10; // nếu numGuest tồn tại, giá trị của guest1 = numGuest; ngược lại = 10;
console.log(guest); // 23

// Nullish: null and undefined (NOT 0 or '') - ?? coi 0 và '' là giá trị đúng
const guestCorrect = restaurant.numGuest ?? 10;
console.log(guestCorrect);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

/*
//-- SHORT CIRCUITING - HIỆN TƯỢNG ĐOẢN MẠCH --
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


console.log("-----OR-----");
//Use ANY data type, retrun ANY data type, short-circuiting
console.log(3 || "Jonas"); // 3

console.log("" || "Jonas"); // Jonas

console.log(true || 0); // true

console.log(undefined || null); // null

console.log(undefined || 0 || "" || "Hello" || 23 || null); // Hello

restaurant.numGuest = 23;
const guest1 = restaurant.numGuest ? restaurant.numGuest : 10; // nếu numGuest tồn tại, giá trị của guest1 = numGuest; ngược lại = 10;
console.log(guest1); // 23

const guest2 = restaurant.numGuest || 10; // nếu restaurant.numGuest ko có giá trị, guest2 = 10; và ngược lại
console.log(guest2);
console.log("-----AND-----"); // toán tử AND sẽ trả về giá trị cuối cùng của phép toán, nếu giá trị đầu là sai, mọi giá trị còn lại đều vô nghĩa
console.log(0 && "Jonas"); // 0
console.log(7 && "Jonas"); // Jonas
console.log("Hello" && 23 && null && "Jonas"); // null

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach");
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

/*

// SPREAD, because on RIGHT side of =
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const arr = [1, 2, ...[3, 4]];

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  // [Pizza, (Pasta got skipped), Risotto, ...otherFood = restaurant.starterMenu]
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects

const { sat, ...weekdays } = restaurant.openingHours; // khi sử dụng {} tên của mảng trong object cần phải chính xác
console.log(weekdays);

// 2) Funcions

const add = function (...numbers) {
  // ...number là tất cả các tham số được đưa vào
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(numbers);
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);

const x = [23, 5, 7];
add(...x); //...x = các phần tử trong x

console.log(...x); // 23 5 7

restaurant.orderPizza("mushrooms", "onion", "olives", "spinach"); // mushrooms và mảng 3 phần tử còn lại
restaurant.orderPizza("mushrooms"); // 1 mảng rỗng

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

/*
//-- SPREAD OPERATOR --
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr]; // ...arr = tất cả phần tử của arr, còn arr thì là mảng
console.log(newArr);
console.log(...arr);

const newMenu = [...restaurant.mainMenu, "Gnocci"]; // tạo 1 mảng mới dựa trên giá trị mảng cũ
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu]; //shallow copy

// Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. Not objects
const str = "Jonas";
const letters = [...str, " ", "S."];
console.log(letters);
console.log(...letters);

// Real world example
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt("Ingredient 2?"),
  // prompt("Ingredient 3?"),
];

console.log(ingredients);

restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Nghia" };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant }; //copy mà ko làm thay đổi giá trị của object cũ
restaurantCopy.name = "Ristarante Roma";
console.log(restaurant.name);
console.log(restaurantCopy.name);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

/* 
//-- DETRUCTORING OBJECT --
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
restaurant.orderDelivery({
  time: "22:30",
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: "Via del Sole, 21",
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant; //lấy dữ liệu từ phần tử có sẵn
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant; // đổi tên
console.log(restaurantName, hours, tags);

//Default values
const { menu = [], starterMenu: starters = [] } = restaurant; //menu ko tồn tại
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 }; // thay đổi giá trị
({ a, b } = obj);
console.log(a, b);

// nested objects

const {
  fri: { open: o, close: c },
} = openingHours; // {} được sử dụng để lấy dữ liệu dựa theo tên của nó
console.log(o, c); 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

/* 
//-- DESTRUCTORING ARRAYS --
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

const [first, second] = restaurant.categories;
console.log(first, second); // Italian Pizzeria

const [first2, , second2] = restaurant.categories;
console.log(first2, second2); // Italian Vegetarian - , , bỏ qua 1 phần tử

let [main, secondary] = restaurant.categories; // thay đổi vị trị của main và secondary

// const temp = main; // temporary - biến tạm
// main = secondary;
// secondary = temp;
// console.log(main, secondary); // Pizzeria Italian - đổi thứ tự

[main, secondary] = [secondary, main]; // đổi vị trí mà không cần biến tạm
console.log(main, secondary);

console.log(restaurant.order(2, 0)); //

const [starter, mainCourse] = restaurant.order(2, 0); // tạo 2 giá trị
console.log(starter, mainCourse);
// Nested detructoring
const nested = [2, 4, [5, 6]];

// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;

console.log(i, j, k);

// Default values

const [p, q, r] = [8, 9];
console.log(p, q, r);
 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 */
