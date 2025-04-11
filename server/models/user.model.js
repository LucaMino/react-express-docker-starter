import bcrypt from 'bcrypt';
import sequelize from '../config/database.js'
import { Model, DataTypes } from 'sequelize';

class User extends Model
{
    // Returns true if the given password matches the user's password
    async comparePassword(password)
    {
        return await bcrypt.compare(password, this.password);
    }

    // Hashes the given password and returns the hashed password
    async hashPassword(password)
    {
        const salt = await bcrypt.genSalt();
        return await bcrypt.hash(password, salt);
    }
}

User.init
(
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
        sequelize,                  // db connection
        modelName: 'User',          // model name
        tableName: 'users',         // table name
        timestamps: true,           // add createdAt and updatedAt
        paranoid: true,             // add deletedAt (soft delete)
        underscored: true,          // use snake_case for column names
        createdAt: 'created_at',    // custom column name
        updatedAt: 'updated_at',    // custom column name
    }
)

export default User;