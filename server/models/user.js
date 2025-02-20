import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js'

const User = sequelize.define(
    'User',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,              // db connection
        modelName: 'User',      // model name
        tableName: 'users',     // table name
        timestamps: true,       // add createdAt and updatedAt
        paranoid: true          // add deletedAt (soft delete)
    }
);

export default User;