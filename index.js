/*require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

// Connect to MongoDB (No dotenv needed)
connectDB();

const app = express();

//app.use(cors());
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" ,
    credentials: true
}));
// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/quiz', require('./routes/quiz'));
//app.use('/api/attempt', require('./routes/attempt'));
app.use('/api/quiz/attempt', require('./routes/attempt'));
console.log("🔍 Checking .env: JWT_SECRET =", process.env.JWT_SECRET);


// Set port (use 5000 if not specified)
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));*/

/*require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

// Connect to MongoDB
connectDB();

const app = express();

// Enable CORS
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/quiz", require("./routes/quiz"));
app.use("/api/quiz/attempt", require("./routes/attempt"));

console.log("🔍 Checking .env: JWT_SECRET =", process.env.JWT_SECRET);

// ✅ Code Execution API
app.post("/api/execute", async (req, res) => {
  const { code, language } = req.body;

  if (!code || !language) {
    return res.status(400).json({ error: "Code and language are required" });
  }

  try {
    let command;

    if (language === "python") {
      command = `python -c "${code.replace(/"/g, '\\"')}"`;
    } else if (language === "javascript") {
      command = `node -e "${code.replace(/"/g, '\\"')}"`;
    } else if (language === "cpp") {
      // Create a temporary file for the C++ code
      const filePath = path.join(__dirname, "temp.cpp");
      fs.writeFileSync(filePath, code);

      // Compile and execute C++ code
      const compiledFile = path.join(__dirname, "temp.out");
      command = `g++ "${filePath}" -o "${compiledFile}" && "${compiledFile}"`;
    } else {
      return res.status(400).json({ error: "Unsupported language." });
    }

    exec(command, (error, stdout, stderr) => {
      if (error) {
        return res.status(500).json({ error: stderr || error.message });
      }
      res.json({ output: stdout });
    });
  } catch (err) {
    res.status(500).json({ error: "Execution failed" });
  }
});

// Start Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));*/


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
app.use("/api/lecture", require("./routes/lecture"));


// Debugging check
console.log("🔍 Checking .env: JWT_SECRET =", process.env.JWT_SECRET);

// Set port (default to 5001 if not specified)
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


