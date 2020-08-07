const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mapSchema = new Schema({
    map: {type: Array, required: true},
    style: {type: Object, required: true},
    // title: {type: String, required: true}
}, {
    timestamps: true
})

const Map = mongoose.model('Map', mapSchema);

module.exports = Map;