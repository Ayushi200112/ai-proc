/*const express = require("express");
const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

const router = express.Router();

router.post("/", async (req, res) => {
  const { code, language } = req.body;

  if (!code || !language) {
    return res.status(400).json({ error: "Code and language are required." });
  }

  try {
    let command;

    if (language === "python") {
      command = `python -c "${code.replace(/"/g, '\\"')}"`;
    } else if (language === "javascript") {
      command = `node -e "${code.replace(/"/g, '\\"')}"`;
    } else if (language === "cpp") {
      // Save C++ code to a file
      const filePath = path.join(__dirname, "temp.cpp");
      const outputFile = path.join(__dirname, "temp.out");
      fs.writeFileSync(filePath, code);

      // Compile and execute
      command = `g++ "${filePath}" -o "${outputFile}" && "${outputFile}"`;
    } else {
      return res.status(400).json({ error: "Unsupported language." });
    }

    exec(command, (error, stdout, stderr) => {
      if (error) {
        return res.status(500).json({ error: stderr || error.message });
      }
      res.json({ output: stdout.trim() });
    });
  } catch (err) {
    res.status(500).json({ error: "Execution failed." });
  }
});

module.exports = router;*/


const express = require('express');
const { exec } = require('child_process');
const router = express.Router();

router.post('/execute', async (req, res) => {
  const { language, code, testCases } = req.body;

  if (!code || !testCases) {
    return res.status(400).json({ message: 'Code and test cases are required' });
  }

  let command;
  if (language === 'javascript') {
    command = `node -e "${code}"`;
  } else if (language === 'python') {
    command = `python3 -c "${code}"`;
  } else if (language === 'cpp') {
    command = `g++ -o temp.out temp.cpp && ./temp.out`;
  }

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Execution error: ${error.message}`);
      return res.status(500).json({ output: stderr || 'Execution failed' });
    }
    res.json({ output: stdout });
  });
});

module.exports = router;

/*const express = require("express");
const router = express.Router();
const axios = require("axios");
const { exec } = require("child_process");

// Choose Execution Method (Judge0 API or Local)
const USE_JUDGE0 = true;  // Change to `false` for local execution

// Judge0 API Details
const JUDGE0_API_URL = "https://api.judge0.com";
const languageMap = {
    "javascript": 63,  // Node.js
    "python": 71,      // Python 3
    "cpp": 54,         // C++
};

// Run code using Judge0
const runWithJudge0 = async (code, language) => {
    try {
        const response = await axios.post(`${JUDGE0_API_URL}/submissions`, {
            source_code: code,
            language_id: languageMap[language] || 63,  // Default to JavaScript
            stdin: "",
        });

        const token = response.data.token;

        // Wait for execution result
        let output;
        while (true) {
            const result = await axios.get(`${JUDGE0_API_URL}/submissions/${token}`);
            if (result.data.status.id >= 3) { // 3 = Completed
                output = result.data.stdout || result.data.stderr;
                break;
            }
        }
        return output;
    } catch (error) {
        return `Error: ${error.message}`;
    }
};

// Run code locally (JavaScript & Python only)
const runLocally = (code, language, res) => {
    let command;
    if (language === "python") command = `python3 -c "${code.replace(/"/g, '\\"')}"`;
    else if (language === "javascript") command = `node -e "${code.replace(/"/g, '\\"')}"`;
    else return res.json({ error: "Unsupported language for local execution." });

    exec(command, (error, stdout, stderr) => {
        if (error) return res.json({ error: stderr });
        res.json({ output: stdout });
    });
};

// Route to handle code execution
router.post("/", async (req, res) => {
    const { code, language } = req.body;

    if (USE_JUDGE0) {
        const output = await runWithJudge0(code, language);
        return res.json({ output });
    } else {
        return runLocally(code, language, res);
    }
});

module.exports = router;*/


