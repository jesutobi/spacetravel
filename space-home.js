const openButton = document.querySelector(".menu-btn");
const sideMenu = document.querySelector(".side-menu");
const closeButton = document.querySelector(".close-btn");

openButton.addEventListener("click", function(){
    sideMenu.classList.toggle("show-sidebar");
});
closeButton.addEventListener("click", function(){
    sideMenu.classList.remove("show-sidebar");
})
