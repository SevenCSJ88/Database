require("dotenv").config();
const express = require('express');
const { connectDB } = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 8000;

app.use(express.json());
app.use('/user', userRoutes);


connectDB()
  .then((res) => {
    console.log(res);
    app.listen(PORT, () => {
      console.log(`Server running up in port :${PORT}`);
    });
  })
  .catch((err) => {
    console.err(err);
  });
