import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Expense = sequelize.define('Expense', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
    comment: 'Unique identifier for each expense',
  },
  user_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'Users', // Ensure the model name matches
      key: 'id',
    },
    comment: 'Reference to the user who logged the expense',
  },
  description:{
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'Description of the expense',
  },

  category: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: [['Marketing', 'Salaries', 'Utilities', 'Office Supplies', 'Miscellaneous']],
    },
    comment: 'Category of the expense',
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      min: 0,
    },
    comment: 'Amount of the expense in USD',
  },
  percentage_change: {
    type: DataTypes.FLOAT,
    allowNull: true,
    comment: 'Percentage change compared to the previous period',
  },
  insight: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'AI-generated insight regarding the expense',
  },
  recommendation: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'AI-generated recommendations for future planning',
  },
  shortcut: {
    type: DataTypes.ENUM('over the budget', 'way over the budget', 'consider adjusting'),
    allowNull: true,
    comment: 'Shortcut to describe the budget situation',
  },
  expense_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    comment: 'The date when the expense occurred',
  },
}, {
  timestamps: true, // Includes createdAt and updatedAt
  tableName: 'expenses',
  comment: 'Stores individual expense entries for users',
});

export default Expense;
