// Basic syntax
class MathUtils {
  // Static property
  static PI: number = 3.14159;
  
  // Static method
  static calculateCircleArea(radius: number): number {
    return this.PI * radius ** 2;
  }
  
  static max(a: number, b: number): number {
    return a > b ? a : b;
  }
}

// Access static members through class name
console.log(MathUtils.PI);                    // 3.14159
console.log(MathUtils.calculateCircleArea(5)); // 78.54
console.log(MathUtils.max(10, 20));           // 20

// Don't need to create instance
// const utils = new MathUtils();  // Not needed!

// ====================================================================
// Combining Static and Instance Members
// ====================================================================
class Counter {
  static totalInstances: number = 0;  // Static - shared by all
  private count: number = 0;          // Instance - unique per object
  
  constructor() {
    Counter.totalInstances++;
  }
  
  increment(): void {
    this.count++;
  }
  
  getCount(): number {
    return this.count;
  }
  
  static getTotalInstances(): number {
    return Counter.totalInstances;
  }
}

const counter1 = new Counter();
const counter2 = new Counter();
const counter4 = new Counter();
const counter3 = new Counter();

counter1.increment();
counter1.increment();
counter2.increment();

console.log(counter1.getCount());            // 2 (instance)
console.log(counter2.getCount());            // 1 (instance)
console.log(counter3.getCount());            // 0 (instance)
console.log(Counter.getTotalInstances());    // 3 (static - shared)