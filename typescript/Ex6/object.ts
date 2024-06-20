const ComplexObject = {
  logValues: function (num: number, strArray: string[]): void {
    console.log(`Number: ${num}`);
    console.log(`String Array: ${strArray.join(", ")}`);
  },

  addNumbers: function (num1: number, num2: number): number {
    return num1 + num2;
  },

  getStrings: function (str1: string, str2: string): string {
    return str1 + " " + str2;
  },

  getArrayLength: function (numArray: number[]): number {
    return numArray.length;
  },
};

ComplexObject.logValues(100, ["one", "two", "three"]);
console.log(`Sum of numbers: ${ComplexObject.addNumbers(10, 20)}`);
console.log(
  `Concatenated strings: ${ComplexObject.getStrings("Hello", "world!")}`
);
console.log(
  `Length of numArray: ${ComplexObject.getArrayLength([1, 2, 3, 4, 5])}`
);
