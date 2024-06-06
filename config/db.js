const mongoose = require('mongoose') //Import the mongoose library for MongoDB interactions

// Define an asynchronous fuction to connect to the MangoDB database
const connectDB = async () => {
    try {
        // Attempts to establish a connection to the MongoDB database using mongoose
        await mongoose.connect('mongodb://localhost/komodo-socia-media', {
            useNewUrlParser: true, // Use the new URL string parser instead of the deprecated one
            useUnifiedTopology: true, // Ues the new unified topology engine for MongoDB
        })
        console.log('MongoDB connected') // Log a success message if the connection is established
    } catch (err) {
        console.error(err.message) // Log any error that occur during the connection attempt
        process.exit(1) // Exit the process with failure (status code 1) if there's an error
    }
}

module.exports = connectDB // Exports the connection function to be used in other parts of the application
