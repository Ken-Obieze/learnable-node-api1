const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const db = require('./db/db');
const roomRoutes = require('./routes/roomRoutes'); // Import roomRoutes

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Mount roomRoutes at /api/v1/rooms
app.use('/api/v1/rooms', roomRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
