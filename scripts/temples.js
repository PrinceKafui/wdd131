 // Hamburger menu functionality
        const hamburger = document.getElementById('hamburger');
        const nav = document.getElementById('nav');
        
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('active');
            hamburger.textContent = nav.classList.contains('active') ? '✕' : '☰';
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 768) {
                    nav.classList.remove('active');
                    hamburger.textContent = '☰';
                }
            });
        });
        
      // JavaScript to dynamically update footer content
        document.addEventListener('DOMContentLoaded', function() {
            // Set current year
            const currentYear = new Date().getFullYear();
            document.getElementById('currentyear').textContent = currentYear;
            
            // Set last modified date
            document.getElementById('lastModified').textContent = "Last Modified: " + document.lastModified;
        });
        // Responsive behavior for window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768) {
                nav.classList.remove('active');
                hamburger.textContent = '☰';
            }
        });