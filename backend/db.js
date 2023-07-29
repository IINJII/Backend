const mongoose = require('mongoose');
const URI = 'mongodb://127.0.0.1:27017/backendExample'

const mongoConnect = () => {
    mongoose.connect(URI);
}

module.exports = mongoConnect;