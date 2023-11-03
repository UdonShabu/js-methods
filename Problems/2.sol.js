// 🥉 Check whether the numbers array contain at least one even number
console.log([1, 3, 4].some((el) => el % 2 === 0)); //true

// 🥉 Checking whether a value exists in an array
const fruits = ["apple", "banana", "mango", "guava"];

function checkAvailability(arr, val) {
  return arr.some((arrVal) => val === arrVal);
}

console.log(checkAvailability(fruits, "kela")); //false
console.log(checkAvailability(fruits, "banana")); //true
