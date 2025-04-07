// Import express
const express = require('express');

// Create an express app
const app = express();

// Set the port (Dockerfile uses 3000)
const PORT = process.env.PORT || 3000;

// Define a route for GET /
app.get('/', (req, res) => {
    res.send('Hello World from CI/CD pipeline!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
