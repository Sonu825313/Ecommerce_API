
const mongoose = require('mongoose');

let dburl = "mongodb+srv://ecommerce_api:d1d3FJvK9PFCxsBP@cluster0.7ngc5ly.mongodb.net/?retryWrites=true&w=majority"

// connect from mongodb
mongoose.connect(dburl || process.env.MONGOOSE_URL);
// mongoose.connect('tabase?retryWrites=true&w=majority');

// aquire connection if it is succesful
const db = mongoose.connection;

// error
db.on('error', console.error.bind(console, 'error connecting to db'));

// up and running then print the message
db.once('open', function(){
    console.log("successfully connected to database!");
});

module.exports = db;