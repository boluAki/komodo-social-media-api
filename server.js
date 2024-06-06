const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/authRoutes')
const postRoutes = require('./routes/postRoutes')
const connectDB = require('./config/db')

const app = express()

//Middleware
app.use(bodyParser.json())

//Routes
app.use('/api/auth', authRoutes)
app.use('/api/posts', postRoutes)

// Connect to the database
connectDB()

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log('Server running on port ${PORT}'))
