document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Thank you! Your message has been sent successfully.');
            contactForm.reset();
        });
    }
});
