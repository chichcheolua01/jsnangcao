"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

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
    // nếu chúng ta có nhiều hơn 1 phần tử, phần tử đầu tiên sẽ là main, còn lại là ọthers
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//Use ANY data type, retrun ANY data type, short-circuiting
console.log(3 || "Jonas"); // 3

console.log("" || "Jonas"); // Jonas

console.log(true || 0); // true

console.log(undefined || null); // null

console.log(undefined || 0 || "" || "Hello" || 23 || null); // Hello

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
-- SPREAD OPERATOR --
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
-- DETRUCTORING ARRAYS --
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
-- DETRUCTORING OBJECTS --
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
