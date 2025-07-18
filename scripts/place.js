// JavaScript to dynamically update footer content
        document.addEventListener('DOMContentLoaded', function() {
            // Set current year
            const currentYear = new Date().getFullYear();
            document.getElementById('currentyear').textContent = currentYear;
            
            // Set last modified date
            document.getElementById('lastModified').textContent = "Last Modified: " + document.lastModified;
        });

        
        // Wind chill calculation function
        function calculateWindChill(temp, windSpeed) {
            // Metric wind chill formula
            return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(windSpeed, 0.16)) + 
                   (0.3965 * temp * Math.pow(windSpeed, 0.16));
        }
        
        // Get temperature and wind speed values
        const temp = parseFloat(document.getElementById('temp').textContent);
        const windSpeed = parseFloat(document.getElementById('wind-speed').textContent);
        
        // Calculate and display wind chill if conditions are met
        if (temp <= 10 && windSpeed > 4.8) {
            const windChill = calculateWindChill(temp, windSpeed);
            document.getElementById('wind-chill').textContent = windChill.toFixed(1) + "°C";
        } else {
            document.getElementById('wind-chill').textContent = "N/A";
        }