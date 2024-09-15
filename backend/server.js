const express = require('express');
const connectDb = require('./config/db');  // Correct import

const app = express();
const port = 3000;

app.use((error, req, res, next) => {
    res.status(500).json({
        message: error.message,
        stack: error.stack
    });
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, async () => {
    await connectDb();  // Make sure this works after correct import
    console.log(`Example app listening on port ${port}`);
});
