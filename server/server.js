import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDb from './db/db.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();
const app = express();

// ✅ Place CORS middleware before any other routes or middleware
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send("Welcome to FoodKalash API");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDb();
});
