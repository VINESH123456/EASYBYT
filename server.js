const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
}));

// Database Connection
mongoose.connect('mongodb://localhost:27017/language_learning', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Routes
const authRoutes = require('./routes/auth');
const courseRoutes = require('./routes/courses');

app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
