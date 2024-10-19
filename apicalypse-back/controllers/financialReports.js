import { FinancialReport } from '../models/index.js';

// Create a new financial report
const createFinancialReport = async (req, res) => {
    const { start_date, end_date, report_type } = req.body;
    
    const user_id = req.userId; 

    try {
        const newReport = await FinancialReport.create({
            user_id,
            report_type,
            start_date,
            end_date,
            content,
        });

        res.status(201).json(newReport);
    } catch (error) {
        res.status(500).json({ message: 'Error creating financial report', error });
    }
};

// Get all financial reports for a user
const getFinancialReports = async (req, res) => {
    const user_id = req.userId;

    try {
        const reports = await FinancialReport.findAll({
            where: { user_id },
        });

        res.json(reports);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching financial reports', error });
    }
};

// Get a specific financial report
const getFinancialReport = async (req, res) => {
    const { id } = req.params;

    try {
        const report = await FinancialReport.findOne({ where: { id } });

        if (!report) {
            return res.status(404).json({ message: 'Financial report not found' });
        }

        res.json(report);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching financial report', error });
    }
};

// Update a financial report
const updateFinancialReport = async (req, res) => {
    const { id } = req.params;
    const { start_date, end_date, report_type, content } = req.body;

    try {
        const [updated] = await FinancialReport.update(
            { start_date, end_date, report_type, content },
            { where: { id } }
        );

        if (!updated) {
            return res.status(404).json({ message: 'Financial report not found' });
        }

        const updatedReport = await FinancialReport.findOne({ where: { id } });
        res.json(updatedReport);
    } catch (error) {
        res.status(500).json({ message: 'Error updating financial report', error });
    }
};

// Delete a financial report
const deleteFinancialReport = async (req, res) => {
    const { id } = req.params;

    try {
        const deleted = await FinancialReport.destroy({ where: { id } });

        if (!deleted) {
            return res.status(404).json({ message: 'Financial report not found' });
        }

        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting financial report', error });
    }
};

// Get reports by date range
const getReportsByDateRange = async (req, res) => {
    const user_id = req.userId; // Get userId from the JWT in the request
    const { start_date, end_date } = req.query;

    try {
        const reports = await FinancialReport.findAll({
            where: {
                user_id,
                start_date: {
                    [Op.gte]: start_date,
                },
                end_date: {
                    [Op.lte]: end_date,
                },
            },
        });

        res.json(reports);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching financial reports by date range', error });
    }
};

// Get reports by type
const getReportsByType = async (req, res) => {
    const user_id = req.userId; // Get userId from the JWT in the request
    const { report_type } = req.query;

    try {
        const reports = await FinancialReport.findAll({
            where: {
                user_id,
                report_type,
            },
        });

        res.json(reports);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching financial reports by type', error });
    }
};

export {
    createFinancialReport,
    getFinancialReports,
    getFinancialReport,
    updateFinancialReport,
    deleteFinancialReport,
    getReportsByDateRange,
    getReportsByType,
};
