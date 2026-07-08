// Objects :
// Objects are nothing but real world entities. In JavaScript, objects are used to store keyed collections of various data and more complex entities. An object can be created using the object literal syntax or the Object constructor.


// Object Literal Syntax

    const person = {
        // Props : describes how one object looks like
        firstName: "John",
        lastName: "Doe",
        age: 30,
        isEmployed: true,
        hobbies: ["reading", "traveling", "swimming"],
        address: {
            street: "123 Main St",
            city: "Anytown",
            state: "CA",
            zipCode: "12345"
        },
        // Methods : describes about actions
        fullName: function() {
            return(`${this.firstName} ${this.lastName}`);

        },
        greet: function() {
            console.log(`Hello, my name is ${this.fullName()} and I'm ${this.age} years old`);
        }
    };


// Accessing Object Properties :

    // console.log(person);
    // console.log(person.firstName);
    // console.log(person['lastName']);
    // console.log(person.hobbies[0]);
    // console.log(person.address.state);


// Accessing Object Methods :

    const fullName = person.fullName();

    console.log(fullName);

    person.greet();

// Updating Object Properties :

    person.age = 31;
    person.hobbies.push("cooking");
    console.log(person.age);
    console.log(person.hobbies);

// Adding New Properties and Methods :

    person.email = "johndoe@gmail.com";
    person.sayEmail = function() {
        console.log(`My email is ${this.email}`);
    };


    console.log(person);

// Deleting Object Properties and Methods :

    delete person.isEmployed;
    delete person.sayEmail;

    delete person.hobbies[1]; // Deleting "traveling" from hobbies array
    delete person.address.zipCode; // Deleting zipCode from address object

    console.log(person);








// Object Constructor

    const car = new Object(); 

    car.make = "Toyota";
    car.model = "Camry";
    car.year = 2020;
    car.isElectric = false;
    car.features = ["Bluetooth", "Backup Camera", "Cruise Control"];