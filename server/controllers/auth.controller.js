import passport from '../config/passport.js';
import User from '../models/user.js'
import { HOME_ROUTE } from '../config/constants.js';

class AuthController
{
    login(req, res, next)
    {
        // passport use local strategy defined in passport.js
        // passport.authenticate generates middleware function, (req, res, next) -> call the function
        passport.authenticate('local', (err, user, info) => {
            //
        })(req, res, next);
    }

}

// Export an instance of the class
export default new AuthController();


export const login = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) return res.status(500).json({ message: 'Error during login' });

        if (!user) return res.status(401).json({ message: 'Invalid email or password' });

        req.login(user, (err) => {
            if (err) {
                console.error('Error saving session:', err); // Log dell'errore
                return res.status(500).json({ message: 'Error saving session' });
            }

            res.status(200).json({
                message: 'Login successful',
                user: user,
            });
        });
    })(req, res, next);
};



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