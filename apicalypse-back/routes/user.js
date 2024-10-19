
import { addFinancialData, getFinancialData } from '../controllers/user.js';
import { upload } from '../middleware/upload.js'; 
import { authenticateJWT } from '../middleware/auth.js';

import { createExpense, getExpenses, createMultipleExpenses , getExpensesByTimePeriod } from '../controllers/expense.js';
import { createFinancialMetric, getFinancialMetrics } from '../controllers/financialMetrics.js';

import { Router } from 'express';

const router = Router();

// Route to create a new expense
router.post('/expenses', authenticateJWT, createExpense);

// Route to get all expenses for a user
router.get('/expenses', authenticateJWT, getExpenses);

// Route to create multiple expenses
router.post('/expenses/multiple', authenticateJWT, createMultipleExpenses);

// Route to get expenses by time period
router.get('/expenses/time-period', authenticateJWT, getExpensesByTimePeriod);

// Route to create a new financial metric
router.post('/financial-metrics', authenticateJWT, createFinancialMetric);

// Route to get all financial metrics for a user
router.get('/financial-metrics', authenticateJWT, getFinancialMetrics);


// Route to upload financial data (Excel file) for a user
router.post('/uploadFinancialData',authenticateJWT, upload.single('file'), addFinancialData);

// Route to get financial data for a user
router.get('/:userId/financialData',authenticateJWT, getFinancialData);

export default router;
