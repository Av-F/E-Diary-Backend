const express = require('express');
const cors = require('cors');
const entryRoutes = require('./routes/entries');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/entries', entryRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
