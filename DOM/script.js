// =====================================
// DOM SELECTORS
// =====================================

// getElementById()
const logo = document.getElementById("logo");
const loginBtn = document.getElementById("loginBtn");
const routesContainer = document.getElementById("routesContainer");

// getElementsByClassName()
const routeCards = document.getElementsByClassName("route-card");
const busCards = document.getElementsByClassName("bus-card");

// getElementsByTagName()
const allButtons = document.getElementsByTagName("button");
const allSections = document.getElementsByTagName("section");

// querySelector()
const heroSection = document.querySelector("#heroSection");
const firstRoute = document.querySelector(".route-card");
const firstBookBtn = document.querySelector(".book-btn");

// querySelectorAll()
const allRouteCards = document.querySelectorAll(".route-card");
const allBookBtns = document.querySelectorAll(".book-btn");

console.log(logo);
console.log(routeCards);
console.log(allButtons);
console.log(firstRoute);
console.log(allRouteCards);

// =====================================
// TEXT MANIPULATION
// =====================================

// innerText
logo.innerText = "TravelGo India";

// textContent
document.getElementById("busCount").textContent =
  "15 Buses Available";

// innerHTML
document.querySelector(".offers-section h2").innerHTML =
  "<span style='color:red'>Special Offers & Discounts</span>";

// =====================================
// CREATE ELEMENT
// =====================================

const newRoute = document.createElement("div");

newRoute.className =
  "route-card bg-white p-6 rounded-xl shadow";

newRoute.innerHTML = `
    <h3 class="font-semibold">
        Mumbai → Pune
    </h3>
`;

// =====================================
// APPEND
// =====================================

routesContainer.append(newRoute);

// =====================================
// PREPEND
// =====================================

const topRoute = document.createElement("div");

topRoute.className =
  "route-card bg-white p-6 rounded-xl shadow";

topRoute.innerHTML = `
    <h3 class="font-semibold">
        Delhi → Jaipur
    </h3>
`;

routesContainer.prepend(topRoute);

// =====================================
// APPENDCHILD
// =====================================

const footerMsg = document.createElement("p");

footerMsg.innerText =
  "© 2026 TravelGo. All Rights Reserved.";

document.querySelector("footer").appendChild(footerMsg);

// =====================================
// BEFORE
// =====================================

const beforeHeading = document.createElement("p");

beforeHeading.innerText =
  "🔥 Most Booked Routes";

document
  .getElementById("popularRoutes")
  .before(beforeHeading);

// =====================================
// AFTER
// =====================================

const afterHeading = document.createElement("p");

afterHeading.innerText =
  "Book early and save more.";

document
  .getElementById("popularRoutes")
  .after(afterHeading);

// =====================================
// INSERTBEFORE
// =====================================

const parentContainer =
  document.getElementById("routesContainer");

const insertedCard = document.createElement("div");

insertedCard.className =
  "route-card bg-yellow-100 p-6 rounded-xl";

insertedCard.innerHTML =
  "<h3>Special Route</h3>";

parentContainer.insertBefore(
  insertedCard,
  parentContainer.children[1]
);

// =====================================
// insertAfter (Custom Function)
// =====================================

function insertAfter(newNode, existingNode) {
  existingNode.parentNode.insertBefore(
    newNode,
    existingNode.nextSibling
  );
}

const afterCard = document.createElement("div");

afterCard.className =
  "route-card bg-green-100 p-6 rounded-xl";

afterCard.innerHTML =
  "<h3>Inserted After Route</h3>";

insertAfter(afterCard, parentContainer.children[2]);

// =====================================
// REPLACECHILD
// =====================================

const newBus = document.createElement("div");

newBus.className =
  "bus-card bg-white p-6 rounded-xl shadow";

newBus.innerHTML = `
<h3 class="text-xl font-bold">
    KSRTC
</h3>
<p>Luxury AC Sleeper</p>
`;

const busContainer =
  document.getElementById("busContainer");

busContainer.replaceChild(
  newBus,
  busContainer.children[0]
);

// =====================================
// REPLACEWITH
// =====================================

const contactNav =
  document.getElementById("contactNavItem");

const supportNav =
  document.createElement("li");

supportNav.innerHTML =
  `<a href="#">Support</a>`;

contactNav.replaceWith(supportNav);

// =====================================
// REPLACECHILDREN
// =====================================

const testimonialContainer =
  document.getElementById(
    "testimonialContainer"
  );

const card1 = document.createElement("div");
card1.innerText = "Excellent Service";

const card2 = document.createElement("div");
card2.innerText = "Best Prices";

testimonialContainer.replaceChildren(
  card1,
  card2
);

// =====================================
// REMOVE
// =====================================

document
  .querySelector(".offers-section")
  .remove();

// =====================================
// REMOVECHILD
// =====================================

const navList =
  document.getElementById("navList");

navList.removeChild(
  navList.lastElementChild
);

// =====================================
// LOOPING THROUGH NODELIST
// =====================================

allRouteCards.forEach((card, index) => {
  card.style.border =
    "2px solid lightblue";

  console.log(
    `Route Card ${index + 1}`
  );
});

// =====================================
// EVENT LISTENER EXAMPLE
// =====================================

loginBtn.addEventListener("click", () => {
  alert("Login Button Clicked");
});