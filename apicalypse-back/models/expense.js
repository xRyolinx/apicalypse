import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Expense = sequelize.define('Expense', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id',
    },
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  percentage_change: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  insight: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  recommendation: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  shortcut: {
    type: DataTypes.ENUM('over the budget', 'way over the budget', 'consider adjusting'),
    allowNull: true,
  },
  expense_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
}, {
  timestamps: true,
  underscored: true, 
  tableName: 'expenses',
});

export default Expense;
