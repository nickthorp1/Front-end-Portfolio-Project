
// Add's bottom shadow and white background to Nav-Bar wheel event is triggered// 

let navBar = document.getElementById('navigation');
let body =document.getElementById('body');

function navShadow() {
    navBar.style.boxShadow = '0 8px 8px -4px rgb(0 0 0 / 0.2)' 
    navBar.style.backgroundColor = 'white'
};

body.addEventListener("wheel", navShadow);






