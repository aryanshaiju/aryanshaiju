document.addEventListener('DOMContentLoaded', function () {
    // Menu icon and navbar
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
  
    // Toggle navigation menu when menu icon is clicked
    menuIcon.addEventListener('click', function () {
      navbar.classList.toggle('active');
    });
  
    // Close navigation menu when a menu item is clicked
    navbar.addEventListener('click', function (event) {
      if (event.target.tagName === 'A') {
        navbar.classList.remove('active');
      }
    });
  
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Your additional JavaScript code can go here
    // ...
  
    // For the contact form
    const contactForm = document.querySelector('.php-email-form');
  
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Your form submission logic can go here
      // For example, you can use Fetch API to send form data to the server
      // and handle the response accordingly
  
      // Display loading message
      const loadingMessage = document.querySelector('.loading');
      loadingMessage.classList.add('d-block');
  
      // Simulate a successful form submission (you need to replace this with your actual submission logic)
      setTimeout(function () {
        // Hide loading message
        loadingMessage.classList.remove('d-block');
  
        // Display success message
        const sentMessage = document.querySelector('.sent-message');
        sentMessage.classList.add('d-block');
  
        // Reset the form
        contactForm.reset();
      }, 2000);
    });
  });
  