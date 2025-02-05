import { FinancialMetric, MetricInsights, Expense, FinancialReport } from '../models/index.js';
import sequelize from '../config/db.js';
import { Op } from 'sequelize'; 

export const generateReportContent = async (req, res) => {
  try {
    const { metric_types, start_date, end_date, report_type_id } = req.body; // Added report_type_id
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
      report_type_id: report_type_id, // Use the report_type_id from the request
      start_date: start_date,
      end_date: end_date,
      content: reportText,
    });

    // Return the JSON response with the report ID
    res.json({
      success: true,
      report: reportContent,
      reportId: newReport.id, // Return the ID of the created report
    });

  } catch (error) {
    console.error('Error generating report:', error);
    res.status(500).json({
      success: false,
      message: 'Error generating report',
    });
  }
};
