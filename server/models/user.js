import { DataTypes } from 'sequelize';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
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
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
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

// hash password
User.hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

// compare password
User.prototype.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

// generate JWT token
User.prototype.generateAuthToken = function (refreshToken = false) {
    const expiresIn = refreshToken ? '7d' : '1h';
    const token = jwt.sign({ id: this.id }, process.env.JWT_SECRET, { expiresIn: expiresIn });
    return token;
};

export default User;