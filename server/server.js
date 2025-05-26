const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const wordRoutes = require('./routes/wordRoutes');
require ('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

app.use('/words', wordRoutes);

app.listen(5009, () => console.log('Server running on port 5009'));