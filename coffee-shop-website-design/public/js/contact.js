document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const feedback = document.getElementById('form-feedback');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            feedback.textContent = 'Thank you for your message! We will get back to you soon.';
            feedback.style.color = 'green';
            form.reset();
        } else {
            feedback.textContent = 'Please fill out all fields.';
            feedback.style.color = 'red';
        }
    });
});
