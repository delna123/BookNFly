const mongoose = require("mongoose")

const userschema = new mongoose.Schema({
    name: {type: String, 
        required: true},
    email: {type: String,
        required: true,
        unique: true},
    createdAt: {type: Date,
        default: Date.now}
    });
const users = mongoose.model("users", userschema);
module.exports = users;