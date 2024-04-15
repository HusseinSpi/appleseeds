const isMember = true;

let purchaseAmount = 90;
let discount = 0;
let total = null;

if (isMember && purchaseAmount >= 100) {
  discount = purchaseAmount * 0.15;
  total = purchaseAmount - discount;
  -discount;
} else if (isMember) {
  discount = purchaseAmount * 0.05;
  total = purchaseAmount - discount;
} else if (purchaseAmount >= 100) {
  discount = purchaseAmount * 0.1;
  total = purchaseAmount - discount;
} else {
  total = purchaseAmount;
}

console.log(total);
