import express from 'express';
import userRoutes from './routes/userRoutes.js';
import { authenticate } from './services/authService.js';

const app = express();
const PORT = 3000;

app.use(express.json());

// Mount user-related routes
app.use('/api', userRoutes);

// Example: Simple auth check
app.get('/auth-check', (req, res) => {
  const isAuthenticated = authenticate("valid");
  res.json({ authenticated: isAuthenticated });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
