const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const fs = require('fs');
const { getData } = require('./utils/get');
const port = process.env.PORT || 8081; // Use port 3000 or a custom port if provided

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

// Define a route

app.get('/', (req, res) => {
    res.send('Server is running.'); // Send a simple response
});

app.get('/api/get-data', (req, res) => {
    const dataFile = getData("./data/guests.json");
    res.json(dataFile);
});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
 
app.post('/api/submit-rsvp', (req, res) => {
    const newData = req.body;
    let dataFile = getData("./data/guests.json");
    dataFile.push(newData);

    try{

        fs.writeFileSync("./data/guests.json", JSON.stringify(dataFile));
        
        res.json({message: dataFile});

    } catch(err){
        console.log(err)
        return res.status(500).json({message: "Server has failed to push data."})

    }

})

    // Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});