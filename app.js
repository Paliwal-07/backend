require('dotenv').config();
const express = require('express');

const PORT = process.env.PORT||4000;
const app = express();
const connectDB = require('./db/connect');

const product_routes=require('./routes/products')

app.get('/', (req, res) => {
  res.send("I am live");
});

// middleware/to set router
app.use('/api/products', product_routes);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(PORT, () => {
      console.log(`${PORT} Connection success`);
    })
  } catch (error) {
    console.log(error);
  }
};

start();