// 🥉 Flattening nested arrays
const arr = [1, 2, [3, 4, [5, 6]]];
console.log(arr.flat(Infinity)); //[1, 2, 3, 4, 5, 6]

// 🥉 Replace the middle with two elements
const arr1 = [1, 2, 1];
const result = arr1.flatMap((num) => (num === 2 ? [3, 3] : 1));
console.log(result); //[1, 3, 3, 1]

// 🥉 Let's generate a list of words from a list of sentences.
const arr2 = ["it's Sunny in", "", "California"];
const result2 = arr2.flatMap((x) => x.split(" "));
console.log(result2);
// ["it's","Sunny","in", "", "California"]
