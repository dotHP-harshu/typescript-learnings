// Public 
// Accessible from anywhere
class Car {
  public brand: string;  // Explicit public
  model: string;         // Implicit public (default)
  
  constructor(brand: string, model: string) {
    this.brand = brand;
    this.model = model;
  }
}

const car = new Car("Toyota", "Camry");
console.log(car.brand);  // ✅ OK - public
console.log(car.model);  // ✅ OK - public (default)

// Private
// Accessible from only same class 

class Bank{
    private _balance : number = 0;

    constructor(initialBalance: number){
        this._balance = initialBalance
    }
    
    getBalance():number{
        return this._balance
    }
    
    setBalance(bal:number){
         this._balance = bal
    }
}

const bank1 = new Bank(100)
console.log(bank1.getBalance())
bank1.setBalance(200)
console.log(bank1.getBalance())
// console.log(bank1._balance); //❌ Error

// Protected
// Accessible within the class and its subclasses

class Animal {
    protected name:string;
    constructor(name:string){
        this.name = name
    }
    protected makeSound():void{
        console.log("Some sound made");
    }
}

class Dog extends Animal{
    bark():void{
        // protected properties and methods are accessible here
        this.makeSound()
        console.log(`${this.name}, barks`)
    }
}

const jonny = new Dog("Jonny");
jonny.bark()
// console.log(jonny.name) //❌ Error
// console.log(jonny.makeSound) //❌ Error


// =================================================
// Shorthand with Access Modifiers
// =================================================

class Employee {
  constructor(
    public name: string,           // Public
    private salary: number,        // Private
    protected department: string   // Protected
  ) {}
  
  getSalary(): number {
    return this.salary;  // ✅ OK - accessing private within class
  }
}

const emp = new Employee("Alice", 50000, "Engineering");
console.log(emp.name);         // ✅ OK - public
// console.log(emp.salary);    // ❌ Error - private
// console.log(emp.department); // ❌ Error - protected
console.log(emp.getSalary());  // ✅ OK - 50000