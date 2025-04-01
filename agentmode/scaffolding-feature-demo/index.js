import express from 'express';

const app = express();
app.use(express.json());

// TODO: Add productRoutes when scaffolded

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
