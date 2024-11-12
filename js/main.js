// JS scripts placed here

// Select all links within the navigation
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link click behavior if needed

    // Remove the active class from all links
    navLinks.forEach(link => link.classList.remove('active'));

    // Add the active class to the clicked link
    this.classList.add('active');
  });
});