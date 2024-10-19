import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const FinancialMetric = sequelize.define('FinancialMetric', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'User', 
      key: 'id',
    },
  },
  metric_type: {
    type: DataTypes.ENUM('income statement', 'cash flow', 'revenue', 'marketing'),
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'financial_metrics',
  timestamps: false,
});

export default FinancialMetric;
