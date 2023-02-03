/*
// -- IIFE - Immedialy invoker --
const runOnce = function () {
  console.log("This will never run again");
};

runOnce();
// IIFE
(function () {
  console.log("This will never run again");
})(); // ()call immediatly;

(() => console.log("This will ALSO never run again"))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}

 */

const booker = secureBooking();

// Immediately Invoked Function Expressions (IIFE)
const runOnce = function () {
  console.log("This will never run again");
};
runOnce();
// IIFE
(function () {
  console.log("This will never run again");
  const isPrivate = 23;
})();
// console.log(isPrivate);
(() => console.log("This will ALSO never run again"))();
{
  const isPrivate = 23;
  var notPrivate = 46;
}
// console.log(isPrivate);
console.log(notPrivate);
///////////////////////////////////////
// Closures
const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
/*
const booker = secureBooking();
booker();
booker();
booker();
console.dir(booker);
///////////////////////////////////////
// More Closure Examples
// Example 1
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};
const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();
console.dir(f);
// Re-assigning f function
h();
f();
console.dir(f);
// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`Will start boarding in ${wait} seconds`);
};
const perGroup = 1000;
boardPassengers(180, 3);
*/
