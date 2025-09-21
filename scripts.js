document.addEventListener("DOMContentLoaded",()=>{
  const toggle=document.querySelector(".menu-toggle");
  const navMenu=document.querySelector(".main-nav ul");
  toggle.addEventListener("click",()=>{navMenu.classList.toggle("active");});
});