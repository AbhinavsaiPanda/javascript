// ==============================================
// IF STATEMENT SCENARIOS
// ==============================================


// Scenario 1: Login Success Notification

// Requirement:
// After successful authentication, display a welcome message to the user.

// Constraints:
const isAuthenticated = true;

if(isAuthenticated){
    console.log(`Welcome Back!`)
}

// Expected:
// Show "Welcome Back!" only when authentication succeeds.


// --------------------------------------------------


// Scenario 2: Course Completion Certificate

// Requirement:
// Generate a certificate only for students who completed the course.

// Constraints:
const courseCompleted = true;

// Expected:
// Show "Certificate Generated" only when courseCompleted is true.

if(courseCompleted){
    console.log("Certificate Generated");
}

// ==============================================
// IF ELSE STATEMENT SCENARIOS
// ==============================================


// Scenario 1: Product Stock Check

// Requirement:
// Show product availability status.

// Constraints:
const stockQuantity = 0;

if(! stockQuantity > 0){
    console.log(`Out of Stock`);
}else{
    console.log(`Product Available`);
}

// Expected:
// Product Available
// OR
// Out of Stock


// --------------------------------------------------


// Scenario 2: Movie Ticket Eligibility

// Requirement:
// Allow booking only for users aged 18 and above.

// Constraints:
const userAge = 16;

if(userAge >= 18){
    console.log(`Booking Allowed`);
}else{
    console.log(`Booking Not Allowed`);
}

// Expected:
// Booking Allowed
// OR
// Booking Not Allowed


// ==============================================
// TERNARY OPERATOR SCENARIOS
// ==============================================


// Scenario 1: Premium Membership Access

// Requirement:
// Display access level based on membership.

// Constraints:
const isPremiumMember = true;

    // (condition) ? "" : "" ;

    isPremiumMember ? "Premium Access" : "Basic Access";

// Expected:
// Premium Access
// OR
// Basic Access

// Note:
// Must use Ternary Operator only.


// --------------------------------------------------


// Scenario 2: Online Payment Status

// Requirement:
// Display payment result.

// Constraints:
const paymentSuccessful = false;

    paymentSuccessful ? "Payment Successful" : "Payment Failed";

// Expected:
// Payment Successful
// OR
// Payment Failed

// Note:
// Must use Ternary Operator only.


// ==============================================
// ELSE IF STATEMENT SCENARIOS
// ==============================================


// Scenario 1: Employee Performance Rating

// Requirement:
// Assign performance rating based on score.

// Constraints:
const performanceScore = 82;

// Rules:
// >= 90  -> Excellent
// >= 75  -> Good
// >= 60  -> Average
// < 60   -> Needs Improvement

    if(performanceScore >= 90 ){
        console.log(`Excellent Performer and you secured ${performanceScore}`);
    }else if(performanceScore >= 75){
        console.log(`You're a Good Perfomer and secured ${performanceScore}`);
    }else if(performanceScore >= 60){
        console.log(`You've an average performance and secured ${performanceScore}`);
    }else{
        console.log(`Needs an improvement`);
    }


// --------------------------------------------------


// Scenario 2: Internet Speed Classification

// Requirement:
// Categorize internet connection speed.

// Constraints:
const internetSpeed = 65;

// Rules:
// >= 100 -> High Speed
// >= 50  -> Medium Speed
// >= 10  -> Low Speed
// < 10   -> Very Slow

    if(internetSpeed >= 100){
        console.log(`High Speed Internet`);
    }else if(internetSpeed >= 50){
        console.log(`Medium Speed Internet`);
    }else if(internetSpeed >= 10){
        console.log(`Low Speed Internet`);
    }else{
        console.log(`Very Slow Internet`);
    }


// ==============================================
// SWITCH STATEMENT SCENARIOS
// ==============================================


// Scenario 1: Support Ticket Priority

// Requirement:
// Display SLA response time based on priority.

// Constraints:
const ticketPriority = "High";

switch(ticketPriority){
    case "Critical" :
        console.log(`Response within 15 minutes`);
        break;
    
    case "High":
        console.log("Response within 1 hour");
        break;

    case "Medium":
        console.log("Response within 4 hours ");
        break;

    case "Low" :
        console.log("Response within 24 hours");
        break;

    default:
        console.log(`Invalid Priority`);
}

// Possible Values:
// Critical
// High
// Medium
// Low

