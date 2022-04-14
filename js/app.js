/**
* Manipulating the DOM exercise.
* Exercise programmatically builds navigation,
* scrolls to anchors from navigation,
* and highlights section in viewport upon scrolling.
* Dependencies: None
* JS Version: ES2015/ES6
* JS Standard: ESlint
*/

/*--------Define Global Variables-----*/
//this section of the code is selecting all of the titles in the html
const segments = document.querySelectorAll("section")
//this section of the code selects the navbar to build all of the section components onto
const Nav= document.querySelector('#navbar__list');
//This is an empty object created as a variable where the navigation elements will be populated
const NavList=document.createDocumentFragment();
/*--------End of Global Variables-----*/

/*--------Define code to build out Navigation-----*/
    //This section of the code builds the navigation Bar
    segments.forEach((navbar) => {
    //creates the list element used to populate the navigation bar
    section = document.createElement("li");
    //this area of the code creates a element to populate each of the individual section of the navbar. In this code the .dataset.nav allows us to populate the ids, name, and data-nav sections dynamically using the navbar element
    section.innerHTML = `<li>
    <a href= "#${navbar.id}" data-nav="${navbar.dataset.nav}" class="menu__link">${navbar.dataset.nav}</a>
    </li>`
    //this section of the code allows for smooth scrolling through the page when clicking on each of the listings
    section.addEventListener ("click", (e)=>{
        e.preventDefault();
        navbar.scrollIntoView({behavior: "smooth"});
    })
    //we append the section element created with all of its behavior to the navlist global variable
    NavList.appendChild(section);
    })
   //We append the navlist global variable to the Navigation global variable
    Nav.appendChild(NavList);
/*--------End of Navigation-----*/

/*--------Adding Active State-----*/
    /*This section of the code creates a code listener that depending on where the user is on the page adds the class "active" to the segment the user is on. Once the user continues to scroll down
    the class will change from one segment to next based on where the user is on the page*/
    window.addEventListener("scroll"  , () => {
        //section is used to parse through the segments global varaiable which helps determine what segment the user is currently on
        for (section of segments) {
            //this section of the code is an if else statement saying that wherever the user is on the page the active class will be added to that section and then removed once the user 
            //continues to scroll down to the next section 
            if(section.getBoundingClientRect().top >= 0 && section.getBoundingClientRect().top <= 350) {
                section.classList.add("active");
            } 
            else {
                section.classList.remove("active");
            }
            
        }
    });
/*--------End of Active State-----*/    