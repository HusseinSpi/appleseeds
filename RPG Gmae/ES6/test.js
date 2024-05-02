const input = "hi Iam Hussein";

const cat = (input) => {
  const arr = [...input];
  const count = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== " ") {
      if (!count[arr[i]]) {
        count[arr[i]] = 1;
      } else {
        count[arr[i]]++;
      }
    }
  }
  return count;
};

console.log(cat(input));
