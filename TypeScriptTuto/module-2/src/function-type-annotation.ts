// ============================================
// FUNCTIONS
// ============================================

// Basic function with typed parameters and return type
function add(num1: number, num2: number): number {
  return num1 + num2;
}

// Arrow function with types
const sub = (num1: number, num2: number): number => {
  return num1 - num2;
};

// Shorter arrow function
const multiply = (a: number, b: number): number => a * b;

// Function with no return value (void)
const name: string = "Harsh";
const age: number = 21;

const printName = (name: string): void => {
  console.log(name);
};
printName(name);
// printName(age) // shows error

// Optional parameters (use ?)
const greet = (name: string, age: number, lastName?: string): string => {
  return lastName
    ? `Hello! ${name} ${lastName}.\nYou are ${age} years old.`
    : `Hello! ${name} .\nYou are ${age} years old.`;
};


console.log(greet(name,21))
console.log(greet("Rahul",32, "Shekhawat"))

// Default parameters
const generateEmail = (username:string, domain:string = "mail.com") : string =>{
    return `${username}@${domain}`
}

console.log(generateEmail("dothp"))
console.log(generateEmail("harsh"))

// Rest parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15