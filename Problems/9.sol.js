// 🥉 Group the receipts by > 20 is expensive adn other is cheap
const receipts = [
  { name: "sausage", price: 42 },
  { name: "coffee", price: 32 },
  { name: "orange", price: 20 },
];
const multipleInit = receipts.reduce(
  (acc, curr) => {
    if (curr.price > 20) {
      acc.expensive.push(curr);
    } else {
      acc.cheap.push(curr);
    }
    return acc;
  },
  {
    expensive: [],
    cheap: [],
  }
);
console.log(multipleInit);
// {
//  expensive: [ { name: 'sausage', price: 42 }, { name: 'coffee', price: 32 } ],
//  cheap: [ { name: 'orange', price: 20 } ]
// }

// 🥉 Calculate the Cumulative Sums
function calculateCumulativeSums(array) {
  return array.reduce((result, curr, idx) => {
    idx === 0 ? result.push(curr) : result.push(result[idx - 1] + curr);
    return result;
  }, []);
}

const inputArray = [1, 2, 3, 4, 5];
const cumulativeSums = calculateCumulativeSums(inputArray);
console.log(cumulativeSums);
