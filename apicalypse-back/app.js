import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import sequelize from './config/db.js'; 
import authRoutes from './routes/auth.js';
/*
import dashboardRoutes from './routes/dashboard.js';
import expensesRoutes from './routes/expenses.js';
import reportsRoutes from './routes/reports.js';*/

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
/*
app.use('/dashboard', dashboardRoutes);
app.use('/expenses', expensesRoutes);
app.use('/reports', reportsRoutes);*/

// 
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Handle PostgreSQL connection
(async () => {
    try {
      await sequelize.authenticate();
      console.log('Connected to PostgreSQL database successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  })();
  

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
