

import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import validator from 'validator';

const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: {
        msg: 'Must be a valid email address',
      },
    },
  },
  password_hash: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [8, 128],
        msg: 'Password must be at least 8 characters long',
      },
    },
  },
  role_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'Roles', // Name of the referenced model
      key: 'id', // Key in the referenced model
    },
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'users',
  timestamps: false,
});

export default User;
