// ===================================================================================================================
// Inheritance
// ===================================================================================================================

// Parent class (Base class, Superclass)
class Vehicle {
    constructor(
        public brand: string,
        public model: string,
        protected year: number
    ) {}
    
    getInfo(): string {
        return `${this.year} ${this.brand} ${this.model}`;
    }
    
  start(): void {
      console.log("Vehicle starting...");
    }
}

// Child class (Derived class, Subclass)
class Car extends Vehicle {
    constructor(
        brand: string,
        model: string,
        year: number,
        public doors: number
    ) {
        super(brand, model, year);  // Call parent constructor
    }
    
    // Override parent method
    start(): void {
        console.log("Car engine starting...");
  }
  
  // New method specific to Car
  openTrunk(): void {
      console.log("Trunk opened");
    }
}

const myCar = new Car("Toyota", "Camry", 2024, 4);
console.log(myCar.getInfo());  // "2024 Toyota Camry"
myCar.start();                 // "Car engine starting..."
myCar.openTrunk();             // "Trunk opened"

// Method Overridding
class Animal {
    constructor(public name: string) {}
    
    makeSound(): void {
        console.log("Some generic sound");
    }
    
    eat(): void {
    console.log(`${this.name} is eating`);
}
}

class Dog extends Animal {
    // Override makeSound
    makeSound(): void {
        console.log(`${this.name} says: Woof! Woof!`);
    }
    
    // New method
    fetch(): void {
        console.log(`${this.name} is fetching the ball`);
    }
}

class Cat extends Animal {
    // Override makeSound
    makeSound(): void {
        console.log(`${this.name} says: Meow!`);
    }
    
    // New method
    scratch(): void {
        console.log(`${this.name} is scratching`);
    }
}

const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");

dog.makeSound();  // "Buddy says: Woof! Woof!"
cat.makeSound();  // "Whiskers says: Meow!"

dog.eat();        // "Buddy is eating" (inherited)
cat.eat();        // "Whiskers is eating" (inherited)

dog.fetch();      // "Buddy is fetching the ball"
cat.scratch();    // "Whiskers is scratching"

// Using super to Call Parent Methods
class Employee {
    constructor(
        public name: string,
        public salary: number
    ) {}
    
    getDetails(): string {
        return `${this.name} - Salary: $${this.salary}`;
    }
}

class Manager extends Employee {
  constructor(
    name: string,
    salary: number,
    public teamSize: number
) {
    super(name, salary);
}

// Override and extend parent method
getDetails(): string {
    const baseDetails = super.getDetails();  // Call parent method
    return `${baseDetails}, Team Size: ${this.teamSize}`;
}
}

const manager = new Manager("Alice", 80000, 5);
console.log(manager.getDetails());
// "Alice - Salary: $80000, Team Size: 5"

// ===================================================================================================================
// Composition
// ===================================================================================================================

// Instead of inheritance, use composition

// Components
class Engine {
  start(): void {
    console.log("Engine started");
  }
  
  stop(): void {
    console.log("Engine stopped");
  }
}

class GPS {
  navigate(destination: string): void {
    console.log(`Navigating to ${destination}`);
  }
}

// Bike "has-a" Engine and "has-a" GPS (composition)
class Bike {
  private engine: Engine;
  private gps: GPS;
  
  constructor(
    public brand: string,
    public model: string
  ) {
    this.engine = new Engine();
    this.gps = new GPS();
  }
  
  start(): void {
    this.engine.start();
  }
  
  navigateTo(destination: string): void {
    this.gps.navigate(destination);
  }
}

const car = new Bike("Hero", "Model 3");
car.start();                      // "Engine started"
car.navigateTo("New York");       // "Navigating to New York"

// ===================================================================================================================
// Polymorphism
// ===================================================================================================================
abstract class Shape {
  abstract getArea(): number;
  abstract getName(): string;
}

class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }
  
  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
  
  getName(): string {
    return "Circle";
  }
}

class Rectangle extends Shape {
  constructor(
    public width: number,
    public height: number
  ) {
    super();
  }
  
  getArea(): number {
    return this.width * this.height;
  }
  
  getName(): string {
    return "Rectangle";
  }
}

class Triangle extends Shape {
  constructor(
    public base: number,
    public height: number
  ) {
    super();
  }
  
  getArea(): number {
    return (this.base * this.height) / 2;
  }
  
  getName(): string {
    return "Triangle";
  }
}

// Polymorphism in action - all treated as Shape
function printShapeInfo(shape: Shape): void {
  console.log(`${shape.getName()}: Area = ${shape.getArea().toFixed(2)}`);
}

const shapes: Shape[] = [
  new Circle(5),
  new Rectangle(10, 20),
  new Triangle(10, 15)
];

// Same function works with different shape types
shapes.forEach(shape => printShapeInfo(shape));
// Output:
// Circle: Area = 78.54
// Rectangle: Area = 200.00
// Triangle: Area = 75.00