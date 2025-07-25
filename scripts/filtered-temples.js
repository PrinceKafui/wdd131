 
        // Temple data array with additional temples
        const temples = [
            {
                templeName: "Aba Nigeria",
                location: "Aba, Nigeria",
                dedicated: "2005, August, 7",
                area: 11500,
                imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
            },
            {
                templeName: "Manti Utah",
                location: "Manti, Utah, United States",
                dedicated: "1888, May, 21",
                area: 74792,
                imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
            },
            {
                templeName: "Payson Utah",
                location: "Payson, Utah, United States",
                dedicated: "2015, June, 7",
                area: 96630,
                imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
            },
            {
                templeName: "Yigo Guam",
                location: "Yigo, Guam",
                dedicated: "2020, May, 2",
                area: 6861,
                imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
            },
            {
                templeName: "Washington D.C.",
                location: "Kensington, Maryland, United States",
                dedicated: "1974, November, 19",
                area: 156558,
                imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
            },
            {
                templeName: "Lima Perú",
                location: "Lima, Perú",
                dedicated: "1986, January, 10",
                area: 9600,
                imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
            },
            {
                templeName: "Mexico City Mexico",
                location: "Mexico City, Mexico",
                dedicated: "1983, December, 2",
                area: 116642,
                imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
            },
            // Additional temples
            {
                templeName: "Talstrasse germany",
                location: "Talstrasse , germany",
                dedicated: "2019, October, 20",
                area: 32895,
                imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/frankfurt-germany-temple/frankfurt-germany-temple-38924-main.jpg"
            },
            {
                templeName: "Accra Ghana",
                location: "Accra, Ghana",
                dedicated: "2004, January, 11",
                area: 17500,
                imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
            },
            {
                templeName: "London England",
                location: "London , England",
                dedicated: "1992, October, 18",
                area: 42652,
                imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/london-england-temple/london-england-temple-4243-main.jpg"
            }
        ];

        // DOM elements
        const gallery = document.getElementById('gallery');
        const navLinks = document.querySelectorAll('.nav-link');
        const filterIndicator = document.getElementById('filter-indicator');
        const hamburger = document.getElementById('hamburger');
        const nav = document.getElementById('nav');

        // Create temple card element
        function createTempleCard(temple) {
            const card = document.createElement('div');
            card.className = 'temple-card';
            
            // Extract year from dedicated string
            const year = parseInt(temple.dedicated.split(',')[0].trim());
            
            card.innerHTML = `
                <div class="temple-img-container">
                    <img src="${temple.imageUrl}" alt="${temple.templeName}" class="temple-img" loading="lazy">
                    <div class="year-badge">${year}</div>
                </div>
                <div class="temple-info">
                    <h3>${temple.templeName}</h3>
                    <p><i class="fas fa-map-marker-alt"></i> ${temple.location}</p>
                    <p><i class="fas fa-calendar-alt"></i> Dedicated: ${temple.dedicated}</p>
                    <p><i class="fas fa-expand-arrows-alt"></i> Area: <span class="area">${temple.area.toLocaleString()} sq ft</span></p>
                    
                    <div class="temple-stats">
                        <div class="stat">
                            <div class="stat-value">${year < 1900 ? 'Old' : year > 2000 ? 'New' : 'Modern'}</div>
                            <div class="stat-label">Era</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value">${temple.area > 90000 ? 'Large' : temple.area < 10000 ? 'Small' : 'Medium'}</div>
                            <div class="stat-label">Size</div>
                        </div>
                    </div>
                </div>
            `;
            return card;
        }

        // Render temples to gallery
        function renderTemples(templesArray) {
            gallery.innerHTML = '';
            templesArray.forEach(temple => {
                gallery.appendChild(createTempleCard(temple));
            });
        }

        // Filter temples based on criteria
        function filterTemples(criteria) {
            filterIndicator.textContent = criteria;
            
            switch(criteria) {
                case 'old':
                    return temples.filter(temple => {
                        const year = parseInt(temple.dedicated.split(',')[0].trim());
                        return year < 1900;
                    });
                case 'new':
                    return temples.filter(temple => {
                        const year = parseInt(temple.dedicated.split(',')[0].trim());
                        return year > 2000;
                    });
                case 'large':
                    return temples.filter(temple => temple.area > 90000);
                case 'small':
                    return temples.filter(temple => temple.area < 10000);
                default:
                    return temples;
            }
        }

        // Navigation click handler
        function handleNavClick(e) {
            e.preventDefault();
            const filter = this.dataset.filter;
            
            // Update active link
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
            
            // Filter and render temples
            const filteredTemples = filterTemples(filter);
            renderTemples(filteredTemples);
        }

        // Initialize the page
        function init() {
            // Render all temples initially
            renderTemples(temples);
            
            // Add event listeners to nav links
            navLinks.forEach(link => {
                link.addEventListener('click', handleNavClick);
            });
            
            // Hamburger menu toggle
            hamburger.addEventListener('click', () => {
                nav.classList.toggle('active');
            });
            
            // Update footer year
            document.getElementById('currentyear').textContent = new Date().getFullYear();
            
            // Update last modified date
            document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
        }

        // Initialize when DOM is loaded
        document.addEventListener('DOMContentLoaded', init);
    