let navUl = document.querySelector("#nav-ul");
let check = document.querySelector("#check");

navUl.addEventListener("click", ()=> {
    check.checked = !check.checked; 
});

