// Adding navbar toggle button
const toggleButton= document.getElementById('hamclick');
const navLinks= document.getElementById('nav-links');
toggleButton.addEventListener('click',()=>{
    navLinks.classList.toggle('active');
})



