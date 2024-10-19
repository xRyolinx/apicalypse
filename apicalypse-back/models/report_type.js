import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const ReportType = sequelize.define('ReportType', {
  report_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  report_type: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'Type of the report (e.g., income statement, cash flow)',
  },
}, {
  tableName: 'report_types',
  timestamps: false,
});

export default ReportType;
