const express = require('express');
const router = express.Router();
const Room = require('../models/roomModel');
const RoomType = require('../models/roomTypeModel');

// Create Room Type
router.post('/types', async (req, res) => {
    try {
        const roomType = new RoomType(req.body);
        await roomType.save();
        res.status(201).json(roomType);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get All Room Types
router.get('/types', async (req, res) => {
    try {
        const roomTypes = await RoomType.find();
        res.json(roomTypes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create Room
router.post('/', async (req, res) => {
    try {
        const room = new Room(req.body);
        await room.save();
        res.status(201).json(room);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get All Rooms
router.get('/', async (req, res) => {
    try {
        const rooms = await Room.find();
        res.json(rooms);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Patch Room
router.patch('/:roomId', async (req, res) => {
    try {
        const room = await Room.findByIdAndUpdate(req.params.roomId, req.body, { new: true });
        res.json(room);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete Room
router.delete('/:roomId', async (req, res) => {
    try {
        await Room.findByIdAndDelete(req.params.roomId);
        res.json({ message: 'Room deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get Room by ID
router.get('/:roomId', async (req, res) => {
    try {
        const room = await Room.findById(req.params.roomId);
        res.json(room);
    } catch (err) {
        res.status(404).json({ message: 'Room not found' });
    }
});

module.exports = router;
