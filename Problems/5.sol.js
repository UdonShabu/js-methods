// 🥉 Create chunks of the original array with a chunk size
function customSlice(array, chunkSize) {
  if (chunkSize <= 0) {
    throw new Error("Chunk size must be greater than 0");
  }

  const chunkedArray = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunkedArray.push(array.slice(i, i + chunkSize));
  }

  return chunkedArray;
}
const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const chunkedArray = customSlice(originalArray, 3);
console.log(chunkedArray);
// [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]];

// 🥉 Put drum next to clown
const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(2, 0, "drum");
console.log(myFish);
// ["angel", "clown", "drum", "mandarin", "sturgeon"]

// 🥉 Replace drum with trumpet
const fishes = ["angel", "clown", "drum", "sturgeon"];
const removedArr = fishes.splice(2, 1, "trumpet");
console.log(fishes);
// myFish is ["angel", "clown", "trumpet", "sturgeon"]
// removed is ["drum"]
