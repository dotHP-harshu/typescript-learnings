// ============================================
// ANY TYPE - Disables type checking (use sparingly!)
// ============================================

let anyValue : any = 10;
anyValue = "Harsh" // shows no error
anyValue = true
anyValue = [1,3,5]

// Problem with 'any': No type safety!
anyValue.toUpperCase();    // No error, but might crash at runtime

// When to use 'any':
// 1. Migrating from JavaScript gradually
// 2. Working with truly dynamic data (but 'unknown' is better)
// 3. Third-party libraries without types

// ============================================
// UNKNOWN TYPE - Type-safe version of 'any'
// ============================================

let unknownValue : unknown = "hii"
unknownValue = 12
unknownValue = [1,2,3,4]


let userInput: unknown = "Hello World";
// Can't use it directly
// userInput.toUpperCase(); // ❌ Error: Object is of type 'unknown'

// Must check type first (type narrowing)
if (typeof userInput === "string") {
  console.log(userInput.toUpperCase()); // ✅ OK! TypeScript knows it's a string
}

// Type narrowing with unknown
function processValue(value: unknown): void {
  if (typeof value === "string") {
    console.log("String:", value.toUpperCase());
  } else if (typeof value === "number") {
    console.log("Number:", value.toFixed(2));
  } else if (Array.isArray(value)) {
    console.log("Array length:", value.length);
  } else {
    console.log("Unknown type");
  }
}

processValue("hello");
processValue(42);
processValue([1, 2, 3]);