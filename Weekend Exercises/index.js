let input = "Yes";

const answer = (input) => {
  if (input.toLowerCase() === "yes") {
    return true;
  } else if (input.toLowerCase() === "no") {
    return false;
  }
};
console.log(answer(input));

//==========================================================================================

// input = [19, 5, 42, 2, 77];
input = [10, 343445353, 3453445, 3453545353453];

const sum = (input) => {
  input.sort((a, b) => a - b);

  return input[0] + input[1];
};

console.log(sum(input));

//==========================================================================================

// input = [0, 1, 1, 0];
input = [1, 1, 1, 0, 1, 1];

function ConvertBinaryNumber(input) {
  let decimal = 0;
  for (let i = 0; i < input.length; i++) {
    decimal = decimal * 2 + input[i];
  }
  return decimal;
}

console.log(ConvertBinaryNumber(input));

//==========================================================================================

// input = 121;
// input = 625;
input = 114;

const findNextSquare = (input) => {
  const sqrt = Math.sqrt(input) + 1;
  if (Number.isInteger(sqrt)) {
    return sqrt ** 2;
  } else {
    return -1;
  }
};

console.log(findNextSquare(input));

//==========================================================================================

input = [4, 2, 2, 2];

const findUniq = (input) => {
  const count = input.reduce((acc, cur) => {
    acc[cur] = ++acc[cur] || 1;
    return acc;
  }, {});
  for (let key in count) {
    if (count[key] === 1) {
      return key;
    }
  }
};

console.log(findUniq(input));

//==========================================================================================

const summation = (number) => {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
  }
  return sum;
};

console.log(summation(10));

//==========================================================================================

const centuryFromYear = (year) => {
  let century = 0;
  while (year >= 100) {
    year -= 100;
    century++;
  }
  if (year > 0) {
    century++;
  }
  return century;
};

console.log(centuryFromYear(1601));

//==========================================================================================

const basicOp = (sign, num1, num2) => {
  switch (sign) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      console.log("idk");
      break;
  }
};

console.log(basicOp("-", 21, 9));

//==========================================================================================

const nb_year = (p0, percent, aug, p) => {
  let total = 0;
  percent = percent / 100;
  while (p > p0) {
    debugger;
    p0 = p0 + p0 * percent + aug;
    total++;
  }
  return total;
};

console.log(nb_year(1500000, 2.5, 10000, 2000000));

//==========================================================================================

input = [
  [30, 24],
  [32, 28],
  [15, 30],
  [10, 12],
  [20, 21],
];

const bus = (arr) => {
  let peopleInBus = 0;
  arr.forEach((station) => {
    peopleInBus += station[0];
    peopleInBus -= station[1];
  });
  if (peopleInBus < 0) {
    return "There is an error in the Array";
  } else {
    return peopleInBus;
  }
};

console.log(bus(input));

//==========================================================================================
const fibonacci = (limit) => {
  debugger;
  const arr = [];
  for (let i = 0; i <= limit; i++) {
    if (i === 0 || i === 1) {
      arr.push(i);
    } else {
      arr.push(arr[i - 1] + arr[i - 2]);
    }
  }
  return arr;
};

console.log(fibonacci(12));

//==========================================================================================

function tribonacci(signature, limit) {
  if (signature[0] < 0 || signature[1] < 0 || signature[2] < 0 || limit <= 3) {
    return [];
  }
  for (let i = 3; i < limit; i++) {
    signature.push(signature[i - 1] + signature[i - 2] + signature[i - 3]);
  }
  return signature;
}

let signature = [0, 0, 1];
let n = 12;
console.log(tribonacci(signature, n));

//==========================================================================================

const trimmingString = (str) => {
  newStr = str.slice(1, -1);
  return newStr;
};

console.log(trimmingString("Hussein"));

//==========================================================================================

const repeatStr = (limit, str) => {
  newStr = "";
  for (let i = 0; i < limit; i++) {
    newStr += str;
  }
  return newStr;
};

console.log(repeatStr(4, "hussein"));

//==========================================================================================

const toCamelCase = (str) => {
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      arr[i] = arr[i].toUpperCase();
    }
    if (arr[i] === "_" || arr[i] === "-") {
      arr.splice(i, 1);
      arr[i] = arr[i].toUpperCase();
    }
  }
  return arr.join("");
};

