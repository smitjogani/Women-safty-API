const mongoose = require("mongoose");

const selfDefenceSchema = new mongoose.Schema({
    techniqueName: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    videoLink: {
        type: String,
        validate: {
            validator: function (v) {
                return /^https?:\/\/.+\..+/i.test(v);
            },
            message: (props) => `${props.value} is not a valid URL!`,
        },
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

const defence = mongoose.model("selfdefence", selfDefenceSchema);
module.exports = defence;