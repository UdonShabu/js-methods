// 🥉 Sort by name. if the same then by id
let lists = [
  { name: "Jojo", id: 40000 },
  { name: "Prayut", id: 8400 },
  { name: "banglee", id: 69 },
  { name: "Meow", id: 9 },
  { name: "Oreo", id: 10 },
  { name: "Jojo", id: 15000 },
];
lists.sort((a, b) => a.name.localeCompare(b.name) || a.id - b.id);
console.log(lists);
// [
//   { name: 'banglee', id: 69 },
//   { name: 'Jojo', id: 15000 },
//   { name: 'Jojo', id: 40000 },
//   { name: 'Meow', id: 9 },
//   { name: 'Oreo', id: 10 },
//   { name: 'Prayut', id: 8400 }
// ]

// 🥉 Replace dog with cat
const p =
  "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy? dog";

const regex = /Dog/gi;
console.log(p.replace(regex, "cat"));
// Expected output: "The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy? cat"
