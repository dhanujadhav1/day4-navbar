const $burger = document.querySelector(".burger");
const $navlinksconatiner = document.querySelector(".nav-links-container");
const $navlinks = document.querySelectorAll(".nav-links-container li");


$burger.onclick = () => {
    $navlinksconatiner.classList.toggle("nav-clicked");
    $burger.classList.toggle("burger-clicked");
    $navlinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = "";
        }
        else {
            link.style.animation = `navlinkanimation 5s ease forward ${index / 5 + 0.5}s`;
        }

    });
};


