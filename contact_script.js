const navbar = document.getElementById('navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');


  
        navbar.classList.add('solid');
      

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});
