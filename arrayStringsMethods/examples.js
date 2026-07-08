/*****************************************************************************************
 *
 *                    JAVASCRIPT ARRAY METHODS - THEORY NOTES
 *                          (Production-Oriented Explanation)
 *
 *  These notes are meant to be read BEFORE writing the code.
 *  Understanding WHY a method exists is more important than memorizing syntax.
 *
 *****************************************************************************************/


/* =============================================================================
   1. map()
   =============================================================================

   THEORY
   ------
   map() is a Transformation Method.

   It takes every element from an array,
   transforms it into something else,
   and returns a BRAND NEW ARRAY.

   Think of it like a factory.

          Employee Objects
                 │
                 ▼
         Extract Employee Names
                 │
                 ▼
       ["Rahul", "Priya", "Anjali"]

   Original Array
   --------------
   [
      {name:"Rahul"},
      {name:"Priya"}
   ]

   New Array
   ---------
   [
      "Rahul",
      "Priya"
   ]

   ✔ Returns a NEW array
   ✔ Doesn't modify original array
   ✔ One input → One output
   ✔ Used heavily in React

   Production Examples
   -------------------
   • Display Product Cards
   • Display Employee Names
   • Calculate GST
   • Convert Prices
   • Format API Response
   • Render JSX Components

   Syntax
   ------
   array.map((element, index, array) => {
       return transformedValue;
   });

=============================================================================*/


/* =============================================================================
   map() vs forEach()
   =============================================================================

   Students confuse these two the most.

   -----------------------------------------------------------------------
   map()                             | forEach()
   -----------------------------------------------------------------------
   Returns NEW array                 | Returns undefined
   Used for Transformation           | Used for Performing Action
   Chainable                         | Not chainable
   Doesn't modify original           | Usually performs side effects
   React uses map()                  | Logging / Emails / API Calls
   -----------------------------------------------------------------------

   map()

       Employees
           │
           ▼
      Employee Names
           │
           ▼
   ["Rahul","Priya"]

   forEach()

       Employees
           │
           ▼
      console.log()

       Rahul
       Priya

   Interview Question

   Which method should we use for rendering React Components?

   Answer

   map()

=============================================================================*/


/* =============================================================================
   2. filter()
   =============================================================================

   THEORY
   ------

   filter() is a Selection Method.

   It checks every element.

   If the condition becomes TRUE,
   the element is kept.

   Otherwise,
   it is removed.

          Employees
              │
              ▼
      Department === Engineering
              │
              ▼
      Rahul
      Anjali
      Kiran

   Notice

   filter() DOES NOT modify objects.

   It only removes unwanted objects.

   Returns

   A NEW ARRAY.

   Production Examples

   • Amazon Filters
   • Swiggy Veg Only
   • Search Results
   • Active Employees
   • Pending Orders
   • Category Filtering

   Syntax

   array.filter((element) => condition);

=============================================================================*/


/* =============================================================================
   filter() vs find()
   =============================================================================

   -----------------------------------------------------------------------
   filter()                      | find()
   -----------------------------------------------------------------------
   Returns Multiple Objects      | Returns Single Object
   Returns Array                 | Returns Object
   Searches Entire Array         | Stops after First Match
   [] if nothing found           | undefined if nothing found
   -----------------------------------------------------------------------

   Need ALL Engineering Employees?

   filter()

   Need Employee with ID = 3 ?

   find()

=============================================================================*/


/* =============================================================================
   3. find()
   =============================================================================

   THEORY
   ------

   find() returns ONLY ONE object.

   As soon as JavaScript finds the first matching object,

   it STOPS searching.

   This makes it faster than filter()
   when only one record is required.

   Production Examples

   • Employee Details
   • Product Details
   • Student Profile
   • Order Details
   • User by Email

   Syntax

   array.find((element)=>condition);

=============================================================================*/


/* =============================================================================
   find() vs findIndex()
   =============================================================================

   find()

   Returns

   {
      id:3,
      name:"Rahul"
   }

   findIndex()

   Returns

   2

   Use find()

   when object is required.

   Use findIndex()

   when position is required.

=============================================================================*/


