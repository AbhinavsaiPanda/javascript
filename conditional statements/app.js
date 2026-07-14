// Conditional Statements :

// Definition:
// Conditional Statements are used to make decisions in a program.
// They allow different blocks of code to execute based on whether a condition is true or false.

// CS are used to perform different actions based on different conditions.
// CS works on the basis of true or false.


// if statement :

// Definition:
// The if statement executes a block of code only when the specified condition evaluates to true.

// if statement is used to execute a block of code if a specified condition is true.


    // if(condition){
    //     // Code to be executed
    // }



// if else statement :

// Definition:
// The if else statement is used when there are two possible outcomes.
// If the condition is true, the if block executes; otherwise, the else block executes.

    // if(condition){
    //     // code to be executed when the condition returns true
    // }else{
    //     // code to be executed when the condition returns false
    // }



// ternary operator :

// Definition:
// The ternary operator is a short-hand version of the if else statement.
// It evaluates a condition and returns one value if true and another value if false.

// The ternary operator is a shorthand way of writing an if-else statement.

    // Syntax : condition ? true block code : false block code



// else if statement :

// Definition:
// The else if statement is used to check multiple conditions sequentially.
// JavaScript executes the block of the first condition that evaluates to true.

// if(condition1){
//     // code to be executed if the condition1 is true
// }else if(condition2){
//     // code to be executed if the condition2 is true
// }else if(condition3){
//     // code to be executed if the condition3 is true
// }else{
//     // code to be executed if all the above conditions fails
// }



// switch statement :

// Definition:
// The switch statement is used to execute one block of code from multiple possible options
// based on the value of an expression.

// const userDesignation = "Manager";


    // switch(userDesignation){

    //     case "Manager":
    //         // code to be executed when the expression matches value1
    //         console.log("Welcome Manager");
    //         break;

    //     case "Developer":
    //         // code to be executed when the expression matches value2
    //         console.log("Welcome Developer");
    //         break;

    //     case "Designer":
    //         // code to be executed when the expression matches value3
    //         console.log("Welcome Designer");
    //         break;

    //     default:
    //         // code to be executed when the expression doesn't match any of the above values
    //         console.log("Welcome User");
    // }



// nested Conditional statements :

// Definition:
// A Nested Conditional Statement is a conditional statement placed inside another
// conditional statement. It is used when a second decision depends on the result
// of the first decision.


    // const userRole = "Admin";
    // const userStatus = "Active";

    // if(userRole === "Admin"){
    //     if(userStatus === "Active"){
    //         console.log("Welcome Admin");
    //     }else{
    //         console.log("Your account is not active");
    //     }
    // }else{
    //     console.log("Welcome User");
    // }




    // Logical AND Operator (&&)

// Definition:
// Returns true only when all conditions are true.
// If any condition is false, the result becomes false.


// Logical OR Operator (||)

// Definition:
// Returns true if at least one condition is true.
// Returns false only when all conditions are false.


// Logical NOT Operator (!)

// Definition:
// Reverses the boolean value.
// true becomes false and false becomes true.

