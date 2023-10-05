const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb+srv://<Username>:<password>@cluster0.uuid3hhd.mongodb.net/?retryWrites=true&w=majority');

module.exports = connection;