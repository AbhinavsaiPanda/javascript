/****************************************************************************************
 * 1. WHAT IS AN EVENT?
 ****************************************************************************************

Definition:
-----------
An Event is an action or occurrence that happens inside the browser, and JavaScript
can detect it and respond by executing a function.

In simple words:
An Event is anything that happens on a webpage.

Examples:
---------
• Clicking a button
• Double-clicking an image
• Typing in an input field
• Hovering over an element
• Scrolling the webpage
• Submitting a form
• Pressing a keyboard key
• Resizing the browser window

Why do we need Events?
----------------------
Without events, a webpage would simply display information.
Events make a webpage interactive by allowing users to communicate with the application.

Real-world Examples:
--------------------
• Login Button → Click Event
• Search Box → Input Event
• Image Gallery → Mouse Hover Event
• Shopping Cart → Click Event
• Registration Form → Submit Event

Example:
--------
User clicks a button
        ↓
Browser detects the click
        ↓
JavaScript receives the event
        ↓
Callback function executes


Example Code:

const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
    console.log("Button Clicked");
});

****************************************************************************************/


/****************************************************************************************
 * 2. EVENT TYPES
 ****************************************************************************************

JavaScript provides many built-in events.

These events are grouped into different categories depending on how the user interacts
with the webpage.

The major categories are:

1. Mouse Events
2. Keyboard Events
3. Form Events
4. Window Events

=========================================================================================
A. MOUSE EVENTS
=========================================================================================

Mouse events occur whenever the user interacts using the mouse.

Common Mouse Events:

click         -> Single click
dblclick      -> Double click
mousedown     -> Mouse button pressed
mouseup       -> Mouse button released
mousemove     -> Mouse pointer moves
mouseenter    -> Mouse enters an element
mouseleave    -> Mouse leaves an element
mouseover     -> Mouse enters including child elements
mouseout      -> Mouse leaves including child elements
contextmenu   -> Right-click

Example:

button.addEventListener("click", function () {
    console.log("Mouse Click");
});

=========================================================================================
B. KEYBOARD EVENTS
=========================================================================================

Keyboard events occur whenever a user presses or releases a key.

Common Keyboard Events:

keydown
keyup

Useful Properties:

event.key
event.code

Example:

document.addEventListener("keydown", function(event){

    console.log(event.key);

});

=========================================================================================
C. FORM EVENTS
=========================================================================================

These events occur while interacting with forms.

Common Form Events:

submit
change
focus
blur
reset

Example:

form.addEventListener("submit", function(event){

    event.preventDefault();

});

=========================================================================================
D. WINDOW EVENTS
=========================================================================================

These events are related to the browser window.

Common Window Events:

load
DOMContentLoaded
resize
scroll
beforeunload

Example:

window.addEventListener("resize", function(){

    console.log(window.innerWidth);

});

****************************************************************************************/


/****************************************************************************************
 * 3. WAYS TO ATTACH EVENTS
 ****************************************************************************************

JavaScript provides three different ways to attach events.

=========================================================================================
METHOD 1 : INLINE EVENTS
=========================================================================================

Definition:
-----------
The event is written directly inside the HTML element.

Example:

<button onclick="function addTocart(){
}" >
    Add to Cart
</button>

function addToCart(){
    console.log("product added");
}

Advantages:
-----------
• Easy for beginners
• Less JavaScript

Disadvantages:
--------------
• Mixes HTML and JavaScript
• Difficult to maintain
• Not used in production

=========================================================================================
METHOD 2 : PROPERTY-BASED EVENTS
=========================================================================================

Definition:
-----------
The event is assigned using a JavaScript property.

Example:

const btn = document.querySelector(".btn");

btn.onclick = function(){
    console.log("Clicked");
}

Advantages:
-----------
• Cleaner than Inline Events
• Easy to understand

Disadvantages:
--------------
Only one event can be attached.

If another onclick is assigned,
the previous one will be replaced.

=========================================================================================
METHOD 3 : addEventListener()
=========================================================================================

Definition:
-----------
The modern and most recommended way to attach events.

Example:

const btn = document.querySelector(".btn");

btn.addEventListener("click", function(){

    console.log("Clicked");

});

Advantages:
-----------
• Multiple listeners
• Clean code
• Better readability
• Easy maintenance
• Preferred in production

****************************************************************************************/


