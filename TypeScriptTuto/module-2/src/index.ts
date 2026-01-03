// src/index.ts
function greet(name: string): string {
  return `Hello, ${name}! Welcome to TypeScript.`;
}

const userName: string = "Developer";
console.log(greet(userName));

// Try uncommenting this line - TypeScript will show an error!
// console.log(greet(123));