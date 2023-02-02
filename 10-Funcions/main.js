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

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
