/**********************************************************************
 * JavaScript Array Methods - Real-Time Examples
 * Dataset: Employee Management System
 *
 * Imagine this data is coming from an API or Database.
 **********************************************************************/

const employees = [
  { id: 1, name: "Rahul", department: "Engineering", salary: 75000, experience: 3, isActive: true },
  { id: 2, name: "Priya", department: "HR", salary: 50000, experience: 5, isActive: true },
  { id: 3, name: "Anjali", department: "Engineering", salary: 90000, experience: 7, isActive: false },
  { id: 4, name: "Vamsi", department: "Sales", salary: 65000, experience: 2, isActive: true },
  { id: 5, name: "Kiran", department: "Engineering", salary: 85000, experience: 6, isActive: true },
  { id: 3, name: "Kiran", department: "Engineering", salary: 85000, experience: 6, isActive: true },
];

console.log("Original Employees");
console.table(employees);

/* ===========================================================
   1. map()
   ===========================================================

   Theory:
   Creates a NEW array by transforming every element.

   Real-Time:
   - Display Product Names
   - Display Employee Names
   - Render Cards in React
*/

const employeeNames = employees.map((employee) => employee.name);

console.log("map()");
console.log(employeeNames);

/* ===========================================================
   2. filter()
   ===========================================================

   Theory:
   Returns ALL matching elements.

   Real-Time:
   - Amazon Filters
   - Swiggy Veg Filter
   - Search Results
*/

const engineeringEmployees = employees.filter(
  (employee) => employee.department === "Engineering"
).map((employee)=> employee.name);

console.log("filter()");
console.table(engineeringEmployees);


const isActiveEmployees = employees.filter((employee)=> employee.isActive === true);
console.log(isActiveEmployees);

const engineeringInactiveEmployees = employees.filter(employee => employee.department === "Engineering" && employee.isActive === false);

console.log(engineeringInactiveEmployees);


/* ===========================================================
   3. find()
   ===========================================================

   Theory:
   Returns FIRST matching object.

   Real-Time:
   - Employee by ID
   - Product by ID
   - User by Email
*/

const employee = employees.find((employee) => employee.id === 3);

console.log("find()");
console.log(employee);

/* ===========================================================
   4. findIndex()
   ===========================================================

   Theory:
   Returns index of matching element.

   Real-Time:
   - Update Employee
   - Delete Employee
*/

const employeeIndex = employees.findIndex(
  (employee) => employee.name === "Kiran"
);

console.log("findIndex()");
console.log(employeeIndex);

/* ===========================================================
   5. forEach()
   ===========================================================

   Theory:
   Executes a function for every element.

   Real-Time:
   - Send Emails
   - Notifications
   - Generate Reports
*/

console.log("forEach()");

employees.forEach((employee) => {
  console.log(
    `${employee.name} works in ${employee.department} Department`
  );
});

/* ===========================================================
   6. some()
   ===========================================================

   Theory:
   Returns true if ANY one element satisfies the condition.

   Real-Time:
   - Any Pending Payment?
   - Any Failed Student?
   - Any Admin User?
*/

const hasInactiveEmployee = employees.some(
  (employee) => employee.isActive === false
);

console.log("some()");
console.log(hasInactiveEmployee);

/* ===========================================================
   7. every()
   ===========================================================

   Theory:
   Returns true only if ALL elements satisfy the condition.

   Real-Time:
   - All Documents Uploaded?
   - All Students Passed?
*/

const allEmployeesActive = employees.every(
  (employee) => employee.isActive
);

console.log("every()");
console.log(allEmployeesActive);

/* ===========================================================
   8. reduce()
   ===========================================================

   Theory:
   Reduces multiple values into ONE value.

   Real-Time:
   - Shopping Cart Total
   - Total Revenue
   - Total Salary
*/

const totalSalary = employees.reduce((total, employee) => {
  return total + employee.salary;
}, 0);

console.log("reduce()");
console.log(totalSalary);

/* ===========================================================
   9. sort()
   ===========================================================

   Theory:
   Sorts the array.

   Real-Time:
   - Price Low to High
   - Salary High to Low
   - Highest Rating
*/

