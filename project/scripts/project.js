 
     
    
    // JavaScript to dynamically update footer content
        document.addEventListener('DOMContentLoaded', function() {
            // Set current year
            const currentYear = new Date().getFullYear();
            document.getElementById('currentyear').textContent = currentYear;
            
            // Set last modified date
            document.getElementById('lastModified').textContent = "Last Modified: " + document.lastModified;
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


    
       
       
       // Mobile menu toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        // Hero image slider
        const heroSlides = document.querySelectorAll('.hero-slides');
        let currentSlide = 0;
        
        function showSlide(n) {
            heroSlides.forEach(slide => slide.classList.remove('active'));
            heroSlides[n].classList.add('active');
        }
        
        function nextSlide() {
            currentSlide = (currentSlide + 1) % heroSlides.length;
            showSlide(currentSlide);
        }
        
        // Change slide every 3 seconds
        setInterval(nextSlide, 3000);
        


       

        document.addEventListener("DOMContentLoaded", function () {
  const bookingForm = document.getElementById('booking-form');

  if (!bookingForm) {
    console.warn("Booking form not found in DOM.");
    return; // Stop if form is missing
  }

  bookingForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const nameField = document.getElementById('name');
    const destinationField = document.getElementById('destination');

    if (!nameField || !destinationField) {
      alert("Some form fields are missing.");
      return;
    }

    const name = nameField.value.trim();
    const destination = destinationField.value.trim();

    if (name === "" || destination === "") {
      alert("Please fill in all required fields.");
      return;
    }

    // Save name to localStorage
    localStorage.setItem('visitorName', name);

    alert(`Thank you, ${name}! Your booking request for ${destination} has been received. We'll contact you shortly to confirm your visit.`);

    bookingForm.reset();
  });
});



    


  
        