

import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const UserMetrics = sequelize.define('UserMetrics', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id',
    },
  },
  metric_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'FinancialMetrics',
      key: 'id',
    },
  },
  start_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  end_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  tableName: 'user_metrics',
  timestamps: false,
});

export default UserMetrics;
