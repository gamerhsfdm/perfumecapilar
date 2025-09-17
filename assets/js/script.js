document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled'); 
            navbar.classList.remove('animate__fadeInDown'); 
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });

    const revealElements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated'); 
                entry.target.style.visibility = 'visible'; 
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1, 
        rootMargin: '0px 0px -50px 0px' 
    });

    revealElements.forEach(element => {
        element.style.visibility = 'hidden'; 
        observer.observe(element);
    });

    const heroSection = document.querySelector('.hero-section');
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        heroSection.style.backgroundPositionY = -scrollPosition * 0.3 + 'px';
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const buyButtons = document.querySelectorAll('#comprar');
    buyButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Parabéns! Você está a um passo de ter cabelos incríveis. Redirecionando para o checkout...');
        });
    });

    // 6. Ativar o carrossel de depoimentos
    const testimonialCarousel = new bootstrap.Carousel(document.getElementById('testimonialCarousel'), {
        interval: 5000, 
        wrap: true 
    });
});