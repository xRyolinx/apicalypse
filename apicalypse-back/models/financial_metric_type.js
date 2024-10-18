

import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const FinancialMetricType = sequelize.define('FinancialMetricType', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  type_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  tableName: 'financial_metric_types',
  timestamps: false,
});

export default FinancialMetricType;
