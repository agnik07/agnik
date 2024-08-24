document.addEventListener('DOMContentLoaded', function() {
    console.log('Website Loaded');

    // Example of a click event for a button
    const panicButton = document.querySelector('.btn-cta');
    if (panicButton) {
        panicButton.addEventListener('click', function() {
            alert('Panic button clicked! Sending help...');
            // Here, you would implement the actual logic to send the SOS
        });
    }

    // Example of Geolocation for finding nearby police stations
    const emergencyContactButton = document.querySelector('.btn-signup'); // Just an example button
    if (emergencyContactButton) {
        emergencyContactButton.addEventListener('click', function() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;
                    console.log(`Latitude: ${lat}, Longitude: ${lon}`);
                    // Here you would implement the actual logic to show nearby police stations
                });
            } else {
                alert('Geolocation is not supported by this browser.');
            }
        });
    }
});
