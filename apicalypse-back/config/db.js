import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from a .env file

import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false, 
});

export default sequelize;

