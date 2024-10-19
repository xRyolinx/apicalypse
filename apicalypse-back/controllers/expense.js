import Expense from '../models/expense.js';


// Create a new expense entry
const createExpense = async (req, res) => {
  try {
    const { user_id, category, amount, expense_date } = req.body;

    const newExpense = await Expense.create({
      user_id,
      category,
      amount,
      expense_date,
      percentage_change, // Placeholder, calculate this based on logic
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
    }

// create multiple expenses

const createMultipleExpenses = async (req, res) => {
    try {
        const { user_id, expenses } = req.body;
    
        const newExpenses = await Expense.bulkCreate(expenses.map((expense) => ({
        user_id,
        ...expense
        })));
    
        res.status(201).json(newExpenses);
    } catch (error) {
        res.status(500).json({ message: 'Error creating expenses', error });
    }
    }
