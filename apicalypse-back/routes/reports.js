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

router.post('/', authenticateJWT, createFinancialReport); // Create report
router.get('/', authenticateJWT, getFinancialReports); // Get all reports for a user
router.get('/:id', authenticateJWT, getFinancialReport); // Get a specific report by ID
router.put('/:id', authenticateJWT, updateFinancialReport); // Update a report
router.delete('/:id', authenticateJWT, deleteFinancialReport); // Delete a report
router.get('/date-range', authenticateJWT, getReportsByDateRange); // Get reports within a date range
router.get('/type', authenticateJWT, getReportsByType); // Get reports by type

export default router;
