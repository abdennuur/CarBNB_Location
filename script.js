// Cache DOM elements for performance
const searchInput = document.getElementById('search');
const brandFilter = document.getElementById('brand-filter');
const priceFilter = document.getElementById('price-filter');
const applyFiltersBtn = document.getElementById('apply-filters');
const carItems = document.querySelectorAll('.car-item');

// Function to apply filters
const applyFilters = () => {
    const searchQuery = searchInput.value.toLowerCase();
    const selectedBrand = brandFilter.value;
    const selectedPrice = priceFilter.value;

    // Loop through each car item and apply filters
    carItems.forEach(function(car) {
        const carName = car.querySelector('h3').textContent.toLowerCase();
        const carPriceText = car.querySelector('.car-price').textContent;
        const carPrice = parseFloat(carPriceText.split('Prix: ')[1].split(' MAD')[0].trim()); // Price in MAD
        const carBrand = car.dataset.brand;

        // Check for search filter
        const matchesSearch = searchQuery === '' || carName.includes(searchQuery);

        // Check for brand filter
        const matchesBrand = selectedBrand === '' || carBrand === selectedBrand;

        // Check for price filter
        let matchesPrice = true;
        if (selectedPrice === 'low') {
            matchesPrice = carPrice < 500;
        } else if (selectedPrice === 'high') {
            matchesPrice = carPrice >= 500;
        }

        // Show or hide the car based on the filters
        if (matchesSearch && matchesBrand && matchesPrice) {
            car.style.display = 'block';
        } else {
            car.style.display = 'none';
        }
    });
};

// Apply filters when the "Apply Filters" button is clicked
applyFiltersBtn.addEventListener('click', applyFilters);

// Optional: Apply filters dynamically as the user types in the search input
searchInput.addEventListener('input', applyFilters);

// Optional: Apply filters dynamically when the brand or price filters are changed
brandFilter.addEventListener('change', applyFilters);
priceFilter.addEventListener('change', applyFilters);
