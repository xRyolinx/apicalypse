import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const MetricInsights = sequelize.define('MetricInsights', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  financial_metric_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'FinancialMetric', 
      key: 'id',
    },
  },
  insight: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  recommendation: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'metric_insights',
  timestamps: false,
});

export default MetricInsights;
