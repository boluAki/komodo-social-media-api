const User = require('../models/User')
const jwt = require('jsonwebtoken')

exports.signup = async (req, res) => {
    const { username, email, password } = req.body
    try {
        const newUser = new User({ username, email, password })
        await newUser.save()
        const token = jwt.sign({ userId: newUser._id }, 'your_jwt_secret')
        res.status(201).json({ token })
    } catch (err) {
        res.status(500).json({ error: err.mesage })
    }
}

exports.login = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email })
        if (!user || !user.comparePassword(password)) {
            return res.status(401).json({ error: 'Invalid email or password' })
        }
        const token = jwt.sign({ userId: user._id }, 'your_jwt_secret')
        res.status(200).json({ token })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}
