import  { Expense } from '../models/index.js';
import { Op } from 'sequelize'; 


// Create a new expense entry
const createExpense = async (req, res) => {
  try {
    const {category, amount, percentage_change, expense_date } = req.body; 
    const user_id = req.userId; 

    const newExpense = await Expense.create({
      user_id,
      category,
      amount,
      percentage_change, 
      expense_date,
    });

    res.status(201).json(newExpense);
  } catch (error) {
    res.status(500).json({ message: 'Error creating expense', error });
  }
};

// Get all expenses for a user
const getExpenses = async (req, res) => {
    try {
      const userId = req.userId;
  
      const expenses = await Expense.findAll({
        where: { user_id: userId },
        attributes: [
          'id',
          'user_id',
          'category',
          'amount',
          'percentage_change',
          'insight',
          'recommendation',
          'shortcut',
          'expense_date', 
        ],
      });
  
      res.json(expenses);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching expenses', error });
    }
  };
  

  const getExpensesByTimePeriod = async (req, res) => {
    try {
        const { start_date, end_date } = req.body.query;
        const userId = req.userId;

        const expenses = await Expense.findAll({
            where: {
                user_id: userId,
                expense_date: {
                    [Op.gte]: start_date,
                    [Op.lte]: end_date,
                },
            },
        });

        res.json(expenses);
    } catch (error) {
        console.error('Error fetching expenses:', error); // Log the error for debugging
        res.status(500).json({ message: 'Error fetching expenses', error: error.message }); // Send error message in response
    }
};


// Create multiple expenses
const createMultipleExpenses = async (req, res) => {
  try {
    const { user_id, expenses } = req.body;

    const newExpenses = await Expense.bulkCreate(
      expenses.map((expense) => ({
        user_id,
        ...expense,
      }))
    );

    res.status(201).json(newExpenses);
  } catch (error) {
    res.status(500).json({ message: 'Error creating expenses', error });
  }
};

// add insights and recommendations to the expense
const addInsights = async (req, res) => {
  try {
    const { id, insights, recommendations } = req.body;

    const expense = await Expense.findOne({ where: { id } });

    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }

    expense.insights = insights;
    expense.recommendations = recommendations;

    await expense.save();

    res.json(expense);
  } catch (error) {
    res.status(500).json({ message: 'Error adding insights', error });
  }
};

//get insights and recommendations for the expense
const getInsights = async (req, res) => {
  try {
    const { id } = req.params;

    const expense = await Expense.findOne({ where: { id } });

    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }

    res.json({ insights: expense.insights, recommendations: expense.recommendations });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching insights', error });
  }
};

export { createExpense, getExpenses, createMultipleExpenses , getExpensesByTimePeriod , addInsights , getInsights };
