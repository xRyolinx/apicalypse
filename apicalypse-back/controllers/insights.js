import { FinancialMetric, MetricInsights, Expense } from '../models/index.js';
import sequelize from '../config/db.js';

export const generateReportContent = async (req, res) => {
  try {
    const { user_id, metric_types, start_date, end_date } = req.body; 

    // Fetch the financial metrics based on multiple metric types, date, and user
    const financialMetrics = await FinancialMetric.findAll({
      where: {
        user_id: user_id,
        metric_type: {
          [sequelize.Op.in]: metric_types, // Use Op.in for multiple metric types as strings
        },
        created_at: {
          [sequelize.Op.between]: [start_date, end_date],
        },
      },
    });

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
    if (metric_types.includes('Expenses')) { // Check if "Expenses" is among the selected types
      const expenses = await Expense.findAll({
        where: {
          user_id: user_id,
          expense_date: {
            [sequelize.Op.between]: [start_date, end_date],
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

    // Return the JSON response
    res.json({
      success: true,
      report: reportContent,
    });

  } catch (error) {
    console.error('Error generating report:', error);
    res.status(500).json({
      success: false,
      message: 'Error generating report',
    });
  }
};
