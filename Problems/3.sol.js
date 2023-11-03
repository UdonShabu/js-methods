// 🥉 Find an object in an array by one of its properties
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

const result = inventory.find(({ name }) => name === "cherries");
console.log(result); //{ name: "cherries", quantity: 5 }

// 🥉 Find a prime number in an array
function isPrime(el, idx, arr) {
  if (el <= 1) {
    return false;
  }
  for (let start = 2; start <= Math.sqrt(el); start++) {
    if (el % start === 0) {
      return false;
    }
  }
  return true;
}

console.log([4, 6, 8, 12].find(isPrime)); //undefined
console.log([4, 5, 8, 12].find(isPrime)); //5

// 🥉 Find the index of the first negative number
const numbers = [5, 8, -3, 12, 0, -7, 10];
const firstNegativeIndex = numbers.findIndex((number) => number < 0);

if (firstNegativeIndex !== -1) {
  console.log("The first negative number is:", numbers[firstNegativeIndex]);
  // The first negative number is: -3
} else {
  console.log("No negative number found in the array.");
}
