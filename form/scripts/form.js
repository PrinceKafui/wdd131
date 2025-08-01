
    
        // Product data array
        const products = [
            { id: "p001", name: "EcoSmart Air Purifier" },
            { id: "p002", name: " Coffee Maker" },
            { id: "p003", name: " Power Bank" },
            { id: "p004", name: " Water Filter" },
            { id: "p005", name: "Security Camera" },
            { id: "p006", name: " Wireless Earbuds" },
            { id: "p007", name: " 4K Monitor" },
            { id: "p008", name: " Vacuum Cleaner" },
            { id: "p009", name: " Smart Watch" },
            { id: "p010", name: " Blender" }
        ];

        //  product dropdown
        const productSelect = document.getElementById('productName');
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.id;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });

        // Set today as default installation date
        document.getElementById('installDate').valueAsDate = new Date();

        // Form submission handler
        document.getElementById('reviewForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Update review count in localStorage
            let reviewCount = localStorage.getItem('reviewCount') || 0;
            reviewCount = parseInt(reviewCount) + 1;
            localStorage.setItem('reviewCount', reviewCount);
            
            // Display confirmation
            document.getElementById('reviewCount').textContent = reviewCount;
            document.getElementById('confirmation').style.display = 'block';
            document.getElementById('reviewForm').reset();
            
            // Scroll to confirmation
            document.getElementById('confirmation').scrollIntoView({ behavior: 'smooth' });
        });

        // Initialize review count display
        document.addEventListener('DOMContentLoaded', function() {
            const reviewCount = localStorage.getItem('reviewCount') || 0;
            document.getElementById('reviewCount').textContent = reviewCount;
            
           
            // Set current year in footer
            document.getElementById('current-year').textContent = new Date().getFullYear();
            
            // Set last modified date in footer
            document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
        });