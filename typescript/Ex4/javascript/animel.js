"use strict";
class Animal {
  constructor(name) {
    this.name = name;
  }
  move(distance = 0) {
    console.log(`${this.name} moved ${distance} amount of meters.`);
  }
}
class Dog extends Animal {
  bark() {
    console.log("Woof woof!");
  }
}
const myDog = new Dog("Buddy");
console.log(myDog.name);
myDog.bark();
myDog.move(90);