/* =============================================================================
   4. forEach()
   =============================================================================

   THEORY
   ------

   forEach() simply performs an operation
   on every element.

   It DOES NOT create a new array.

   It DOES NOT return anything.

   Use it when you only want an action.

   Production Examples

   • Send Email
   • Send Notifications
   • Save Logs
   • Print Reports
   • Update Database

=============================================================================*/


/* =============================================================================
   5. reduce()
   =============================================================================

   THEORY
   ------

   reduce() converts

      MANY VALUES

            ▼

       ONE FINAL VALUE

   Shopping Cart

      200
      500
      300

         ▼

      Total = 1000

   Dashboard

      Salaries

         ▼

      Total Salary

   YouTube

      Views

         ▼

      Total Views

   Syntax

   array.reduce((accumulator,currentValue)=>{

   },initialValue);

   Accumulator

      0

      ▼

    +100

      ▼

    100

      ▼

    +200

      ▼

    300

      ▼

    +400

      ▼

    700

   Production Examples

   • Shopping Cart Total
   • Total Revenue
   • Total Salary
   • Average Marks
   • Total Orders
   • Analytics Dashboard

=============================================================================*/


/* =============================================================================
   reduce() vs map()
   =============================================================================

   -----------------------------------------------------------------------
   map()                         | reduce()
   -----------------------------------------------------------------------
   Returns Array                 | Returns Single Value
   Transformation                | Aggregation
   Same Number of Elements       | Usually One Result
   -----------------------------------------------------------------------

=============================================================================*/


/* =============================================================================
   6. some()
   =============================================================================

   THEORY
   ------

   some() checks

   "Does AT LEAST ONE element satisfy the condition?"

   As soon as one element becomes TRUE,

   JavaScript stops searching.

   Think

   OR Logic

   true || false || false

   Result

   true

   Production Examples

   • Any Admin?
   • Any Pending Payment?
   • Any Failed Student?
   • Any Out Of Stock Product?
   • Any Unread Notification?

=============================================================================*/


/* =============================================================================
   7. every()
   =============================================================================

   THEORY
   ------

   every() checks

   "Do ALL elements satisfy the condition?"

   If even one becomes FALSE,

   JavaScript stops searching.

   Think

   AND Logic

   true && true && false

   Result

   false

   Production Examples

   • All Students Passed?
   • All Documents Uploaded?
   • All Employees Active?
   • All Products Available?

=============================================================================*/


/* =============================================================================
   some() vs every()
   =============================================================================

   -----------------------------------------------------------------------
   some()                         | every()
   -----------------------------------------------------------------------
   At least One                   | All
   OR Logic                       | AND Logic
   Stops after First TRUE         | Stops after First FALSE
   -----------------------------------------------------------------------

=============================================================================*/


/* =============================================================================
   8. push()
   =============================================================================

   THEORY
   ------

   push()

   Adds element(s)
   at the END of an array.

   ✔ Changes original array

   ✔ Returns NEW LENGTH

   Production Examples

   • Add Product
   • Add Employee
   • Add Comment
   • Add Chat Message

=============================================================================*/


/* =============================================================================
   push() vs concat()
   =============================================================================

   -----------------------------------------------------------------------
   push()                         | concat()
   -----------------------------------------------------------------------
   Modifies Original              | Doesn't Modify Original
   Adds Item                      | Merges Arrays
   Returns Length                 | Returns New Array
   -----------------------------------------------------------------------

=============================================================================*/


/* =============================================================================
   9. splice()
   =============================================================================

   THEORY
   ------

   splice()

   is called

   "Swiss Army Knife of Arrays"

   Because it can

   ✔ Delete

   ✔ Insert

   ✔ Replace

   using a single method.

   Syntax

   splice(startIndex, deleteCount, newItems)

=============================================================================*/


/* =============================================================================
   splice() vs slice()
   =============================================================================

   -----------------------------------------------------------------------
   splice()                     | slice()
   -----------------------------------------------------------------------
   Modifies Original            | Doesn't Modify Original
   Delete / Insert / Replace    | Copies Portion
   Mutating Method              | Non-Mutating Method
   -----------------------------------------------------------------------

   Remember

   splice()

   Modify

   slice()

   Copy

=============================================================================*/


