const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    imageUrl: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    mobileno: { type: String, required: true },
    address: { type: String, required: true },
    bloodgroup: { type: String, required: true },
    emergencyContacts: [{
        name: { type: String, required: true },
        relationship: { type: String, required: true },
        phone: { type: String, required: true },
        isPrimary: { type: Boolean, default: false },
    }],
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

const user = mongoose.model("users", userSchema);
module.exports = user;