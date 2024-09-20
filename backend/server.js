const express = require("express");
const fileUpload = require("express-fileupload")
const cookieParser = require("cookie-parser")
const app = express();
const port = 3000;

app.use(express.json())
app.use(cookieParser())
app.use(fileUpload())

const apiRoutes = require("./routes/apiRoutes");

app.get("/", async (req, res, next) => {
  res.json({ message: "API running..." });
});

// mongodb connection
const connectDB = require("./config/db");
connectDB();

app.use("/api", apiRoutes);

app.use((error, req, res, next) => {
  console.error(error);
  next(error);
});
app.use((error, req, res, next) => {
  res.status(500).json({
    message: error.message,
    stack: error.stack,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

