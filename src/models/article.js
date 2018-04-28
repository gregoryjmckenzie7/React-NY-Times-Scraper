const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema ({
    title: {
        type: String,
        require: true
    },
    date : {
        type: String,
        require: true
    },
    href: {
        type: String,
        require: true
    },
    summary: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model("Article", articleSchema);