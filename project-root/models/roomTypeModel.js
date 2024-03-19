const mongoose = require('mongoose');

const roomTypeSchema = new mongoose.Schema({
    name: String
});

module.exports = mongoose.model('RoomType', roomTypeSchema);
