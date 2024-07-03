
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*=======scerol section active line=======*/
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll  = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


let header = Document.querySelector('header');
header.classList.toggle('sticky', Window.scrollY > 100);

/*=======remove toggele icon and navbar line=======*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};

/*=======scroll reveal=======*/

        ScrollReveal
        ({
             reset: true, 
            distance: '80%',
            duration: 2000,
            delay: 200

        });

        ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
        ScrollReveal().reveal('.home-img, .service-container, .portfolio-box, .contact form', { origin: 'bottom'});
        ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});
        ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right'});
  
/*=======typed js=======*/
       const typed = new Typed('.multiple-text', {
        strings: ['Frontend Developer', 'java Programer', 'excel Developing', 'WordPress Site Develop'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true

       });