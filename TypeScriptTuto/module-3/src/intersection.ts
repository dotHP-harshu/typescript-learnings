// Part 2: Intersection Types (&)
// Intersection types combine multiple types into one. The result has all properties of all types.

// Basic intersection

type Person = {
  name: string;
  age: number;
};

type Employee = {
  empId: number;
  department: "CSE" | "ELEX";
};

// Intersection: has ALL properties from both types
type Staff = Person & Employee;

const staff1: Staff = {
  name: "Staff1",
  age: 12,
  empId: 2,
  department: "CSE",
};

// const staff1:Staff = {  // shows error
//     name: "Staff1",
//     age: 12,
// }

// Multiple Intersection
type IdentityFiable = { id: number };
type Deletable = { isDeletable: boolean };
type Nameable = { name: string };

type Entity = IdentityFiable & Deletable & Nameable;

const product : Entity ={
    id:1,
    name:"bulb",
    isDeletable:true
}

// another example of multiple inersection
type Auditable = {
	createdBy: string;
	createdAt: Date;
	modifiedBy: string;
	modifiedAt: Date;
};

type Publishable = {
	publishedAt: Date | null;
	isPublished: boolean;
};

type BlogPost = {
	id: number;
	title: string;
	content: string;
	author: string;
};

type FullBlogPost = BlogPost & Auditable & Publishable;