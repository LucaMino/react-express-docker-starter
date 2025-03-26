import passport from '../config/passport.js';
import User from '../models/user.js'
import { HOME_ROUTE } from '../config/constants.js';

export const login = async (req, res, next) => {
    passport.authenticate('local', { session: false }, async (err, user, info) => {
        if(err) return res.status(500).json({ message: 'Error during login' });

        if(!user) return res.status(401).json({ message: 'Invalid email or password' });
        // generate token
        const token = await user.generateAuthToken();
        // generate refresh token
        const refreshToken = await user.generateAuthToken(true);
        // send response
        res.status(200).json({
            message: 'Login successful',
            token: token,
            refreshToken: refreshToken,
            redirect: HOME_ROUTE,
        });
    })(req, res, next);
}

export const register = async (req, res) => {
    try {
        // get data
        const { email, password } = req.body;
        // save user
        const user = await User.create({
            name: 'default name',
            email,
            password: await User.hashPassword(password),
        });
        // send response
        res.status(200).json({ message: 'Utente registrato con successo', user: user });
    } catch (error) {
        res.status(500).json({ message: 'Error during registration: ', error: error.message });
    }
}