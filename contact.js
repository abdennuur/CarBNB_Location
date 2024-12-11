document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simple validation (can be expanded)
        if (!name || !email || !message) {
            alert('Tous les champs sont obligatoires!');
            return;
        }

        // Simulate form submission (Here, you would send data to a server or service)
        alert('Merci pour votre message, nous vous répondrons bientôt!');
        
        // Optionally reset form
        contactForm.reset();
    });
});
