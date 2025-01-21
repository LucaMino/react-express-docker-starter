import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// load env vars
dotenv.config();

// create sequelize (ORM) instance
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql'
    }
);

export default sequelize;