import express from 'express';
import { getUserData } from '../services/userService.js';

const router = express.Router();

router.get('/user/:id', (req, res) => {
  const user = getUserData(req.params.id);
  res.json(user);
});

export default router;
