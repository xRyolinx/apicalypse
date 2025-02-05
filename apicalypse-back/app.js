import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors'; // Import cors
import sequelize from './config/db.js'; 
import authRoutes from './routes/auth.js';
import userRoutes from './routes/user.js';
import reportsRoutes from './routes/reports.js';
import insightsRoutes from  './routes/insights.js'
/*
import dashboardRoutes from './routes/dashboard.js';
import expensesRoutes from './routes/expenses.js';
*/

const app = express();

// Middleware to enable CORS
app.use(cors()); 

// Middleware to parse JSON bodies
app.use(express.json());


app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} request to ${req.url}`);
  next(); // Call the next middleware or route handler
});

// // Test route
// app.get('/test', (req, res) => {
//   res.send('Test route');
// });

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/reports', reportsRoutes);
app.use('/api/reportInsights', insightsRoutes);

/*
app.use('/dashboard', dashboardRoutes);
app.use('/expenses', expensesRoutes);
*/

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
