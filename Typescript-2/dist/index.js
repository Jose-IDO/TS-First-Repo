"use strict";
// const greet = (name:string): string => {
//     return `hello ${name}, welcome to TS Codetribe!`
// } 
let Employee1 = {
    Fullname: ["Mark", "Anthony"],
    Age: 29,
    Department: "Mthematics",
    Skills: ["Algebra", "Geometry"],
    IsActive: true
};
let Employee2 = {
    Fullname: ["Tom", "Hiddleston"],
    Age: 42,
    Department: "Acting",
    Skills: ["Drama", "Comedy"],
    IsActive: false
};
let Employee3 = {
    Fullname: ["Emma", "Stone"],
    Age: 34,
    Department: "Directing",
    Skills: ["Cinematography", "Editing"],
    IsActive: true
};
function DisplayEmployees(employeee) {
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
