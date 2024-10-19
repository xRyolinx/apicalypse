import sequelize from '../config/db.js';
import User from './user.js';
import Role from './role.js';
import FinancialReport from './financial_reports.js';
import FinancialMetric from './financial_metric.js';
import FinancialMetricType from './financial_metric_type.js';
import UserMetrics from './user_metrics.js';
import MetricInsights from './metric_insights.js';

// Define relationships
User.hasMany(FinancialReport, { foreignKey: 'user_id' });
User.hasMany(FinancialMetric, { foreignKey: 'user_id' });
User.hasMany(UserMetrics, { foreignKey: 'user_id' });
User.belongsTo(Role, { foreignKey: 'role_id' });

FinancialMetric.belongsTo(FinancialMetricType, { foreignKey: 'metric_type_id' });
FinancialMetric.hasMany(MetricInsights, { foreignKey: 'financial_metric_id' });
FinancialMetric.hasMany(UserMetrics, { foreignKey: 'metric_id' });

export {
  sequelize,
  User,
  Role,
  FinancialReport,
  FinancialMetric,
  FinancialMetricType,
  UserMetrics,
  MetricInsights,
};
