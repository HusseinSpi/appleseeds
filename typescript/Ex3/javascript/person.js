"use strict";
let person = {
  firstName: "Hussein",
  lastName: "Khalil",
  age: 21,
  greet: function () {
    return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
  },
};
console.log(person.greet());
