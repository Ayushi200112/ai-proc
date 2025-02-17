require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/quiz', require('./routes/quiz'));
app.use('/api/quiz/attempt', require('./routes/attempt'));
app.use('/api/execute', require('./routes/execute'));  // ✅ Added the execution route

// Debugging check
console.log("🔍 Checking .env: JWT_SECRET =", process.env.JWT_SECRET);

// Set port (default to 5001 if not specified)
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


