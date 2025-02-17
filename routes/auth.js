// routes/auth.js
/*const express = require('express');
const bcrypt = require('bcryptjs');
//const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();


router.post('/register', async (req, res) => {
  const { name, email, password, role } = req.body;
  
  try {
    console.log('Received registration request:', req.body); // Debug log
    
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log('User already exists:', email);
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Save user
    const user = new User({ name, email, password: hashedPassword, role });
    await user.save();

    console.log('User registered successfully:', user);
    res.status(201).json({ message: 'User registered successfully' });

  } catch (error) {
    console.error('Error registering user:', error); // Better error logging
    res.status(500).json({ message: 'Error registering user', error: error.message });
  }
});



router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    console.log('🔹 Login Attempt for Email:', email);

    const user = await User.findOne({ email });

    if (!user) {
      console.log('❌ User not found:', email);
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    console.log('🔹 User found in DB:', user);

    console.log('🔹 Incoming Password:', password);
    console.log('🔹 Hashed Password from DB:', user.password);

    const match = await bcrypt.compare(password, user.password);
    console.log('🔹 Password Match Result:', match);

    if (!match) {
      console.log('❌ Password does not match:', email);
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    
    console.log('✅ Login successful:', email);
    res.status(200).json({ token });

  } catch (error) {
    console.error('🔥 Server Error:', error.message);
    res.status(500).json({ message: 'Error logging in', error: error.message });
  }
});

 


module.exports = router;*/
/*const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const jwt = require('jsonwebtoken'); 
const router = express.Router();

// Registration route
router.post('/register', async (req, res) => {
  const { name, email, password, role } = req.body;
  
  try {
    console.log('Received registration request:', req.body); // Debug log
    
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log('User already exists:', email);
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Save user
    const user = new User({ name, email, password: hashedPassword, role });
    await user.save();

    console.log('User registered successfully:', user);
    res.status(201).json({ message: 'User registered successfully' });

  } catch (error) {
    console.error('Error registering user:', error); // Better error logging
    res.status(500).json({ message: 'Error registering user', error: error.message });
  }
});


// Login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Check if password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate token
    const token = jwt.sign({ userId: user._id, role: user.role }, 'your_jwt_secret', { expiresIn: '1h' });

    // Send token in response
    res.status(200).json({ token });
  } catch (error) {
    console.error("Error in login:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;*/

require('dotenv').config();
const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Registration route
router.post('/register', async (req, res) => {
  const { name, email, password, role } = req.body;
  
  try {
    console.log('Received registration request:', req.body); // Debug log

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log('User already exists:', email);
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Save user
    const user = new User({ name, email, password: hashedPassword, role });
    await user.save();

    console.log('User registered successfully:', user);
    res.status(201).json({ message: 'User registered successfully' });

  } catch (error) {
    console.error('Error registering user:', error); // Better error logging
    res.status(500).json({ message: 'Error registering user', error: error.message });
  }
});

// Login route
/*router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log('🔹 Login request received for:', email);
    let user = await User.findOne({ email });
    if (!user) {
      console.log('❌ User not found:', email);
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Check if password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT token with secret from .env
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,  // ✅ Using secret from .env
      { expiresIn: '1h' }
    );

    // Send token in response
    res.status(200).json({ token });

  } catch (error) {
    console.error("Error in login:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});*/

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log('🔹 Login request received for:', email);

    let user = await User.findOne({ email });
    if (!user) {
      console.log('❌ User not found:', email);
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Check if password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log('❌ Incorrect password for:', email);
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Log secret key (Make sure it's loaded!)
    console.log('🔹 JWT Secret Key:', process.env.JWT_SECRET);

    // Generate token
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,  // ✅ Ensure this is defined
      { expiresIn: '1h' }
    );

    console.log('✅ Login successful for:', email);
    res.status(200).json({ token });

  } catch (error) {
    console.error("🚨 Error in login:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});


module.exports = router;


