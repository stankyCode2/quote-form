// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse the form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the static files
app.use(express.static('public'));

// Handle form submission
app.post('/submit', (req, res) => {
    const { username, email } = req.body;

    // Do something with the data (e.g., store it, process it)
    console.log(`Received: ${username}, ${email}`);

    // Respond to the client
    res.send("Form submitted successfully!");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
