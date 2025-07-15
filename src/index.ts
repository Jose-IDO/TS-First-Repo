// const greet = (name:string): string => {
//     return `hello ${name}, welcome to TS Codetribe!`
// } 

// // console.log(greet("Joseph"))
// let firstname: string = "Joseph";
// let age:number = 25;
// let isloggedIn: boolean = true;

// const show  = (name:string): string => {
//     return `${name}`
// }

// console.log(show(firstname))

// const showboolean  = (name:boolean): string => {
//     return String(name)
// }

// console.log(showboolean(isloggedIn))

// let numbers: number[] = [1, 2, 3, 4, 5];
// let fruits: string[] = ["apples", "bannana"," oranges"];
// let scores: Array<number> = [100,250,85,170, 90];

// const showArray = ( numbers: number[]): number[] =>{
//     return numbers
// }
// console.log(showArray(numbers))

// // tuple
// let user: [string, number] = ["Joseph", 29];

// const showTuple = ( tuple: any): any =>{
//     return tuple
// }
// console.log(showTuple(user))

// let NewUser:{name:string, age:number} = {
//     name: "Joseph",
//     age: 29
// }

// const ShowObject = (object1: any, objec2: any): any =>{
//     return object1 + " " + objec2
// }
// console.log(ShowObject(NewUser.age, NewUser.name))

// type student = { name: string, score: number}

// let NewStudent: student = {
//     name: "Joseph",
//     score: 29
// }

// function DisplayStudent(student: student): void {
//     console.log(student.name);
// }

// DisplayStudent(NewStudent)


























































type Employee = {
    Fullname: [FirstName: string, LastName: string ],
     Age: number, 
     Department: string,
      Skills: string[], 
      IsActive: boolean }

let Employee1 : Employee = {
     Fullname: ["Mark", "Anthony"], 
     Age: 29,
      Department: "Mthematics", 
      Skills: ["Algebra", "Geometry"],
      IsActive: true}

let Employee2 : Employee = {
     Fullname: ["Tom", "Hiddleston"],
     Age: 42, 
        Department: "Acting",
        Skills: ["Drama", "Comedy"],
        IsActive: false}

let Employee3 : Employee = {
     Fullname: ["Emma", "Stone"],
        Age: 34,
        Department: "Directing",
        Skills: ["Cinematography", "Editing"],
        IsActive: true}


function DisplayEmployees(employeee: Employee){
console.log("--- Employee Details ---");
console.log(`Fullname: ${employeee.Fullname[0]} ${employeee.Fullname[1]}`);
console.log(`Age: ${employeee.Age}`);
console.log(`Department: ${employeee.Department}`);
console.log(`Skills: ${employeee.Skills[0]}, ${employeee.Skills[1]}`);
console.log(`IsActive: ${employeee.IsActive}`);
console.log("-------------------------");
}

DisplayEmployees(Employee1);
DisplayEmployees(Employee2);
DisplayEmployees(Employee3);






























































































