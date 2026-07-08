// DOM : Document Object Model

// DOM is nothing a tree like structure where all the html elements are arranged in a hierarchical manner.The DOM is created by the browser when a web page is loaded. 
// It allows JavaScript to access and manipulate the content, structure, and style of a web page dynamically.

// The DOM represents the document as nodes and objects. Each element, attribute, and piece of text in the HTML document is represented as a node in the DOM tree. The root of the tree is the document object, which represents the entire HTML document.




// DOM Selectors :    

// getElementsByTagName() : This method returns a live HTMLCollection of elements with the given tag name. It can be used to select elements based on their tag name, such as "div", "p", "h1", etc.   


    // example :

    const paragraphs = document.getElementsByTagName('p');
    console.log(paragraphs);


    const title = document.getElementsByTagName("h2");
    console.log(title);


// getElementsByClassName() :

    // example :

    const paddingAdjustMent = document.getElementsByClassName('offers-section');
    console.log(paddingAdjustMent);


// getElementById() : This method returns a reference to the first element with the specified ID. It is used to select a single element based on its unique ID attribute.


    // example :

    const heroSection = document.getElementById('heroSection');
    console.log(heroSection);

    const viewAllRoutes = document.getElementById('viewAllRoutes');
    console.log(viewAllRoutes);


// Query Selector : 

    // example : 

    const qpara = document.querySelectorAll("#heroSection p");
    console.log(qpara);


// DOM Manipulation :

// Creating an Element :

const section = document.createElement("section");

console.log(section);


// Adding a Content to an element :

// innerText
// textContent

section.innerHTML = 
    `
    <h2> Title </h2>
    <p> This is a paragraph tag </p>
    <button> Know more.....</button>
    `;

// Adding an element to the DOM tree

// Append :

const blogListItem = document.createElement("li");

      blogListItem.innerHTML = `<a href="#" class="hover:text-blue-600">Blog</a>`;


const navList = document.getElementById("navList");

    navList.prepend(blogListItem);

    navList.append(blogListItem);


const contactListItem = document.getElementById("contactNavItem");

    contactListItem.after(blogListItem);


// Modifying an Element :

const heroTitle = document.querySelector("#heroSection h2");

    heroTitle.textContent = "Travel Across World!"

// Replace :


const popularRoutes = document.getElementById("popularRoutes");

const h3 = document.createElement("h3");

    h3.textContent = "Most Popular routes";

    popularRoutes.replaceWith(h3);


// Removing an element :

    navList.removeChild(blogListItem);



// DOM Attribute Manipulation :

const profileImage = document.createElement("img");
   const profileContainer = document.getElementById("profile-container");
   profileContainer.append(profileImage);

    profileImage.setAttribute("src", "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg");
    // profileImage.setAttribute("class", "profile-image");
    profileImage.setAttribute("alt", "profileImage");
    profileImage.setAttribute("alt", "profilePicture");

   console.log( profileImage.getAttribute("alt"));
   console.log(profileImage.hasAttribute("class"));
   console.log(profileImage);


// className

    profileImage.className = "profile-image";

// classList

    profileImage.classList.add("profile-pic");
    profileImage.classList.remove("profile-pic");
    profileImage.classList.toggle("profile-pic");


profileImage.style.backgroundColor = "red";