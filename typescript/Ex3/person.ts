interface Person {
  firstName: string;
  lastName: string;
  age: number;
  greet(): string;
}

let person: Person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  greet: function (): string {
    return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
  },
};
console.log(person.greet());
