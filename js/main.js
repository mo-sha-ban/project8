

// Check if there 's color option in local storage

let mainColors = localStorage.getItem("color_option");


if (mainColors !== null ) {

    document.documentElement.style.setProperty('--main-color', mainColors);

        //Remove active class from all list items 
        document.querySelectorAll(".colors-list li").forEach(element => {

            element.classList.remove("active");


            // Add active class on element 
            if (element.dataset.color === mainColors) {

                // add class active 
                element.classList.add("active");
            }
        });

}




// Random Back Option
let backOption = true;


// Controle The interval 
let backInterval;

// Check if there's Random Background item in local storage 
let backLocalItem = localStorage.getItem("back_option");


// Check if local storage itn't empty 

if (backLocalItem !== null) {

    if (backLocalItem === "true") {
        backOption = true;
    }
    else {
        backOption = false;
    }

    // Remove Active class From all  Spans

    document.querySelectorAll(".random-bg span").forEach(element => {
        element.classList.remove("active");
    });

    if (backLocalItem === 'true') {

        document.querySelector(".random-bg .yes").classList.add("active")
    }
    else {
        document.querySelector(".random-bg .no").classList.add("active")
    }

};






// Get Gear and Box
let gear = document.querySelector(".toggler .gear");
let box = document.querySelector(".settings-box");

gear.onclick = function () {


    // this.classList.add("fa-spin");
    // box.classList.add("open");


    // open and close box 
    if (box.classList.contains("open")) {
        box.classList.remove("open");
      } 
      else {
        box.classList.add("open")
      }
      // spin or not spin gear
    if (gear.classList.contains("fa-spin")) {
        gear.classList.remove("fa-spin");
      } 
      else {
        gear.classList.add("fa-spin")
      }

}


// Change main color 


let randomBg = document.querySelectorAll(".random-bg span")

randomBg.forEach(span=> {
span.addEventListener("click",(e)=> {


    // //set color on root
    // document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

    // //set color on local sotrage
    // localStorage.setItem("color_option", e.target.dataset.color);


    // Remove active class from all children
    e.target.parentElement.querySelectorAll(".active").forEach(element => {
        element.classList.remove("active");
    });
 

    //Add Acive class
    e.target.classList.add("active");
    if (e.target.dataset.back === "yes") {

        backOption = true;

        RandomizeImgs();
        localStorage.setItem("back_option",true);

    }
    else {
        backOption = false;

        clearInterval(backInterval);

        // landingPage.style.backgroundImage = 'url(../imgs/book\ \(1\).jpg)';

        localStorage.setItem("back_option",false);

    }
})



})
// Change main color 


let lis = document.querySelectorAll(".colors-list li")

lis.forEach(li=> {
li.addEventListener("click",(e)=> {
    //set color on root
    document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

    //set color on local sotrage
    localStorage.setItem("color_option", e.target.dataset.color);


    // Remove active class from all children
    e.target.parentElement.querySelectorAll(".active").forEach(element => {
        element.classList.remove("active");
    });
 

    //Add Acive class
    e.target.classList.add("active");
})
})








// get element 

let landingPage = document.querySelector(".land-page");



// Make Array From Imges 
let imgArr= ["book (1).jpg", "book (2).jpg", "book (3).jpg", "book (4).jpg", "book (5).jpg", "book (6).jpg", "book (7).jpg",
            "img (1).jpg", "img (2).jpg", "img (3).jpg", "img (4).jpg", "img (5).jpg", "img (6).jpg", "img (7).jpg", "img (8).jpg",
            "img (9).jpg", "img (10).jpg", "img (11).jpg", "img (12).jpg"];





// Function to Randomize Image 
function RandomizeImgs() {

    if(backOption === true ) {
        // Set Interval 

    backInterval = setInterval(()=> {
    // create random number 
    let randowNumber = Math.floor(Math.random () * imgArr.length);


    // change Back 
    landingPage.style.backgroundImage = 'url("imgs/' + imgArr[randowNumber] + '")';

}, 10000);
    }
};
  
RandomizeImgs();





// select Skill Selector 
let ourSkills = document.querySelector(".skills")

window.onscroll = function() {

    if (this.pageYOffset > 730 ) {

        // declare span 

        let allSkills = document.querySelectorAll(".skill-box .skill-progress span");


        allSkills.forEach(skill => {
            skill.style.width = skill.dataset.prog;
        })
    }
};




// Make a pupup Img 


let ourGall = document.querySelectorAll (".gallery img");

ourGall.forEach(img => {

    img.addEventListener('click',(e) => {


        // Create overlay element

        let overlay = document.createElement("div");

        // Add class to overlay 

        overlay.className = 'popup-over';

        // Append overlay to the body 

        document.body.appendChild(overlay);

         // Create the popup Box 

         let popupBox = document.createElement("div");

         //  Add Class to  the popup Box 

         popupBox.className = "popup-box";



         
        if (img.alt !== null) {

            // Create Heading 
            let imgHead = document.createElement("h3");

            // create text for heading 

            let imgText = document.createTextNode(img.alt);

            // append the text to the heading

            imgHead.appendChild(imgText);

            // Append the heading to the popup box

            popupBox.appendChild(imgHead);
        }

        //  Create the img 

        let popupImg = document.createElement("img");


        // Set img Source 

        popupImg.src = img.src;


        // Add img to popup box

        popupBox.appendChild(popupImg);


        // Add popup box to body
        document.body.appendChild(popupBox);

        // Create close Button span 

        let close = document.createElement("span");

        // Create close text
        let closeText = document.createTextNode("X");

        // Add close text to close button

        close.appendChild(closeText);


        close.className = "close"
        // Add close bitton to close popup box

        popupBox.appendChild(close);


    });

});


// close popup 

document.addEventListener('click', function(e) {

    if(e.target.className == 'close') {

        // Remove popupBox
        // e.target.parentNode.remove();
        document.querySelector(".popup-box").remove();
        document.querySelector(".popup-over").remove();
    }
})






// Select All Bullets
let allBullest = document.querySelectorAll(".bullets .bullet")
let allLinks = document.querySelectorAll(".links a")




function scrollToAnyWhere(elements) {

    elements.forEach(ele => { 

        ele.addEventListener("click", (e) => {

            e.preventDefault();
    
            document.querySelector(e.target.dataset.section).scrollIntoView({
    
            });
        });
    });
};



scrollToAnyWhere(allBullest)
scrollToAnyWhere(allLinks)