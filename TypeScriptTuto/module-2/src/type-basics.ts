// =================================================================
//                         Type Inference
// =================================================================
// TypeScript can automatically identify the type of a variable while assigning a value to it.

let name = "Harsh Prajapati"
let age  = 20
let isStudent = true

// name = 12    // Error! TypeScript knows it type(string)
// age = "twenty"    // Error! TypeScript knows it type(number)
// isStudent = 1    // Error! TypeScript knows it type(boolean)


// =================================================================
//                         Type Annotation
// =================================================================
// Type Annotation is telling the type of variable to the typescript.

let annotedName : string = "Harsh Prajapati"
let annotedAge : number = 20
let annotedIsStudent :boolean = true

// When to use annotations?
// 1. When declaring without initializing

let futureValue : string
futureValue = "This is string."

// 2. When TypeScript can't infer correctly
let myValue: string | number; // This can be string OR number
myValue = "text";
myValue = 100;

