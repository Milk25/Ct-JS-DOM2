document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Task 2: Capture user input
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Task 3: Validation
    if (!name || !email || !message) {
        alert('All fields are required!');
        return;
    }

    // Store user input in an object
    const userInput = { name, email, message };
    console.log('Form Submitted:', userInput);

    alert('Thank you for your message!');
});
