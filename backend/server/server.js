const express = require('express');
const mongoose = require('mongoose');
const mongodb = require('mongodb');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true }).then(() => {
  console.log('Connected to MongoDB database');
});

app.listen(4000, () => {
    console.log(`Starting server on port 4000`);
  });