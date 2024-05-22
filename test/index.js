const swapCase = (str) => {
  let numS = 0;
  let numL = 0;
  const newArr = str.split("");
  newArr.forEach((element) => {
    if (element == element.toUpperCase()) {
      numL++;
    } else if (element == element.toLowerCase()) {
      numS++;
    }
  });
  if (numL > 0 && numS > 0) {
    return false;
  } else {
    return true;
  }
};

console.log(swapCase("hussein"));
