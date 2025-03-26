import { check } from 'express-validator';
import User from '../models/user.js';

// login validation
export const loginValidation = [
    check('email', 'Invalid email').isEmail(),
    check('password', 'Password must be at least 6 characters').isLength({ min: 8 })
];

// register validation
export const registerValidation = [
    check('email', 'Invalid email').isEmail(),
    check('email').custom(async (email) => {
        const user = await User.findOne({ email });
        if(user)
        {
            throw new Error('Email already exists');
        }
    }),
    check('password', 'Password must be at least 6 characters').isLength({ min: 8 })
];