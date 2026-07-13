/***********************************************************************
                    DESTRUCTURING
************************************************************************/

/*
Definition:
Destructuring allows us to extract values
from arrays or objects into separate variables.
*/

///////////////////////////////////////////////////////////////////////
// Array Destructuring
///////////////////////////////////////////////////////////////////////

const colors = ["Red", "Green", "Blue"];

const [first, second, third] = colors;

console.log(first);
console.log(second);
console.log(third);

/*
Output

Red
Green
Blue
*/

///////////////////////////////////////////////////////////////////////
// Skip Values
///////////////////////////////////////////////////////////////////////

const numbers = [10,20,30,40];

const [one,,three] = numbers;

console.log(one);
console.log(three);

/*
Output

10
30
*/

///////////////////////////////////////////////////////////////////////
// Object Destructuring
///////////////////////////////////////////////////////////////////////

const student = {
    name: "Vamsi",
    age: 24,
    city: "Hyderabad"
};

const {name, age, city} = student;

console.log(name);
console.log(age);
console.log(city);

/*
Output

Vamsi
24
Hyderabad
*/

///////////////////////////////////////////////////////////////////////
// Rename Variables
///////////////////////////////////////////////////////////////////////

const employeeDetails = {
    empName: "Rahul",
    salary: 50000
};

const {empName: employeeName, salary } = employeeDetails;

console.log(employeeName);
console.log(salary);

/*
Output

Rahul
50000
*/

///////////////////////////////////////////////////////////////////////
// Default Values
///////////////////////////////////////////////////////////////////////

const user = {
    username: "admin"
};

const {
    username,
    role = "Guest"
} = user;

console.log(username);
console.log(role);

/*
Output

admin
Guest
*/




/***********************************************************************
                    SPREAD OPERATOR (...)
************************************************************************/

/*
Definition:
Spread Operator expands arrays,
objects or strings into individual elements.
*/

///////////////////////////////////////////////////////////////////////
// Array Copy
///////////////////////////////////////////////////////////////////////

const arr1 = [1,2,3];

const arr2 = [...arr1, 4, 5, 6];

console.log(arr2);

/*
Output

[1,2,3,4,5,6]
*/

///////////////////////////////////////////////////////////////////////
// Merge Arrays
///////////////////////////////////////////////////////////////////////

const frontend = ["HTML","CSS"];

const backend = ["Node","MongoDB"];

const fullstack = [...frontend,...backend, ...frontend];

const [fe, be, ...rest] = fullstack;

console.log(fullstack);

/*
Output

["HTML","CSS","Node","MongoDB","HTML","CSS"]
*/

///////////////////////////////////////////////////////////////////////
// Object Copy
///////////////////////////////////////////////////////////////////////

const user1 = {
    name:"Vamsi"
};

const user2 = {
    ...user1
};

console.log(user2);

/*
Output

{name:"Vamsi"}
*/

///////////////////////////////////////////////////////////////////////
// Merge Objects
///////////////////////////////////////////////////////////////////////

const personal = {
    name:"Vamsi"
};

const professional = {
    company:"AchieversIT"
};

const profile = {
    ...personal,
    ...professional
};

console.log(profile);

/*
Output

{name:"Vamsi",company:"AchieversIT"}
*/




/***********************************************************************
                    REST OPERATOR (...)
************************************************************************/

/*
Definition:
Rest Operator collects multiple values
into a single variable.
*/

///////////////////////////////////////////////////////////////////////
// Rest Parameters
///////////////////////////////////////////////////////////////////////

function total(...numbers){

    console.log(numbers);

}

total(10,20,30,40);

/*
Output

[10,20,30,40]
*/

///////////////////////////////////////////////////////////////////////
// Sum using Rest
///////////////////////////////////////////////////////////////////////

function sum(...nums){

    let total = 0;

    for(let value of nums){

        total += value;

    }

    console.log(total);

}

sum(10,20,30,40);

/*
Output

100
*/

///////////////////////////////////////////////////////////////////////
// Object Rest
///////////////////////////////////////////////////////////////////////

const employeeInfo = {
    id:1,
    name:"Vamsi",
    age:24,
    city:"Hyderabad"
};

const {
    id,
    ...remaining
} = employeeInfo;

console.log(id);

console.log(remaining);

/*
Output

1

{
name:"Vamsi",
age:24,
city:"Hyderabad"
}
*/




/***********************************************************************
                    COMPARISONS
************************************************************************/

/*
Definition:
Comparison operators compare two values
and return true or false.
*/

///////////////////////////////////////////////////////////////////////
// ==
///////////////////////////////////////////////////////////////////////

console.log(10 == "10");

/*
Output

true
*/

///////////////////////////////////////////////////////////////////////
// ===
///////////////////////////////////////////////////////////////////////

console.log(10 === "10");

/*
Output

false
*/

///////////////////////////////////////////////////////////////////////
// !=
///////////////////////////////////////////////////////////////////////

console.log(10 != "10");

/*
Output

false
*/

///////////////////////////////////////////////////////////////////////
// !==
///////////////////////////////////////////////////////////////////////

console.log(10 !== "10");

/*
Output

true
*/

///////////////////////////////////////////////////////////////////////
// >
///////////////////////////////////////////////////////////////////////

console.log(20 > 10);

/*
Output

true
*/

///////////////////////////////////////////////////////////////////////
// <
///////////////////////////////////////////////////////////////////////

console.log(20 < 10);

/*
Output

false
*/

///////////////////////////////////////////////////////////////////////
// >=
///////////////////////////////////////////////////////////////////////

console.log(20 >= 20);

/*
Output

true
*/

///////////////////////////////////////////////////////////////////////
// <=
///////////////////////////////////////////////////////////////////////

console.log(20 <= 10);

/*
Output

false
*/



const userDetails = ["Vamsi", 24, "Hyderabad"];

const [firstName, age, location] = userDetails;

console.log(userDetails[1]);
console.log(firstName);


const userInfo = {
    name: "Vamsi",
    age: 24,
    city: "Hyderabad"
};    


const empDetails = {
    ...userInfo,
    role : "FSD",
    companyName : "CloudAi",
    city : "Hyd"
}


const employee = [...userDetails, "FSD", "CloudAi", "Hyd"];