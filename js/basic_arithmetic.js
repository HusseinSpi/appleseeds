let num1 = 8;
let num2 = 15;
console.log(num1 + num2);

let a = 30;
let b = 12;
console.log(b - a);

let x = 7;
let y = 3;
console.log(x * y);

let numb1 = 20;
let numb2 = 4;

console.log(
  `${numb1} dividing ${numb2} = ${numb1 / numb2}, remainder = ${numb1 % numb2}`
);

let number1 = 15;
let number2 = 25;
let number3 = 10;

console.log((number1 + number2 + number3) / 3);

//What the symbol (%) does is divide the two numbers and record only the plus

let h = 8;

if (h % 2 == 0) {
  console.log("the number is even");
} else {
  console.log("the number is odd");
}

let u = 35;

if (u % 7 == 0 && u % 5 == 0) {
  console.log("wow");
}

for (let i = 1; i < 21; i++) {
  if (i % 4 == 0) {
    console.log(i);
  }
}

for (let i = 1; i <= 20; i++) {
  if (i >= 10 && i <= 20) {
    console.log(i);
  }
}

let s = -10;

if (s < -5 || s > 10) {
  console.log("yes");
}

let boo = false;

if (!boo) {
  console.log(true);
} else {
  console.log(false);
}

let lastNumber = 5;

if (
  (lastNumber >= 5 && lastNumber <= 10) ||
  (lastNumber >= 20 && lastNumber <= 30)
) {
  console.log("yesss");
}
