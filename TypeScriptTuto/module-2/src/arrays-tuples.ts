// ============================================
// ARRAYS
// ============================================

// Arrays of numbers -two syntaxes
let numArr1: number[] = [1, 2, 3, 4, 5];
// numArr1 = ["banana"] // not supports string element
let numArr2: Array<number> = [6, 7, 8, 9, 10];

// Array of Strings
let strArr: string[] = ["seb", "kela", "nariyal"];

// Array of mixed types (not recommended, but possible)
let mixed: (string | number)[] = [1, "two", 3, "four"];

// Array methods work normally
numArr2.push(6);
strArr.pop();

// Readonly arrays - cannot be modified
let readonlyNumbers: readonly number[] = [1, 2, 3];
// readonlyNumbers.push(4); // ❌ Error: Property 'push' does not exist

// ============================================
// TUPLES - Fixed length arrays with specific types
// ============================================

// Basic tuple - exact order and type matter
const student: [number, string] = [1, "Rohan"];
// const student : [number, string] = [1, "Rohan",12];
// const student : [number, string] = ["Rohan", 1];

// Accessing tuple elements
console.log(student[0]);
console.log(student[1]);

// Tuple with optional elements
let student1: [string, string?] = ["Rohan"];
student1 = ["Rohan", "Rastogi"];

// Tuple with rest elements
const restTuple : [string, ...number[]] = ["Numbers", 1,2,3,4]

// Readonly tuples
let readonlyTuple: readonly [string, number] = ["Sinha", 25];
// readonlyTuple[0] = "Rohan"; // ❌ Error: Cannot assign to '0'

// Practical example: Function returning multiple values
function getCoordinates(): [number, number] {
  return [10.5, 20.3];
}

const [x, y] = getCoordinates();
console.log(`X: ${x}, Y: ${y}`);

// Labeled tuples (TypeScript 4.0+)
let employee: [name: string, age: number, salary: number] = ["John", 30, 50000];