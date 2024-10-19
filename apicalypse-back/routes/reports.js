import express from 'express';
import { createFinancialReport,
    getFinancialReports,
    getFinancialReport,
    updateFinancialReport,
    deleteFinancialReport,
    getReportsByDateRange,
    getReportsByType } from '../controllers/financialReports.js';
import { authenticateJWT } from '../middleware/auth.js';

const router = express.Router();

router.post('/reports', authenticateJWT, createFinancialReport); // Create report
router.get('/reports', authenticateJWT, getFinancialReports); // Get all reports for a user
router.get('/reports/:id', authenticateJWT, getFinancialReport); // Get a specific report by ID
router.put('/reports/:id', authenticateJWT, updateFinancialReport); // Update a report
router.delete('/reports/:id', authenticateJWT, deleteFinancialReport); // Delete a report
router.get('/reports/date-range', authenticateJWT, getReportsByDateRange); // Get reports within a date range
router.get('/reports/type', authenticateJWT, getReportsByType); // Get reports by type

export default router;
