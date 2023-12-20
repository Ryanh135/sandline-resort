const express = require('express');
const app = express();

app.post('/submit_reservation', (req, res) => {
    // Access form data using req.body
    // Validate the data and save it to a database, send an email, etc.

    res.send('Reservation submitted successfully.');
});

app.listen(3000, () => console.log('Server running on port 3000'));

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents form from being submitted immediately

    var fields = ['first_name', 'surname', 'nationality', 'phone_number', 'email', 'checkin_date', 'checkout_date', 'number_rooms', 'number_adults', 'number_children'];
    var allFilled = fields.every(function(fieldId) {
        var field = document.getElementById(fieldId);
        if (!field || !field.value) {
            alert('Please fill out all fields before submitting.');
            return false;
        }
        return true;
    });

    if (allFilled) {
        alert('Form submitted successfully!');
        // Here, you can add an AJAX call to your server to actually submit the form
    }
});


document.getElementsByClassName('btn btn-outline-light mx-2')[0].onclick = function() {
    alert('Login button clicked!');
}

document.getElementsByClassName('btn btn-warning')[0].onclick = function() {
    alert('Signup button clicked!');
}

