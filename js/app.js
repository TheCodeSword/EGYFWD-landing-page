/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/*
 Define Global Variables
*/

//storing the nav ul  in a const
const navList = document.querySelector("#navbar__list");

//storing the creation of li in a const
const newListItem = document.createElement("li");

//storing the sections and their nav-data in variables
let sections = document.querySelectorAll("section");

let navData = [];
for (let i = 0; i < sections.length; i++) {
    navData.push(sections[i].getAttribute("data-nav"));
}

//getting the sections IDs
let sectionsID = [];
for (let i = 0; i < sections.length; i++) {
    sectionsID.push(sections[i].getAttribute("id"));
}

//To top button
let myButton = document.getElementById("totop");



/*
 End Global Variables
*/



// build the nav
for(let i = 0; i < sections.length; i++) {
    newListItem.innerHTML = `<a href="#${sectionsID[i]}">${navData[i]}</a>` 
    navList.appendChild(newListItem.cloneNode(true)).setAttribute('class', 'menu__link'); //cloneNode avoids unwanted closures and lets the loop create 4 distinct nodes instead of creating the loop 4 times 
}


// Scroll to section on link click
let items = navList.children;
navList.addEventListener('click', (e) => {
        e.preventDefault();
        let item = e.target.closest('li');
        let order = Array.from(items).indexOf(item);
        document.querySelector(`#section${order + 1}`).scrollIntoView({behavior: 'smooth'});
    });


// Set sections as active
window.onscroll = function() {
    sections.forEach( (section) => {
        if (section.getBoundingClientRect().y <= 250 && section.getBoundingClientRect().y >= -350) {
            section.classList.add('your-active-class');
        } else {
            section.classList.remove('your-active-class');
        }
    });

//To top button display:
    if (window.scrollY >= 400) {
        myButton.classList.remove("hidden");
    } else {
        myButton.classList.add("hidden");
    }
}

//to top function
myButton.onclick = function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    
}



