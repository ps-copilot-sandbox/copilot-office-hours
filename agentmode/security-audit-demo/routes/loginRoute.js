import express from 'express';
import { db } from '../db/connection.js';

const router = express.Router();

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // ❌ INSECURE: SQL Injection vulnerability
  const sql = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;

  const result = db.query(sql);

  if (result.length > 0) {
    res.send("Login successful");
  } else {
    res.status(401).send("Invalid credentials");
  }
});

export default router;
