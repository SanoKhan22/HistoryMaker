function showAlert() {
    const userResponse = confirm("Inventory is empty. All books are sold! Sorry, we ran out of books.");
    if (userResponse) {
        alert("Thank you for your interest! Please check back later.");
    } else {
        alert("We appreciate your understanding!");
    }
}

// JavaScript for slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    if (slides.length > 0) { // Check if there are any slides
        slides[slideIndex - 1].style.display = "block";
    }
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// JavaScript for testimonial slideshow
let testimonialIndex = 0;
showTestimonials();

function showTestimonials() {
    const testimonials = document.getElementsByClassName("testimonial");
    for (let i = 0; i < testimonials.length; i++) {
        testimonials[i].style.display = "none";
    }
    testimonialIndex++;
    if (testimonialIndex > testimonials.length) { testimonialIndex = 1; }
    testimonials[testimonialIndex - 1].style.display = "block";
    setTimeout(showTestimonials, 3000); // Change testimonial every 3 seconds
}

function toggleMenu() {
    const nav = document.querySelector('header nav');
    const hamburger = document.querySelector('.hamburger');
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('header nav');

    if (hamburger) {
        hamburger.addEventListener('click', function(e) {
            e.preventDefault();
            toggleMenu();
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!nav.contains(e.target) && !hamburger.contains(e.target) && nav.classList.contains('active')) {
            toggleMenu();
        }
    });
});