// Expected:
// Critical -> Response within 15 minutes
// High     -> Response within 1 hour
// Medium   -> Response within 4 hours
// Low      -> Response within 24 hours
// Default  -> Invalid Priority


// --------------------------------------------------


// Scenario 2: User Role Dashboard

// Requirement:
// Load dashboard based on role.

// Constraints:
const userRole = "HR";

switch(userRole){

    case "Admin":
        console.log("Admin Dashboard");
        break;

    case "HR":
        console.log("HR Dashboard");
        break;

    case "Manager":
        console.log("Manager Dashboard");
        break;

    case "Employee":
        console.log("Employee Dashboard");
        break;

    default:
        console.log("Guest Dashboard");
}

// Possible Values:
// Admin
// HR
// Manager
// Employee

// Expected:
// Admin Dashboard
// HR Dashboard
// Manager Dashboard
// Employee Dashboard
// Guest Dashboard


// ==============================================
// NESTED IF SCENARIOS
// ==============================================


// Scenario 1: Employee VPN Access

// Requirement:
// Allow VPN access only to active employees.

// Constraints:
const employeeExists = true;
const employeeStatus = "Active";

// Rules:
// Step 1: Verify employee existence.
// Step 2: Verify employee status.
// Step 3: Grant or deny access with proper message.

    if(employeeExists){
        if(employeeStatus === "Active"){
            console.log(`VPN access granted`);
        }else{
            console.log(`VPN access denied`);
        }
    }else{
        console.log(`User not found`)
    }


// --------------------------------------------------


// Scenario 2: University Exam Hall Access

// Requirement:
// Allow students into examination hall.

// Constraints:
const hallTicketAvailable = true;
const feeStatus = "Paid";

// Rules:
// Verify Hall Ticket.
// Verify Fee Status.
// Both must be valid.

    if(hallTicketAvailable){
        if(feeStatus === "Paid"){
            console.log(`Allowed to the examination hall`);
        }else{
            console.log(`Not allowed`);
        }
    }


// ==============================================
// COMPLEX NESTED IF SCENARIOS
// ==============================================


// Scenario 1: Banking Loan Approval Workflow

// Requirement:
// Determine whether a customer is eligible for loan approval.

// Constraints:
const customerAge = 30;
const monthlySalary = 75000;
const creditScore = 780;

// Rules:
// Age >= 21
// Salary >= 50000
// Credit Score >= 750

// Expected:
// Loan Approved
// OR
// Proper rejection reason.


// --------------------------------------------------


// Scenario 2: Corporate System Access Control

// Requirement:
// Allow access to production servers.

// Constraints:
const isEmployee = true;
const isMFAEnabled = true;
const securityTrainingCompleted = true;

// Rules:
// Verify Employee.
// Verify MFA.
// Verify Security Training.
// Then allow access.


// ==============================================
// PRODUCTION GRADE CHALLENGE SCENARIOS
// ==============================================


// Scenario 1: E-Commerce Checkout Validation

// Requirement:
// Allow order placement only after all validations pass.

// Constraints:
const isLoggedIn = true;
const cartItems = 3;
const shippingAddressAvailable = true;
const paymentMethodSelected = true;

// Rules:
// User must be logged in.
// Cart must contain at least one item.
// Shipping address must exist.
// Payment method must be selected.

// Expected:
// Order Placed Successfully
// OR
// Appropriate validation error.


// --------------------------------------------------


// Scenario 2: LMS Course Enrollment Validation

// Requirement:
// Allow enrollment into advanced course.

// Constraints:
const studentLoggedIn = true;
const prerequisiteCompleted = true;
const courseSeatsAvailable = true;
const feePaid = false;

// Rules:
// Verify Login.
// Verify Prerequisite.
// Verify Seat Availability.
// Verify Fee Payment.

// Expected:
// Enrollment Successful
// OR
// Exact reason for failure.


// ==============================================
// ADVANCED REAL-TIME SCENARIOS
// ==============================================


// Scenario 1: Hospital Appointment Booking

// Constraints:
const doctorAvailable = true;
const patientRegistered = true;
const insuranceVerified = false;

// Rules:
// Check patient registration.
// Check doctor availability.
// Check insurance verification.
// Then allow appointment booking.


// --------------------------------------------------


// Scenario 2: Job Application Screening

// Constraints:
const experienceYears = 4;
const skillsMatched = true;
const degreeVerified = true;

// Rules:
// Minimum experience = 3 years.
// Skills must match.
// Degree must be verified.

// Expected:
// Eligible for Interview
// OR
// Rejected with proper reason.