const express = require('express');
const connectDb = require('./config/db');  

const app = express();
const port = 3000;

app.use((error, req, res, next) => {
    res.status(500).json({
        message: error.message,
        stack: error.stack
    });
});


app.get('/', async (req, res, next) => {
  const Product = require("./models/ProductModel")
  try {
      const product = new Product
      product.name = "New product name"
      const productSaved = await product.save()
      console.log(productSaved === product)
      const products = await Product.find()
      console.log(products.length)
      res.send("Product created " + product._id)
  } catch(er) {
      next(er)
  }
  // res.json({message: "API running..."})
})

app.listen(port, async () => {
    await connectDb();  
    console.log(`Example app listening on port ${port}`);
});
