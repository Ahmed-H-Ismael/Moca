$(document).ready(function(){
    $(window).scroll(function(){
            $(".move img").css({
                width:(100 + $(window).scrollTop()/20) +"%"
            })
    });
    });
const mysection = document.querySelectorAll("section");
const navBar = document.querySelector("nav");
const NavHref = document.querySelectorAll("nav ul li a");
const toggleNav = document.querySelector("nav .toggle");
const toggleUl = document.querySelector("nav ul");
window.addEventListener("scroll",function(){
    navBar.classList.toggle("active",window.scrollY > 0)
    mysection.forEach(function(mysection){
        myView = mysection.getBoundingClientRect()
        if (myView.top >= 0 && myView.top <= 200){
            NavHref.forEach(function(NavHref){
                if(mysection.getAttribute("data-nav") == NavHref.textContent){
                    NavHref.classList.add("active")
                }else{
                    NavHref.classList.remove("active")
                }
            })
        }
    })
})
toggleNav.addEventListener("click",function(){
    toggleUl.classList.toggle("active");
    navBar.classList.toggle("clicked");
})