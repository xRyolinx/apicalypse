import { Sequelize } from 'sequelize';
import sequelize from '../config/db.js'; 

// Import models
import User from './user.js';
import Expense from './expense.js';
import FinancialReport from './financial_reports.js';
import FinancialMetric from './financial_metric.js';
import UserMetrics from './user_metrics.js';
import MetricInsights from './metric_insights.js';
import ReportType from './report_type.js'; 

// Define relationships
User.hasMany(Expense, {
    foreignKey: 'user_id',
    sourceKey: 'id',
});

Expense.belongsTo(User, {
    foreignKey: 'user_id',
    targetKey: 'id',
});

User.hasMany(FinancialReport, {
    foreignKey: 'user_id',
    sourceKey: 'id',
});

FinancialReport.belongsTo(User, {
    foreignKey: 'user_id',
    targetKey: 'id',
});

User.hasMany(FinancialMetric, {
    foreignKey: 'user_id',
    sourceKey: 'id',
});

FinancialMetric.belongsTo(User, {
    foreignKey: 'user_id',
    targetKey: 'id',
});

FinancialMetric.hasMany(MetricInsights, {
    foreignKey: 'financial_metric_id',
    sourceKey: 'id',
});

MetricInsights.belongsTo(FinancialMetric, {
    foreignKey: 'financial_metric_id',
    targetKey: 'id',
});

FinancialReport.belongsTo(ReportType, {
    foreignKey: 'report_type_id',
    targetKey: 'report_id',
});

ReportType.hasMany(FinancialReport, {
    foreignKey: 'report_type_id',
    sourceKey: 'report_id',
});

// UserMetrics relationships
User.hasMany(UserMetrics, {
    foreignKey: 'user_id',
    sourceKey: 'id',
});

UserMetrics.belongsTo(User, {
    foreignKey: 'user_id',
    targetKey: 'id',
});

FinancialMetric.hasMany(UserMetrics, {
    foreignKey: 'metric_id',
    sourceKey: 'id',
});

UserMetrics.belongsTo(FinancialMetric, {
    foreignKey: 'metric_id',
    targetKey: 'id',
});

// Export models
export { User, Expense, FinancialReport, FinancialMetric, UserMetrics, MetricInsights, ReportType };
