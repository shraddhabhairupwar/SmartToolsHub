// ==============================
// SmartToolsHub - script.js
// ==============================

// Search Calculator Function

const searchInput = document.querySelector(".hero input");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("keyup", function () {

    let searchValue = searchInput.value.toLowerCase();

    cards.forEach(function(card){

        let text = card.textContent.toLowerCase();

        if(text.includes(searchValue)){
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
        }

    });

});


// Smooth Scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});


// Welcome Message

console.log("Welcome to SmartToolsHub");