/* =============================================================================
   10. sort()
   =============================================================================

   THEORY
   ------

   sort()

   Rearranges array elements.

   By default,

   JavaScript sorts alphabetically.

   Example

   [100,2,30]

   becomes

   [100,2,30]

   NOT

   [2,30,100]

   Therefore,

   always use compare function
   while sorting numbers.

   Ascending

   (a,b)=>a-b

   Descending

   (a,b)=>b-a

   Production Examples

   • Price Low to High
   • Salary High to Low
   • Highest Rating
   • Newest First

=============================================================================*/


/* =============================================================================
   MUTATING vs NON-MUTATING METHODS
   =============================================================================

   Mutating Methods
   ----------------

   push()

   pop()

   shift()

   unshift()

   splice()

   sort()

   reverse()

   These methods MODIFY the original array.


   Non-Mutating Methods
   --------------------

   map()

   filter()

   find()

   slice()

   concat()

   flat()

   These methods RETURN a new array/object/value
   without changing the original array.

=============================================================================*/


/* =============================================================================
   DECISION TREE
   =============================================================================

   Need to transform every item?

          map()

   Need multiple matching records?

          filter()

   Need one matching record?

          find()

   Need position?

          findIndex()

   Need action only?

          forEach()

   Need one final value?

          reduce()

   Need at least one match?

          some()

   Need every item to match?

          every()

   Need delete / insert / replace?

          splice()

   Need copy of some elements?

          slice()

   Need sorting?

          sort()

=============================================================================*/



/********************************************************************
 * JavaScript Array Methods
 * Dataset: Employee Management System
 ********************************************************************/

const employees = [
  {
    id: 1,
    name: "Rahul",
    department: "Engineering",
    salary: 75000,
    experience: 3,
    isActive: true,
  },
  {
    id: 2,
    name: "Priya",
    department: "HR",
    salary: 50000,
    experience: 5,
    isActive: true,
  },
  {
    id: 3,
    name: "Anjali",
    department: "Engineering",
    salary: 90000,
    experience: 7,
    isActive: false,
  },
  {
    id: 4,
    name: "Vamsi",
    department: "Sales",
    salary: 65000,
    experience: 2,
    isActive: true,
  },
  {
    id: 5,
    name: "Kiran",
    department: "Engineering",
    salary: 85000,
    experience: 6,
    isActive: true,
  },
];

console.table(employees);

/********************************************************************
 * map()
 ********************************************************************/

console.log("========== map() ==========");

// Get only employee names

const employeeNames = employees.map((employee) => employee.name);

console.log(employeeNames);

// Increase salary by 10%

const updatedSalaries = employees.map((employee) => ({
  ...employee,
  salary: employee.salary * 1.1,
}));

console.table(updatedSalaries);

/********************************************************************
 * filter()
 ********************************************************************/

console.log("========== filter() ==========");

// Engineering Employees

const engineeringEmployees = employees.filter(
  (employee) => employee.department === "Engineering"
);

console.table(engineeringEmployees);

// Active Employees

const activeEmployees = employees.filter(
  (employee) => employee.isActive
);

console.table(activeEmployees);

// Employees having salary greater than 70000

const highSalaryEmployees = employees.filter(
  (employee) => employee.salary > 70000
);

console.table(highSalaryEmployees);

/********************************************************************
 * find()
 ********************************************************************/

console.log("========== find() ==========");

// Employee with ID = 3

const employee = employees.find(
  (employee) => employee.id === 3
);

console.log(employee);

// Employee by Name

const rahul = employees.find(
  (employee) => employee.name === "Rahul"
);

console.log(rahul);

/********************************************************************
 * findIndex()
 ********************************************************************/

console.log("========== findIndex() ==========");

// Position of Kiran

const index = employees.findIndex(
  (employee) => employee.name === "Kiran"
);

console.log(index);

/********************************************************************
 * forEach()
 ********************************************************************/

console.log("========== forEach() ==========");

employees.forEach((employee) => {
  console.log(
    `${employee.name} works in ${employee.department}`
  );
});

/********************************************************************
 * some()
 ********************************************************************/

console.log("========== some() ==========");

// Is there any inactive employee?

