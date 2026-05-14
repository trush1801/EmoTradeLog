import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.routes.js';
import tradeRoutes from './routes/tradeRoutes.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/trades', tradeRoutes);

app.get('/', (req, res) => {
  res.send('EmoTradeLog API is running...');
});

const PORT = process.env.PORT || 5000;

// Only start the server if MONGO_URI is set, else warn the user
if (process.env.MONGO_URI === 'your_mongodb_connection_string_here' || !process.env.MONGO_URI) {
  console.warn('⚠️ WARNING: MONGO_URI is not set in .env file. Please set up MongoDB Atlas and add your connection string.');
} else {
  connectDB().then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  });
}