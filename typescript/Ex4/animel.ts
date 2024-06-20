class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  move(distance: number = 0): void {
    console.log(`${this.name} moved ${distance} amount of meters.`);
  }
}

class Dog extends Animal {
  bark(): void {
    console.log("Woof woof!");
  }
}

const myDog = new Dog("Buddy");
console.log(myDog.name);
myDog.bark();
myDog.move(10);
