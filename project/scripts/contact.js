
      // Contact Form Submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const purpose = document.querySelector('input[name="purpose"]:checked').value;
    const message = document.getElementById('message').value;
    const newsletter = document.getElementById('newsletter').checked ? 'subscribed' : 'not subscribed';
    
    // Create confirmation message
    const confirmationMessage = `
        Thank you, ${name}!
        We've received your ${purpose.toLowerCase()} and will respond to:
        ${email}
        Newsletter: ${newsletter}
    `;
    
    // Show confirmation message
    alert(confirmationMessage);
    
    // Reset form
    contactForm.reset();
});

  
        // Array of destination objects
const popularDestinations = [
    { name: "Wli Waterfalls", link: "destinations.html" },
    { name: "Tafi-Atome Monkey Sanctuary", link: "destinations.html" },
    { name: "Elmina Castle", link: "destinations.html" },
    { name: "Mountain Afadja", link: "destinations.html" },
    { name: "Manhyia Palace Museum", link: "destinations.html" }
];

// Dynamically create footer list items
const footerList = document.getElementById('footer-destinations');

popularDestinations.forEach(dest => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${dest.link}"><i class="fas fa-map-marker-alt"></i> ${dest.name}</a>`;
    footerList.appendChild(li);
});

// JavaScript to dynamically update footer content
        document.addEventListener('DOMContentLoaded', function() {
            // Set current year
            const currentYear = new Date().getFullYear();
            document.getElementById('currentyear').textContent = currentYear;
            
            // Set last modified date
            document.getElementById('lastModified').textContent = "Last Modified: " + document.lastModified;
        });

          
       // Mobile menu toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });








