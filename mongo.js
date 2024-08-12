// mongo.js

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const mongoDBConnectionString = process.env.MONGODB_URI;

let Schema = mongoose.Schema;

let userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

let User;

module.exports.connect = async function () {
    try {
        await mongoose.connect(mongoDBConnectionString);

        const database = mongoose.connection;
        User = database.model('User', userSchema);
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        throw new Error('MongoDB connection failed');
    }
};

module.exports.registerUser = async function (userData) {
    if (userData.password !== userData.password2) {
        throw new Error('Passwords do not match');
    }

    try {
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        userData.password = hashedPassword;

        let newUser = new User(userData);
        await newUser.save();
        return `User, ${userData.username}, successfully registered`;
    } catch (err) {
        if (err.code === 11000) {
            throw new Error('Username already taken');
        } else {
            throw new Error(`Error creating user: ${err.message}`);
        }
    }
};

module.exports.findUserByUsername = function (username) {
    return User.findOne({ username }).exec();
};