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
      model: 'Users', // Assumes your User model is named 'Users'
      key: 'id',
    },
    comment: 'Reference to the user who logged the expense',
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

module.exports = Expense;
