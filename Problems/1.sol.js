// 🥉 Check if all elements are string
function areAllStrings(arr) {
  return arr.every((item) => typeof item === "string");
}

console.log(areAllStrings(["apple", "banana", "cherry"])); //true
console.log(areAllStrings(["apple", 42, "cherry"])); //false

// 🥉 Check if one array is a subset of another array
const isSubset = (array1, array2) =>
  array2.every((element) => array1.includes(element));

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(isSubset(arr, [5, 7, 6])); //true
console.log(isSubset(arr, [5, 8, 7])); //false
