const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navSection = document.querySelector(".nav-section")

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active") 
})