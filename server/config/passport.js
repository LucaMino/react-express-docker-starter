import passport from "passport";
import { Strategy as LocalStrategy } from 'passport-local';
import User from "../models/user.js";

// set up local authentication strategy for passport using email and password
passport.use
(
    new LocalStrategy
    (
        {
            usernameField: 'email',
            passwordField: 'password',
        },
        async(email, password, done) =>
        {
            try
            {
                // find user by email
                const user = await User.findOne({ where: { email } });
                // if not found
                if(!user)
                {
                    return done(null, false, { message: 'Invalid email or password' });
                }
                // compare password
                const isMatch = await user.comparePassword(password);
                // if not match
                if(!isMatch)
                {
                    return done(null, false, { message: 'Invalid email or password' });
                }
                // if match
                return done(null, user);
            }
            catch (error) {
                return done(error);
            }
        }
    )
)

// save only id on session (override default serializeUser)
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// retrieves complete user data using session ID, making it available through req.user (overrides default deserializeUser)
passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findByPk(id);
        done(null, user);
    } catch (error) {
        done(error, null);
    }
});

export default passport;