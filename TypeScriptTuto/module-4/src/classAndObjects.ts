// Basic sytax

class Person {
    // Properties
  name: string;
  age: number;

  // constructor
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // methond
  greet(): void {
    console.log(`Hello! ${this.name}`);
  }
}

// Create instances
const rahul = new Person("Rahul", 34);
console.log(rahul.name);

// Shorthand Constructor (Parameter Properties)
// Instead of declaring properties and assigning them in constructor, use this shortcut:

// Long way
class User {
  name: string;
  email: string;
  
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

// Shorthand (same result!)
class UserShort {
  constructor(
    public name: string,
    public email: string
  ) {}
}

// Usage is identical
const user = new UserShort("Alice", "alice@example.com");
console.log(user.name);   // "Alice"
console.log(user.email);  // "alice@example.com"