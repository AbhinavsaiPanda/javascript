/***********************************************************************
                    JAVASCRIPT - SCOPE
************************************************************************/

/*
Definition:
Scope is the accessibility or visibility of variables,
functions, and objects in different parts of a JavaScript program.

In simple words,
Scope decides where a variable can be declared and from where
it can be accessed.
*/


/*
Why do we need Scope?

1. Prevent variable conflicts.
2. Improve code readability.
3. Hide private data.
4. Organize large applications.
*/

///////////////////////////////////////////////////////////////////////
// Global Scope
///////////////////////////////////////////////////////////////////////

/*
Definition:
A variable declared outside every function and block
belongs to the Global Scope.

It can be accessed from anywhere in the application.
*/

let company = "AchieversIT";

console.log(company);

function trainer() {
    console.log(company);
}

if(true) {
    console.log(company);
}

function student() {
    console.log(company);
}

console.log(company);

trainer();

student();

/*
Output

AchieversIT
AchieversIT
AchieversIT
*/

///////////////////////////////////////////////////////////////////////
// Function Scope
///////////////////////////////////////////////////////////////////////

/*
Definition:
Variables declared using var, let, or const inside a function
can only be accessed inside that function.

Outside the function they are not accessible.
*/

function employee() {
    let username = "Vamsi";
    console.log(username);
}

employee();

// console.log(username); // Error

/*
Output

Vamsi
ReferenceError
*/

///////////////////////////////////////////////////////////////////////
// Block Scope
///////////////////////////////////////////////////////////////////////

/*
Definition:
Variables declared using let and const inside a block {}
can only be accessed inside that block.

Blocks include:
1. if
2. for
3. while
4. switch
5. Any {}
*/

if (true) {
    let city = "Bangalore";
    const state = "Karnataka";
    console.log(city);
    console.log(state);
}

// console.log(city);
// console.log(state);

/*
Output

Bangalore
Karnataka
ReferenceError
*/



///////////////////////////////////////////////////////////////////////
// var is NOT Block Scoped
///////////////////////////////////////////////////////////////////////

/*
var ignores block scope.

It is only function scoped.
*/

if (true) {
    var course = "JavaScript";
}

console.log(course);

/*
Output

JavaScript
*/

///////////////////////////////////////////////////////////////////////
// Lexical Scope
///////////////////////////////////////////////////////////////////////

/*
Definition:
An inner function can access variables of its outer function.

Outer function cannot access variables of inner function.
*/

function outer() {

    let message = "Hello";

    function inner() {
        console.log(message);
    }

    inner();
}

outer();

/*
Output

Hello
*/

///////////////////////////////////////////////////////////////////////
// Scope Chain
///////////////////////////////////////////////////////////////////////

/*
Definition:
If JavaScript cannot find a variable in the current scope,
it searches the outer scope until it reaches the global scope.
*/

let language = "JavaScript";

function one() {

    function two() {
        console.log(language);
    }

    two();
}

one();

/*
Output

JavaScript
*/









/***********************************************************************
                INTERVIEW QUESTIONS
************************************************************************/

/*
1. What is Scope?

Scope determines where a variable can be accessed.

-----------------------------------------------------

2. Types of Scope?

1. Global Scope
2. Function Scope
3. Block Scope
4. Lexical Scope

-----------------------------------------------------

3. Difference between var, let and const?

var
- Function Scoped
- Can Redeclare
- Can Reassign
- Hoisted (undefined)

let
- Block Scoped
- Cannot Redeclare
- Can Reassign
- TDZ

const
- Block Scoped
- Cannot Redeclare
- Cannot Reassign
- TDZ

-----------------------------------------------------

4. What is Hoisting?

Moving declarations to the top before execution.

-----------------------------------------------------

5. What is Temporal Dead Zone?

The time between entering scope and variable initialization.

-----------------------------------------------------

6. Difference between Spread and Rest?

Spread
-------
Expands values.

Example:
const arr2 = [...arr1];

Rest
-----
Collects values.

Example:
function sum(...numbers){}

-----------------------------------------------------

7. Difference between == and === ?

==
Checks only value.

===
Checks both value and datatype.

-----------------------------------------------------

8. What is Destructuring?

Extracting values from arrays or objects into variables.

-----------------------------------------------------

9. Is var Block Scoped?

No.
var is Function Scoped.

-----------------------------------------------------

10. Can we access let before declaration?

No.

ReferenceError due to TDZ.

-----------------------------------------------------

11. Which variables are Block Scoped?

let and const.

-----------------------------------------------------

12. Can const object properties be modified?

Yes.

Only reassignment is not allowed.

Example

const obj = {
    name:"Vamsi"
};

obj.name = "Krishna";

console.log(obj.name);

/*
Output

Krishna
*/

/*-----------------------------------------------------

13. What is Lexical Scope?

An inner function can access variables
of its outer function.

-----------------------------------------------------

14. Which function is completely hoisted?

Function Declaration.

-----------------------------------------------------

15. Which function is NOT hoisted?

Function Expression
Arrow Function
*/