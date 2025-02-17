/*const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Access Denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid Token' });
  }
};*/
/*const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Access denied, no token provided' });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });
    req.user = user; // Attach user info to req.user
    next();
  });
};

module.exports = authenticateToken;*/
/*const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]; // Extract token from header

  if (!token) {
    return res.status(401).json({ message: 'Access Denied: No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user data to `req.user`
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid token' });
  }
};

module.exports = authenticateToken;*/

/*const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log('Auth Header:', authHeader); // Debugging: Check if token exists

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  const token = authHeader.split(' ')[1];

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.log('JWT Verification Error:', err); // Debugging: Check for token errors
      return res.status(403).json({ message: 'Forbidden: Invalid token' });
    }
    req.user = user; 
    console.log('Authenticated User:', req.user); // Debugging: Check extracted user data
    next();
  });
};

module.exports = authenticateToken;*/



require('dotenv').config();
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log('Auth Header:', authHeader); // Debugging: Check if token exists

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    console.log('🚨 Token is missing or invalid format');
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  const token = authHeader.split(' ')[1];
  console.log("Extracted Token:", token); // 🔍 Debugging
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.log('JWT Verification Error:', err); // Debugging: Check for token errors
      return res.status(403).json({ message: 'Forbidden: Invalid token' });
    }
    //req.user = { id: user.userId, role: user.role };
    console.log('Decoded user:', user); 
    req.user = user; 
    //console.log('Authenticated User:', req.user); // Debugging: Check extracted user data
    next();
  });
};


module.exports = authenticateToken;
