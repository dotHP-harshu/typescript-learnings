// Readonly Properties in OOP
// Properties that can only be set during initialization.

class Book {
  readonly ISBN: string;
  readonly title: string;
  public author: string;

  constructor(isbn: string, title: string, author: string) {
    this.ISBN = isbn;
    this.title = title;
    this.author = author;
  }
  // ❌ can not update title (readonly property)
  //   updateTitle(title:string):void{
  //     this.title = title
  //   }
  updateAuthor(authorName: string): void {
    this.author = authorName;
  }
}

const book = new Book("978-0-123456-78-9", "TypeScript", "Harsh");
book.author = "Jane Doe";  // ✅ OK
// book.isbn = "new-isbn";   // ❌ Error - readonly
// book.title = "New Title"; // ❌ Error - readonly


// Shorthand with readonly
class Product {
  constructor(
    public readonly id: number,
    public name: string,
    public price: number
  ) {}
}

const product = new Product(1, "Laptop", 999);
product.name = "Gaming Laptop";   // ✅ OK
product.price = 1099;              // ✅ OK
// product.id = 2;                 // ❌ Error - readonly



// ==============================================================
//  Getters and Setters
// Control access to properties with custom logic.
// ==============================================================

class Circle {
  private _radius: number;
  
  constructor(radius: number) {
    this._radius = radius;
  }
  
  // Getter - accessed like a property
  get radius(): number {
    return this._radius;
  }
  
  // Setter - set like a property
  set radius(value: number) {
    if (value < 0) {
      throw new Error("Radius cannot be negative");
    }
    this._radius = value;
  }
  
  // Computed property with getter only
  get area(): number {
    return Math.PI * this._radius ** 2;
  }
  
  get circumference(): number {
    return 2 * Math.PI * this._radius;
  }
}

const circle = new Circle(5);
console.log(circle.radius);        // 5 (using getter)
console.log(circle.area);          // 78.54 (computed)

circle.radius = 10;                // Using setter
console.log(circle.radius);        // 10
console.log(circle.area);          // 314.16

// circle.radius = -5;             // ❌ Error: "Radius cannot be negative"
// circle.area = 100;              // ❌ Error: area has no setter