const sortedEmployees = [...employees].sort(
  (a, b) => a.salary - b.salary
);

console.log("sort()");
console.table(sortedEmployees);

/* ===========================================================
   10. push()
   ===========================================================

   Theory:
   Adds element at the END.

   Real-Time:
   - Add Employee
   - Add Product
   - Add Comment
*/

const employeesPush = [...employees];

employeesPush.push({
  id: 6,
  name: "Sneha",
  department: "Testing",
  salary: 55000,
  experience: 2,
  isActive: true,
});

console.log("push()");
console.table(employeesPush);

/* ===========================================================
   11. splice()
   ===========================================================

   Theory:
   Removes / Inserts / Replaces elements.

   Real-Time:
   - Delete Employee
   - Delete Product
*/

const employeesSplice = [...employees];

const deleteIndex = employeesSplice.findIndex(
  (employee) => employee.id === 2
);

employeesSplice.splice(deleteIndex, 1);

console.log("splice()");
console.table(employeesSplice);

/* ===========================================================
   12. slice()
   ===========================================================

   Theory:
   Returns a portion of an array.

   Real-Time:
   - Pagination
   - First 10 Products
*/

const firstThreeEmployees = employees.slice(0, 3);

console.log("slice()");
console.table(firstThreeEmployees);

/* ===========================================================
   13. filter() + map()
   ===========================================================

   Real-Time:
   Engineering Employee Names
*/

const engineeringNames = employees
  .filter((employee) => employee.department === "Engineering")
  .map((employee) => employee.name);

console.log("filter() + map()");
console.log(engineeringNames);

/* ===========================================================
   14. filter() + reduce()
   ===========================================================

   Real-Time:
   Total Engineering Salary
*/

const engineeringSalary = employees
  .filter((employee) => employee.department === "Engineering")
  .reduce((total, employee) => total + employee.salary, 0);

console.log("filter() + reduce()");
console.log(engineeringSalary);

/* ===========================================================
   15. filter() + sort() + map()
   ===========================================================

   Real-Time:
   Engineering Employees sorted by Salary
*/

const sortedEngineeringEmployees = employees
  .filter((employee) => employee.department === "Engineering")
  .sort((a, b) => b.salary - a.salary)
  .map((employee) => employee.name);

console.log("filter() + sort() + map()");
console.log(sortedEngineeringEmployees);

/* ===========================================================
   BONUS METHODS
   ===========================================================
*/

/* includes() */

const departments = employees.map((employee) => employee.department);

console.log("includes()");
console.log(departments.includes("HR"));

/* concat() */

const newEmployees = [
  {
    id: 6,
    name: "Sneha",
    department: "Testing",
    salary: 55000,
    experience: 2,
    isActive: true,
  },
];

const mergedEmployees = employees.concat(newEmployees);

console.log("concat()");
console.table(mergedEmployees);

/* join() */

const names = employees.map((employee) => employee.name);

console.log("join()");
console.log(names.join(", "));

/* reverse() */

const reverseEmployees = [...employees].reverse();

console.log("reverse()");
console.table(reverseEmployees);

/* flat() */

const nestedSkills = [
  ["HTML", "CSS"],
  ["JavaScript", "React"],
  ["Node", "MongoDB"],
];

console.log("flat()");
console.log(nestedSkills.flat());

/* ===========================================================
   SUMMARY
   ===========================================================

   map()        -> Transform Data
   filter()     -> Get Multiple Records
   forEach()    -> Perform Action
   reduce()     -> One Final Value
   sort()       -> Sort Data
   push()       -> Add Element
   splice(1,3, 1, 2, 3)     -> Delete/Insert/Replace
   slice()      -> Copy Portion
   
   find()       -> Get One Record
   findIndex()  -> Find Position
   includes()   -> Check Value Exists
   concat()     -> Merge Arrays
   join()       -> Convert Array to String
   reverse()    -> Reverse Order


   flat()       -> Flatten Nested Arrays. [[], [], []].flat() => [];
   some()       -> Any Match?
   every()      -> All Match?

***************************************************************/