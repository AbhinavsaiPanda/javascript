/***********************************************************************
                    JAVASCRIPT - HOISTING
************************************************************************/

/*
Definition:
Hoisting is JavaScript's default behavior of moving declarations
to the top of their scope before execution.

Only declarations are hoisted.
Initialization is NOT hoisted.
*/

///////////////////////////////////////////////////////////////////////
// Variable Hoisting using var
///////////////////////////////////////////////////////////////////////

console.log(a);

var a = 100;

/*
Internally

var a;

console.log(a);

a = 100;
*/

/*
Output

undefined
*/

///////////////////////////////////////////////////////////////////////
// let Hoisting
///////////////////////////////////////////////////////////////////////

/*
let is hoisted but stays inside the
Temporal Dead Zone until initialized.
*/

// console.log(b);

let b = 200;

/*
Output

ReferenceError
*/

///////////////////////////////////////////////////////////////////////
// const Hoisting
///////////////////////////////////////////////////////////////////////

/*
const is also hoisted but cannot be used
before initialization.
*/

// console.log(c);

const c = 300;

/*
Output

ReferenceError
*/

///////////////////////////////////////////////////////////////////////
// Function Declaration Hoisting
///////////////////////////////////////////////////////////////////////

greet();

function greet() {
    console.log("Welcome");
}

/*
Output

Welcome
*/

///////////////////////////////////////////////////////////////////////
// Function Expression Hoisting
///////////////////////////////////////////////////////////////////////

// hello();

var hello = function () {
    console.log("Hello");
};

/*
Output

TypeError

hello is not a function
*/

///////////////////////////////////////////////////////////////////////
// Arrow Function Hoisting
///////////////////////////////////////////////////////////////////////

// welcome();

const welcome = () => {
    console.log("Hi");
};

/*
Output

ReferenceError
*/


/***********************************************************************
                TEMPORAL DEAD ZONE (TDZ)
************************************************************************/

/*
Definition:

The Temporal Dead Zone (TDZ) is the time between
the creation of a variable and its initialization,
during which the variable cannot be accessed.

This applies only to:

1. let
2. const
*/

///////////////////////////////////////////////////////////////////////
// Example 1
///////////////////////////////////////////////////////////////////////

console.log(age);

let age = 22;

/*
Output

ReferenceError
*/

///////////////////////////////////////////////////////////////////////
// Memory Creation
///////////////////////////////////////////////////////////////////////

/*

Memory

↓

age

↓

Temporal Dead Zone

↓

Initialization

↓

22

*/

///////////////////////////////////////////////////////////////////////
// Example 2
///////////////////////////////////////////////////////////////////////

{

    console.log(city);

    let city = "Hyderabad";

}

/*
Output

ReferenceError
*/

///////////////////////////////////////////////////////////////////////
// Example 3
///////////////////////////////////////////////////////////////////////

{

    console.log(country);

    const country = "India";

}

/*
Output

ReferenceError
*/

///////////////////////////////////////////////////////////////////////
// Correct Way
///////////////////////////////////////////////////////////////////////

let student = "Vamsi";

console.log(student);

/*
Output

Vamsi
*/

///////////////////////////////////////////////////////////////////////
// Why TDZ?
///////////////////////////////////////////////////////////////////////

/*
Without TDZ,

developers could accidentally use variables
before assigning values.

TDZ makes JavaScript safer by preventing
unexpected bugs and ensuring variables
are initialized before use.
*/

///////////////////////////////////////////////////////////////////////
// Hoisting vs TDZ
///////////////////////////////////////////////////////////////////////

/*

---------------------------------------------------------------
Hoisting                          | Temporal Dead Zone (TDZ)
---------------------------------------------------------------
Applies to var, let, const        | Applies only to let & const
and functions                     |

Moves declarations to memory      | Prevents access before
                                  | initialization

var becomes undefined             | let/const throw
                                  | ReferenceError
---------------------------------------------------------------

*/

///////////////////////////////////////////////////////////////////////
// Interview Questions
///////////////////////////////////////////////////////////////////////

/*

1. What is Temporal Dead Zone (TDZ)?

The period between variable creation and initialization
during which let and const cannot be accessed.

-----------------------------------------------------

2. Which variables have TDZ?

Only:
1. let
2. const

-----------------------------------------------------

3. Does var have TDZ?

No.

var is hoisted and initialized with undefined.

-----------------------------------------------------

4. What happens if we access a let variable before initialization?

ReferenceError

-----------------------------------------------------

5. Why was TDZ introduced?

To prevent accidental access to variables
before they are initialized, making JavaScript safer.

*/

  

// Note :

// var decalarations are scanned first and made underfined
// function declarations are scanned and made available




console.log(x); // undefined

var x; 

x = 10;

console.log(x); // 10