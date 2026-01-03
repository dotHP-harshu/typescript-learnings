// Interface of an object
interface User {
    id:number,
    name:string,
    email:string,
    isAdmin:boolean
}

const rahul : User = {
    id:3,
    name:"Rahul",
    email:"rahul@mail.com",
    isAdmin:false
}


// Interface for functions

interface MathOperation{
    (a:number, b:number): number
}

interface PrinString{
    (a:string ) : void
}
