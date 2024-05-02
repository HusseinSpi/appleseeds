const arr = [
  { name: "hussein", age: 21, mony: false },
  { name: "ahmad", age: 31, mony: true },
];

function gg(a, b) {
  console.log(a.name);
  console.log(b.name);
}

gg(...arr);
