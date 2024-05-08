const sumOfNum = (n) => {
  if (n < 0) {
    return undefined;
  } else if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  return n + sumOfNum(n - 1);
};
console.log(sumOfNum(5));

// ----------------------------------------------------------

const reverseString = (str) => {
  if (str.length === 0) {
    return "";
  } else if (str.length === 1) {
    return str;
  }
  return str[str.length - 1] + reverseString(str.slice(0, str.length - 1));
};

console.log(reverseString("Hussein"));
console.log(reverseString("g"));
console.log(reverseString(""));
// ----------------------------------------------------------

const countDown = (n) => {
  if (n <= 0) {
    return;
  }
  if (n === 1) {
    return 1;
  }
  return `${n}, ${countDown(n - 1)}`;
};
console.log(countDown(5));

// ----------------------------------------------------------

const printAnArray = (arr) => {
  const newArr = [...arr];
  if (newArr.length === 0) {
    return;
  }
  console.log(newArr[0]);
  newArr.shift();
  printAnArray(newArr);
};

const arr = [1, 2, 3];
printAnArray(arr);
console.log(arr);
