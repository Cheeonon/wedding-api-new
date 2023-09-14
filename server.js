const express = require('express');
const cors = require('cors');
const app = express();
const fs = require('fs');
const port = process.env.PORT || 8081; // Use port 3000 or a custom port if provided

app.use(cors());
app.use(express.json());

// Define a route
app.get('/', (req, res) => {
    res.send('Server is running.'); // Send a simple response
  });

    // Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});