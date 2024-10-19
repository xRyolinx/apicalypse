import { readFile, utils } from 'xlsx';
import { User, Expense, FinancialMetric } from '../models';

// Method for uploading financial data (file upload)
export async function addFinancialData(req, res) {
  try {
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }

    // Read the uploaded Excel file
    const workbook = readFile(req.file.path);

    // Assuming your Excel sheet names are "Expenses" and "FinancialMetrics"
    const expensesSheet = workbook.Sheets['Expenses'];
    const metricsSheet = workbook.Sheets['FinancialMetrics'];

    // Parse sheet into JSON
    const expensesData = utils.sheet_to_json(expensesSheet);
    const metricsData = utils.sheet_to_json(metricsSheet);

    // Insert expenses into the database
    for (const expense of expensesData) {
      await Expense.create({
        user_id: req.userId, 
        category: expense['Category'],
        amount: expense['Amount'],
        percentage_change: expense['% Change'],
        expense_date: expense['Expense Date'],
      });
    }

    // Insert financial metrics into the database
    for (const metric of metricsData) {
      await FinancialMetric.create({
        user_id: req.userId, 
        metric_type_id: metric['Metric Type ID'],
        category: metric['Category'],
        amount: metric['Amount'],
        created_at: metric['Created At'],
      });
    }

    res.status(200).send('File uploaded and data saved successfully.');
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).send('Internal Server Error.');
  }
}

// Method for getting financial data for a user
export async function getFinancialData(req, res) {
  try {
    const userId = req.userId

    // Fetch the financial data for the given user
    const expenses = await Expense.findAll({ where: { user_id: userId } });
    const financialMetrics = await FinancialMetric.findAll({ where: { user_id: userId } });

    res.status(200).json({ expenses, financialMetrics });
  } catch (error) {
    console.error('Error fetching financial data:', error);
    res.status(500).send('Internal Server Error.');
  }
}