console.log(toCamelCase("the-stealth-warrior"));

//==========================================================================================

const toWeirdCase = (str) => {
  let words = str.split(" ");
  let result = words.map((word) => {
    let chars = word.split("");
    for (let i = 0; i < chars.length; i++) {
      if (i % 2 === 0) {
        chars[i] = chars[i].toUpperCase();
      } else {
        chars[i] = chars[i].toLowerCase();
      }
    }
    return chars.join("");
  });
  return result.join(" ");
};

console.log(toWeirdCase("HusseIn Ahm"));

//==========================================================================================

const abbreviate = (str) => {
  let arr = str.split(" ");
  arr = arr.map((name) => {
    return name[0].toUpperCase();
  });
  return arr.join(".");
};

console.log(abbreviate("hussein khalil"));

//==========================================================================================

const maskify = (str) => {
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length - 4) {
      arr[i] = "#";
    }
  }
  return arr.join("");
};

console.log(maskify("68932497246807432"));

//==========================================================================================

const shortestWords = (str) => {
  arr = str.split(" ");
  let shortWord = arr[0].length;

  arr.forEach((word) => {
    if (word.length < shortWord) {
      shortWord = word.length;
    }
  });
  return shortWord;
};

console.log(shortestWords("Hello IM Hussein 9"));

//==========================================================================================

const shortestWordsV2 = (str) => {
  arr = str.split(" ");
  let shortWord = arr[0].length;

  arr.forEach((word) => {
    if (word.length > shortWord) {
      shortWord = word.length;
    }
  });
  return shortWord;
};

console.log(shortestWordsV2("Hello IM Hussein 9"));

//==========================================================================================

const accum = (str) => {
  let fullWord = "";
  for (let i = 0; i < str.length; i++) {
    fullWord += str[i].toUpperCase();
    fullWord += str[i].toLowerCase().repeat(i);
    if (i < str.length - 1) {
      fullWord += "-";
    }
  }
  return fullWord;
};

console.log(accum("RqaEzty"));

//==========================================================================================

const countingDuplicates = (str) => {
  result = [];
  let arr = str.split("");
  const count = arr.reduce((acc, cur) => {
    acc[cur.toLowerCase()] = ++acc[cur.toLowerCase()] || 1;
    return acc;
  }, {});
  for (let key in count) {
    if (count[key] > 1) {
      result.push(`'${key}' occurs ${count[key]} times`);
    }
  }
  return result.join(" and ");
};

console.log(countingDuplicates("Indivisibilities"));

//==========================================================================================

const organizeStrings = (s1, s2) => {
  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const s1AndS2 = [
    ...s1.toLowerCase().split(""),
    ...s2.toLowerCase().split(""),
  ];
  let newWord = [];
  for (let i = 0; i < letters.length; i++) {
    if (s1AndS2.includes(letters[i])) {
      newWord.push(letters[i]);
    }
  }
  console.log(newWord.join(""));
};

const a = "xyAAbbbccccdefww";
const b = "xxxxyyyyAbklmopq";
const c = "abcdefghijklimnopqrstuvwxyz";
organizeStrings(a, b);
organizeStrings(c, c);

//==========================================================================================

const isIsogram = (str) => {
  let charMap = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (charMap[char]) {
      return false;
    }
    charMap[char] = true;
  }
  return true;
};

console.log(isIsogram("aba"));
console.log(isIsogram("abc"));

//==========================================================================================

const arrFilter = (arr) => {
  // const newArr = arr.filter((number) => {
  //   return number % 2;
  // });
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) newArr.push(arr[i]);
  }
  return newArr;
};

const arrMap = (arr) => {
  // const newArr = arr.map((number) => {
  //   return number + 2;
  // });
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[i] + 2;
  }
  return newArr;
};

const arrForEach = (arr) => {
  // arr.forEach((element, index) => {
  //   arr[index] = element * 2;
  // });
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= 2;
  }
  return arr;
};

const array = [1, 2, 3, 4, 5, 6, 7];

console.log(arrFilter(array));
console.log(arrMap(array));
console.log(arrForEach(array));

//==========================================================================================

const findPerimeter = (length, width) => {
  return (length + width) * 2;
};

console.log(findPerimeter(20, 10));
