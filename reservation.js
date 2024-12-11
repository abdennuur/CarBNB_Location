document.addEventListener('DOMContentLoaded', () => {
    const reservationForm = document.getElementById('reservation-form');
    const carSelect = document.getElementById('car-selection');
    const startDate = document.getElementById('start-date');
    const endDate = document.getElementById('end-date');
    const nameInput = document.getElementById('full-name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const optionsInputs = document.querySelectorAll('[name="extras"]');
    
    const summaryCar = document.getElementById('selected-car');
    const summaryStartDate = document.getElementById('selected-start-date');
    const summaryEndDate = document.getElementById('selected-end-date');
    const summaryName = document.getElementById('selected-name');
    const summaryEmail = document.getElementById('selected-email');
    const summaryPhone = document.getElementById('selected-phone');
    const summaryOptions = document.getElementById('selected-options');

    // Update summary when form changes
    const updateSummary = () => {
        summaryCar.textContent = carSelect.value;
        summaryStartDate.textContent = startDate.value;
        summaryEndDate.textContent = endDate.value;
        summaryName.textContent = nameInput.value;
        summaryEmail.textContent = emailInput.value;
        summaryPhone.textContent = phoneInput.value;
        
        const selectedOptions = [];
        optionsInputs.forEach(input => {
            if (input.checked) selectedOptions.push(input.value);
        });
        summaryOptions.textContent = selectedOptions.length ? selectedOptions.join(', ') : 'Aucune option sélectionnée';
    };

    // Listen for changes on form fields
    reservationForm.addEventListener('input', updateSummary);

    // Initialize summary on page load
    updateSummary();

    // Handle form submission
    reservationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Réservation confirmée!');
        // Here you can send the data to a server via AJAX or process further
    });
});
