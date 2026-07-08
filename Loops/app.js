// Loops :

// Loops are used to execute a block of code repeatedly until a specified condition is met. There are several types of loops in JavaScript, including:

// 1. For Loop:
// The for loop is used when the number of iterations is known beforehand. It consists of three parts: initialization, condition, and increment/decrement.

// Syntax : 


    // for(initialization; condition; increment/decrement) {
    //     // code block to be executed
    // }


    // Example of a for loop that prints numbers from 1 to 5:

    for(let i = 5; i <= 10; i++){
        console.log(i);
    }

// 2. While Loop:
// The while loop is used when the number of iterations is not known beforehand. It continues to execute the code block as long as the specified condition evaluates to true.

// Syntax :

    // while(condition) {
    //     // code block to be executed
    // }

    // Example of a while loop that prints numbers from 1 to 5:

    console.log("While Loop Example:");

    let j = 1;

    while(j <= 5){
        console.log(j);
        j++;
    }

// 3. Do-While Loop:
// The do-while loop is similar to the while loop, but it guarantees that the code block will be executed at least once, as the condition is evaluated after the block is executed.

// Syntax :

    // do {
    //     // code block to be executed
    // } while(condition);   


    // Example of a do-while loop that prints numbers from 1 to 5:

    console.log("Do-While Loop Example:");

    let k = 1;

    do {
        console.log(k);
        k++;
    } while(k <= 5); 




// String Iteration using for loop:

    let str = "Hello,World!";

    console.log("String Iteration using for loop:");

    for(let i = 0; i <= str.length; i++){
        console.log(`${str[i]}`);
    }


// Array Iteration using for loop:

    const employees = ["John", "Jane", ,"Jack", "Jill"]; 

    console.log("Array Iteration using for loop:");

    for(let i = 0; i < employees.length; i++){
        console.log(employees[i]);
    }


// Advanced Looping Techniques:


// for in Loop:

    const user = {
        name : "Rahul",
        age : 24,
        occupation : "softwareEngineer",
        location : "Hyderabad"
    }


    for(let info in user){
        console.log(user[info]);
    }


// for of Loop:

console.log(`For of Loop Example`)

    for(let employee of employees){
        console.log(employee);
    }