/****************************************************************************************
 * 4. EVENT PROPAGATION
 ****************************************************************************************

Definition:
-----------
Event Propagation is the process that describes how an event travels through
the DOM Tree after it is triggered.

Whenever an event occurs,
it doesn't stay only on that element.

It travels through the DOM.

There are TWO phases.

1. Event Capturing
2. Event Bubbling

DOM Structure:

Document
    ↓
HTML
    ↓
Body
    ↓
Parent
    ↓
Child

****************************************************************************************/


/****************************************************************************************
 * 5. EVENT BUBBLING
 ****************************************************************************************

Definition:
-----------
Event Bubbling is the process where the event starts from the TARGET ELEMENT
and moves upward through its parent elements.

It is the DEFAULT behaviour in JavaScript.

Flow:

Button
   ↑
Div
   ↑
Body
   ↑
HTML
   ↑
Document


Example:

parent.addEventListener("click",function(){

    console.log("Parent");

});

child.addEventListener("click",function(){

    console.log("Child");

});

Output:

Child
Parent

****************************************************************************************/


/****************************************************************************************
 * 6. EVENT CAPTURING
 ****************************************************************************************

Definition:
-----------
Event Capturing is the process where the event starts from the TOP of the DOM
and travels down to the target element.

Capturing is NOT enabled by default.

To enable capturing:

addEventListener("click", handler, true)

Flow:

Document
   ↓
HTML
   ↓
Body
   ↓
Div
   ↓
Button

Example:

parent.addEventListener("click",function(){

    console.log("Parent");

},true);

child.addEventListener("click",function(){

    console.log("Child");

},true);

Output:

Parent
Child

****************************************************************************************/


/****************************************************************************************
 * 7. EVENT DELEGATION
 ****************************************************************************************

Definition:
-----------
Event Delegation is a technique where a single event listener is attached
to the parent element instead of attaching listeners to every child.

The parent handles the events of its child elements using event.target.

Why Event Delegation?

Imagine there are 1000 buttons.

Option 1

1000 Event Listeners

Problems:
---------
• High Memory Usage
• Difficult Maintenance

Option 2

One Listener on Parent

Benefits:
---------
• Better Performance
• Less Memory
• Easy Maintenance
• Works for Dynamic Elements

Example:

list.addEventListener("click", function(event){

    console.log(event.target);

});

Real-world Examples:
--------------------
• Todo List
• Product Cards
• Notifications
• Dynamic Tables
• Chat Applications

****************************************************************************************/


/****************************************************************************************
 * 8. EVENT OBJECT
 ****************************************************************************************

Definition:
-----------
Whenever an event occurs,
JavaScript automatically creates an Event Object.

This object contains all the information related to that event.

Common Variable Names:

event
e
evt

Common Properties:

event.target
---------------
Returns the actual element on which the event occurred.

event.currentTarget
-------------------
Returns the element that owns the event listener.

event.type
----------
Returns the type of event.

Example:

click

keydown

submit

event.key
---------
Returns the key pressed.

event.clientX
-------------
Returns Mouse X Coordinate.

event.clientY
-------------
Returns Mouse Y Coordinate.

Common Methods:

preventDefault()
----------------
Stops browser default behaviour.

Example:
Prevent Form Submission.

stopPropagation()
-----------------
Stops the event from moving to parent elements.

stopImmediatePropagation()
--------------------------
Stops propagation and prevents remaining listeners on the same element
from executing.

Example:

button.addEventListener("click",function(event){

    console.log(event.target);
    console.log(event.type);

});

****************************************************************************************/