// Abstract class - blueprint for other classes
abstract class Shape {
  constructor(public name: string) {}
  
  // Abstract method - must be implemented by subclasses
  abstract calculateArea(): number;
  abstract calculatePerimeter(): number;
  
  // Concrete method - can be used by all subclasses
  describe(): string {
    return `This is a ${this.name} with area ${this.calculateArea()}`;
  }
}

// Cannot do this:
// const shape = new Shape("Generic");  // ❌ Error: Cannot create instance of abstract class

// Must extend and implement abstract methods
class Rectangle extends Shape {
  constructor(
    public width: number,
    public height: number
  ) {
    super("Rectangle");
  }
  
  // Must implement abstract methods
  calculateArea(): number {
    return this.width * this.height;
  }
  
  calculatePerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

class Circle extends Shape {
  constructor(public radius: number) {
    super("Circle");
  }
  
  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
  
  calculatePerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

const rect = new Rectangle(10, 5);
const circle = new Circle(7);

console.log(rect.describe());    // "This is a Rectangle with area 50"
console.log(circle.describe());  // "This is a Circle with area 153.94"


// =======================================================================
// Abstract class vs Interface
// =======================================================================

// Abstract class - can have implementation
abstract class Animal {
  constructor(public name: string) {}
  
  abstract makeSound(): void;  // Must implement
  
  move(): void {  // Can have implementation
    console.log(`${this.name} is moving`);
  }
}

// Interface - only contracts, no implementation
interface IAnimal {
  name: string;
  makeSound(): void;
  move(): void;
}

// Key differences:
// 1. Abstract classes can have implemented methods
// 2. A class can implement multiple interfaces but extend only one class
// 3. Abstract classes can have constructors