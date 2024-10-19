import { FinancialReport , FinancialMetric, MetricInsights , Expense } from '../models/index.js';
import { Op } from 'sequelize';

// Create a new financial report
 const createFinancialReport = async (req, res) => {
    try {
      const { metric_types, start_date, end_date} = req.body; 
      const user_id = req.userId;
      console.log('Received metric_types:', metric_types);
      
      const financialMetrics = await FinancialMetric.findAll({
        where: {
          user_id: user_id,
          [Op.or]: [
            { metric_type: metric_types[0] },
            { metric_type: metric_types[1] },
            { metric_type: metric_types[2] },
          ],
          created_at: {
            [Op.between]: [start_date, end_date],
          },
        },
      });
  
      console.log('Fetched financial metrics:', financialMetrics);
  
      if (financialMetrics.length === 0) {
        return res.status(404).json({
          success: false,
          message: 'No financial metrics found for the specified criteria.',
        });
      }
  
      // Initialize the response data object
      let reportContent = {
        metrics: [],
        insights: [],
        recommendations: [],
        expenses: [],
      };
  
      // Fetch insights and recommendations for each financial metric
      for (const metric of financialMetrics) {
        const metricInsights = await MetricInsights.findOne({
          where: {
            financial_metric_id: metric.id,
          },
        });
  
        reportContent.metrics.push({
          category: metric.category,
          amount: metric.amount,
          date: metric.created_at,
        });
  
        if (metricInsights) {
          reportContent.insights.push({
            category: metric.category,
            insight: metricInsights.insight,
          });
          reportContent.recommendations.push({
            category: metric.category,
            recommendation: metricInsights.recommendation,
          });
        }
      }
  
      // If any of the selected metric types is "Expenses", fetch the expenses data
      if (metric_types.includes('Expenses')) {
        const expenses = await Expense.findAll({
          attributes: [
            'category',
            'amount',
            'description',
            'percentage_change',
            'insight',
            'recommendation',
            'shortcut',
            'expense_date',
          ],
          where: {
            user_id: user_id,
            expense_date: {
              [Op.gte]: start_date,
              [Op.lte]: end_date,
            },
          },
        });
  
        expenses.forEach((expense) => {
          reportContent.expenses.push({
            category: expense.category,
            amount: expense.amount,
            percentage_change: expense.percentage_change,
            insight: expense.insight,
            recommendation: expense.recommendation,
            shortcut: expense.shortcut,
            date: expense.expense_date,
          });
        });
      }
  
      // Prepare the report content to save in the FinancialReport model
      const reportText = JSON.stringify(reportContent, null, 2); // Converts reportContent to a JSON string
  
      // Create a new financial report entry
      const newReport = await FinancialReport.create({
        user_id: user_id,
        start_date: start_date,
        end_date: end_date,
        content: reportText,
      });
  
      // Return the JSON response with the report ID
      res.json({
        success: true,
        newReport
      });
  
    } catch (error) {
      console.error('Error generating report:', error);
      res.status(500).json({
        success: false,
        message: 'Error generating report',
      });
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
    const { start_date, end_date, content } = req.body;

    try {
        const [updated] = await FinancialReport.update(
            { start_date, end_date,  content },
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
   

    try {
        const reports = await FinancialReport.findAll({
            where: {
                user_id,
             
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
