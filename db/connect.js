const mongoose = require('mongoose');

uri=process.env.MONGODB_URI

const connectDB = (uri) => {
  console.log('Connect to DB');
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
};

module.exports = connectDB;