const mongoose = require("mongoose");

const medicareSchema = new mongoose.Schema({
    injuryType: { type: String, required: true },
    descInjury: { type: String, required: true },
    severity: {
        type: String,
        enum: ['Minor', 'Moderate', 'Severe'],
        required: true
    },
    medicationsOne: [{
        medicationName: {
            type: String,
            required: true
        },
        dosage: {
            type: String,
            required: true
        },
        usage: {
            type: String,
        }
    }],

    instructions: {
        type: String
    },

    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

const medi = mongoose.model("medicare", medicareSchema);
module.exports = medi;