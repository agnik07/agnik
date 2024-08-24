function showAlert() {
    alert('SafeGuard AI provides advanced real-time safety analytics to protect women in public spaces.');
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    document.getElementById('contact-form').reset();
});
