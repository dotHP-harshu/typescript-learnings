//Union types allow a variable to be one of several types.

// id variable can be string OR number
let id: string | number;
id = 1;
id = "one";
// id = true // ❌ Error: Type 'boolean' is not assignable

// Function parameter with union type
const printId = (id: string | number): void => {
  console.log(`This is id ${id}`);
};

printId(101); // ✅ OK
printId("ABC"); // ✅ OK
// printId(true);    // ❌ Error

// ============================================================
// Union Types with Arrays
// ============================================================

let mixedArr: (string | number)[] = [1, "hii", 2, "hello"]; // element can be string or number
let disArr: string[] | number[] = ["a", "b", "c"];
disArr = [1, 2, 3];
// disArr = [, 1, "b"];  // ❌ Error

// ============================================================
// Working with Union Types - Type Narrowing
// ============================================================

// When using union types, you must narrow the type before using type-specific methods:

const processValue = (value : string | number ) : string=>{
    // value.toUpperCase()  // ❌ error
    if(typeof value === "string"){
        return value.toUpperCase();
    }else{
        return value.toFixed(1)
    }
}

console.log(processValue("hello"));  // "HELLO"
console.log(processValue(3.14159));  // "3.14"

// ============================================================
// Union Types with Literal Types
// ============================================================
// Only these exact string values are allowed

type Status = "pending" | "approved" | "rejected";

let orderStatus: Status = "pending";  // ✅ OK
orderStatus = "approved";             // ✅ OK
// orderStatus = "shipped";           // ❌ Error: not in union

// Practical example: HTTP methods
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

const makeRequest = (url:string , method: HttpMethod):void=>{
    console.log(`${method} request to ${url}`)
}

makeRequest("/api/users", "GET");     // ✅ OK
// makeRequest("/api/users", "FETCH"); // ❌ Error



type Success = {
  status: "success";
  data: string;
};

type Error = {
  status: "error";
  message: string;
};

type Response = Success | Error;

function handleResponse(response: Response): void {
  if (response.status === "success") {
    console.log(`Data: ${response.data}`);  // TypeScript knows it's Success
  } else {
    console.log(`Error: ${response.message}`);  // TypeScript knows it's Error
  }
}

// Usage
const successResponse: Response = {
  status: "success",
  data: "User created"
};

const errorResponse: Response = {
  status: "error",
  message: "User already exists"
};

handleResponse(successResponse);
handleResponse(errorResponse);

// ==================================================================
// Discriminated Unions (Tagged Unions)
// Very powerful pattern using a common property to distinguish between types:
// ==================================================================

type Circle = {
  kind: "circle";  // Discriminant property
  radius: number;
};

type Square = {
  kind: "square";
  sideLength: number;
};

type Rectangle = {
  kind: "rectangle";
  width: number;
  height: number;
};

type Shape = Circle | Square | Rectangle;

function calculateArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      // TypeScript knows shape is Circle here
      return Math.PI * shape.radius ** 2;
    
    case "square":
      // TypeScript knows shape is Square here
      return shape.sideLength ** 2;
    
    case "rectangle":
      // TypeScript knows shape is Rectangle here
      return shape.width * shape.height;
    
    default:
      // Exhaustiveness check
      const exhaustiveCheck: never = shape;
      throw new Error(`Unhandled shape: ${exhaustiveCheck}`);
  }
}

// Usage
const circle: Shape = { kind: "circle", radius: 5 };
const square: Shape = { kind: "square", sideLength: 10 };
const rect: Shape = { kind: "rectangle", width: 20, height: 10 };

console.log(calculateArea(circle));    // 78.54
console.log(calculateArea(square));    // 100
console.log(calculateArea(rect));      // 200