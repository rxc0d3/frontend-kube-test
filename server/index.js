// https://aslamdoctor.com/blog/simple-crud-app-using-express-nuxtjs-using-servermiddleware-part-1-2/239

const express = require('express')
const cors = require('cors');

// Create express instnace
const app = express()

// enabling CORS for all requests
app.use(cors());

// Init body-parser options (inbuilt with express)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Require & Import API routes
const tests = require('./routes/tests')

// Use API Routes
app.use(tests)

// Export the server middleware
module.exports = {
    path: '/api',
    handler: app
}