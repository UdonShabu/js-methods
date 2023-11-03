// 🥉 Capitalize words while ignore certain words like "a," "an," "the," "in," "on," etc.
function titleCase(input) {
  const stopWords = ["a", "an", "the", "in", "on", "over", "and", "to"];

  const titleCased = input
    .toLowerCase()
    .split(" ")
    .map((word) => {
      if (stopWords.includes(word)) {
        return word;
      }
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");

  return titleCased[0].toUpperCase() + titleCased.slice(1);
}

const inputString = "the quick brown fox jumps over the lazy dog";
const titleCasedString = titleCase(inputString);
console.log(titleCasedString);
// The Quick Brown Fox Jumps over the Lazy Dog

// 🥉  Returns a new sentence with duplicate words remove
function removeDuplicates(sentence) {
  const words = sentence.split(" ");
  const uniqueWords = [];
  for (const word of words) {
    if (!uniqueWords.includes(word.toLowerCase())) {
      uniqueWords.push(word.toLowerCase());
    }
  }
  return uniqueWords.join(" ");
}
const inputSentence = "apple Banana Apple banana orange apple";
const deduplicatedSentence = removeDuplicates(inputSentence);
console.log(deduplicatedSentence); // "apple banana orange"
