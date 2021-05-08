/*-------------------------NAVIGATION CHANGE ON SCROLL SECTION--------------------------*/
let nav = document.querySelector("nav");

window.onscroll = function() {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("sticky");
    }
    else {
        nav.classList.remove("sticky");
    }
}

/*-------------------------ACTIVE LINK COLOR CHANGE SECTION--------------------------*/
const active = (index)=>{
    for(i=0; i<=4; i++){
        if(i==index) {
            document.querySelectorAll('nav .menu ul a')[i].classList.add("active");
        }else{
            document.querySelectorAll('nav .menu ul a')[i].classList.remove("active");
        }
    }
}
active(0)
/*-------------------------INPUTING THE LINK INDEX INTO THE ACTIVE- SECTION--------------------------*/
const pbtn = document.querySelectorAll('nav .menu ul a');
pbtn.forEach((item,index) => {
    item.addEventListener("click",()=> {
        active(index);
    })
})

/*-------------------------HAMBURGER AND CLOSE SECTION--------------------------*/
let body = document.querySelector("body");
let hamburger = document.querySelector(".hamburger");
let cancelBtn = document.querySelector(" nav .menu ul i");
let navBar = document.querySelector("nav .menu ul");
const links = document.querySelectorAll('nav .menu ul a');

hamburger.onclick = function() {
    body.style.overflow = 'hidden';
    hamburger.style.opacity = "0";
    hamburger.style.pointerEvents = "none";
    navBar.classList.add("open");
    links.forEach(link => {
        link.classList.add('fade');
    });
}
cancelBtn.onclick = function() {
    body.style.overflow = 'auto';
    hamburger.style.opacity = "1";
    hamburger.style.pointerEvents = "auto";
    navBar.classList.remove("open");
    links.forEach(link => {
        link.classList.remove('fade');
    });
}
/*-------------------------CLOSING THE LINKS OOF THE SCREEN ON CLICK SECTION--------------------------*/
for(var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", ()=> {
        body.style.overflow = 'auto';
        hamburger.style.opacity = "1";
        hamburger.style.pointerEvents = "auto";
        navBar.classList.remove("open");
        links.forEach(link => {
        link.classList.remove('fade');
    });
    });
}
/*
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('nav .menu ul');
const links = document.querySelectorAll('nav .menu ul a');


hamburger.addEventListener('click', () => {
    navLinks.classList.toggle ('open');
    links.forEach(link => {
        link.classList.toggle('fade');
    });
});

let body = document.querySelector("body");
let menuBtn = document.querySelector("menuBtn");
let cancelBtn = document.querySelector("cancelBtn");
let navBar = document.querySelector("navBar");

menuBtn.onclick = function() {
    body.style.overflow = 'hidden';
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none";
    navBar.classList.add("active");
}
cancelBtn.onclick = function() {
    body.style.overflow = 'auto';
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    navBar.classList.remove("active");
}*/