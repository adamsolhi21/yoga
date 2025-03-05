const navbar = document.getElementById('navbar');
const navLinkItems = document.querySelectorAll('.nav-links');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');


window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.classList.add('solid');
        navbar.classList.remove('transparent');
    } else {
        navbar.classList.add('transparent');
        navbar.classList.remove('solid');
    }
});

document.addEventListener('click', (e) => {
    if (e.target.closest('.hamburger')) {
      navLinks.classList.toggle('nav-active');
      hamburger.classList.toggle('toggle');
    } else if (e.target.closest('.nav-links')) {
      navLinks.classList.remove('nav-active');
      hamburger.classList.remove('toggle');
    }
  });

  //23:11

