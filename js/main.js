// JS scripts placed here

// Select all links within the navigation
const navLinks = document.querySelectorAll('.nav-links a');

// navLinks.forEach(link => {
//   link.addEventListener('click', function(event) {
//     event.preventDefault(); // Prevent default link behavior if needed

//     // Remove the active class from all links
//     navLinks.forEach(link => link.classList.remove('active'));

//     // Add the active class to the clicked link
//     this.classList.add('active');
//   });
// });


  $(document).ready(function () {
    $('.pic-carousel').slick({
        slidesToShow: 1,         // Number of slides visible at once
        slidesToScroll: 1,       // Number of slides to scroll at a time
        autoplay: false,          // Enable auto-sliding
        autoplaySpeed: 2000,     // Time between slides
        dots: true,              // Show navigation dots
        centerMode: true         // Center the active slide
    });
});