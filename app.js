const hamburger = document.querySelector('.header .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', ()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 250){
        header.style.backgroundColor = '#dbe2e9';
    }
    else{
        header.style.backgroundColor = '#78C2C4';
    }
});

menu_item.forEach((item)=>{
    item.addEventListener('click',()=>{
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});

const scrollButton = document.querySelector(".scroll-top");
scrollButton.addEventListener("click",()=>{
    window.scrollTo(0, 0);
});