const hasInactiveEmployee = employees.some(
  (employee) => !employee.isActive
);

console.log(hasInactiveEmployee);

// Any employee salary above 90000?

const hasHighSalary = employees.some(
  (employee) => employee.salary > 90000
);

console.log(hasHighSalary);

/********************************************************************
 * every()
 ********************************************************************/

console.log("========== every() ==========");

// Are all employees active?

const allEmployeesActive = employees.every(
  (employee) => employee.isActive
);

console.log(allEmployeesActive);

// Do all employees have salary above 40000?

const allSalaryGreaterThan40K = employees.every(
  (employee) => employee.salary > 40000
);

console.log(allSalaryGreaterThan40K);

/********************************************************************
 * reduce()
 ********************************************************************/

console.log("========== reduce() ==========");

// Total Salary

const totalSalary = employees.reduce(
  (total, employee) => total + employee.salary,
  0
);

console.log(totalSalary);

// Average Salary

const averageSalary =
  employees.reduce(
    (total, employee) => total + employee.salary,
    0
  ) / employees.length;

console.log(averageSalary);

// Count Active Employees

const activeEmployeeCount = employees.reduce(
  (count, employee) => {
    if (employee.isActive) {
      count++;
    }

    return count;
  },
  0
);

console.log(activeEmployeeCount);

/********************************************************************
 * sort()
 ********************************************************************/

console.log("========== sort() ==========");

// Salary Low to High

const ascendingSalary = [...employees].sort(
  (a, b) => a.salary - b.salary
);

console.table(ascendingSalary);

// Salary High to Low

const descendingSalary = [...employees].sort(
  (a, b) => b.salary - a.salary
);

console.table(descendingSalary);

/********************************************************************
 * push()
 ********************************************************************/

console.log("========== push() ==========");

const employees1 = [...employees];

employees1.push({
  id: 6,
  name: "Sneha",
  department: "Testing",
  salary: 60000,
  experience: 2,
  isActive: true,
});

console.table(employees1);

/********************************************************************
 * splice()
 ********************************************************************/

console.log("========== splice() ==========");

const employees2 = [...employees];

const deleteIndex = employees2.findIndex(
  (employee) => employee.id === 2
);

employees2.splice(deleteIndex, 1);

console.table(employees2);

/********************************************************************
 * slice()
 ********************************************************************/

console.log("========== slice() ==========");

// First Three Employees

const firstThreeEmployees = employees.slice(0, 3);

console.table(firstThreeEmployees);

/********************************************************************
 * includes()
 ********************************************************************/

console.log("========== includes() ==========");

const departments = employees.map(
  (employee) => employee.department
);

console.log(departments.includes("HR"));

console.log(departments.includes("Finance"));

/********************************************************************
 * concat()
 ********************************************************************/

console.log("========== concat() ==========");

const newEmployees = [
  {
    id: 6,
    name: "Sneha",
    department: "Testing",
    salary: 60000,
    experience: 2,
    isActive: true,
  },
];

const mergedEmployees = employees.concat(newEmployees);

console.table(mergedEmployees);

/********************************************************************
 * join()
 ********************************************************************/

console.log("========== join() ==========");

const employeeNamesString = employees
  .map((employee) => employee.name)
  .join(", ");

console.log(employeeNamesString);

/********************************************************************
 * reverse()
 ********************************************************************/

console.log("========== reverse() ==========");

const reverseEmployees = [...employees].reverse();

console.table(reverseEmployees);

/********************************************************************
 * Method Chaining
 ********************************************************************/

console.log("========== Chaining ==========");

// Engineering Employee Names

const engineeringNames = employees
  .filter((employee) => employee.department === "Engineering")
  .map((employee) => employee.name);

console.log(engineeringNames);

// Total Salary of Engineering Employees

const engineeringSalary = employees
  .filter((employee) => employee.department === "Engineering")
  .reduce(
    (total, employee) => total + employee.salary,
    0
  );

console.log(engineeringSalary);

// Active Employees sorted by Salary

const activeSortedEmployees = employees
  .filter((employee) => employee.isActive)
  .sort((a, b) => b.salary - a.salary)
  .map((employee) => employee.name);

console.log(activeSortedEmployees);