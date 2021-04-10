const express = require('express');
const mongoose = require('mongoose');
const mongodb = require('mongodb');
const cors = require('cors');
const users = require('./routes/users');

const app = express();
const url = `mongodb+srv://ayu:nABvidKqCXLL24zx@cluster0.9vhaa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

app.use(cors());
app.use(express.json());

app.use('/api/users', users);

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true }).then(() => {
  console.log('Connected to MongoDB database');
});

app.listen(4000, () => {
    console.log(`Starting server on port 4000`);
  });