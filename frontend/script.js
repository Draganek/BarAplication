"use strict";


// ======================================== Przełączanie aktywnych stron ======================================== //

let drinkListButton = document.getElementById("drinklist")
drinkListButton.addEventListener("click", () => show("drink_list_page", "home_page", "news_page", "contact_page", "about_page"));
drinkListButton.addEventListener("click", () => activepage("drinklist", "home", "news", "contact", "about"));

let homeButton = document.getElementById("home")
homeButton.addEventListener("click", () => show("home_page", "drink_list_page", "news_page", "contact_page", "about_page"));
homeButton.addEventListener("click", () => activepage("home", "drinklist", "news", "contact", "about"));

let newsButton = document.getElementById("news")
newsButton.addEventListener("click", () => show("news_page", "home_page", "drink_list_page", "contact_page", "about_page"));
newsButton.addEventListener("click", () => activepage("news","home", "drinklist", "contact", "about"));

let contactButton = document.getElementById("contact")
contactButton.addEventListener("click", () => show("contact_page", "news_page", "home_page", "drink_list_page", "about_page"));
contactButton.addEventListener("click", () => activepage("contact", "news", "home", "drinklist", "about"));

let aboutButton = document.getElementById("about")
aboutButton.addEventListener("click", () => show("about_page", "contact_page", "news_page", "home_page", "drink_list_page"));
aboutButton.addEventListener("click", () => activepage("about", "contact", "news", "home", "drinklist"));

function show(show, hide, hide2, hide3, hide4) {
    document.getElementById(show).style.display='block';
    document.getElementById(hide).style.display='none';
    document.getElementById(hide2).style.display='none';
    document.getElementById(hide3).style.display='none';
    document.getElementById(hide4).style.display='none';
}

function activepage(active, deactive, deactive2, deactive3, deactive4) {
    document.getElementById(active).classList.value = "active";
    document.getElementById(deactive).classList.value = "hover";
    document.getElementById(deactive2).classList.value = "hover";
    document.getElementById(deactive3).classList.value = "hover";
    document.getElementById(deactive4).classList.value = "hover";
}


// ======================================== News page ======================================== //

let time = document.getElementById("project_time");
let date = new Date("2022-11-30T22:48:39.817Z");


setInterval(() => {
    let now = new Date();
    let test = now.getTime() - date.getTime();
    let test2 = new Date(test);

    let years = test2.getFullYear();
    let months = test2.getMonth();
    let days = test2.getDate();
    let hours = test2.getHours();
    let minutes = test2.getMinutes();
    let seconds = test2.getSeconds();
    time.value = `${(years-1970).toString().padStart(2, '0')}y-${months.toString().padStart(2, '0')}m-${days.toString().padStart(2, '0')}d ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}, 100);



