import  { Expense } from '../models/index.js';

// Create a new expense entry
const createExpense = async (req, res) => {
  try {
    const { user_id, category, amount, percentage_change, expense_date } = req.body; 

    const newExpense = await Expense.create({
      user_id,
      category,
      amount,
      percentage_change, // Use the given percentage_change from the request
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
    const { user_id } = req.query;

    const expenses = await Expense.findAll({
      where: { user_id },
    });

    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching expenses', error });
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

export { createExpense, getExpenses, createMultipleExpenses };
