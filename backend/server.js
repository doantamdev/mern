const express = require('express');
const connectDb = require('./config/db');  
const apiRoutes = require("./routes/apiRoutes");


const app = express();
const port = 3000;
app.use(express.json())


app.use("/api",apiRoutes)

app.use((error, req, res, next) => {
    res.status(500).json({
        message: error.message,
        stack: error.stack
    });
});


app.listen(port, async () => {
    await connectDb();  
    console.log(`Example app listening on port ${port}`);
});
