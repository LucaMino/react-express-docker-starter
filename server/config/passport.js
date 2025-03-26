import passport from "passport";
import { Strategy, ExtractJwt } from "passport-google-oauth20";
import User from "../models/user.js";

passport.use
(
    new Strategy
    (
        {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),   //
            secretOrKey: process.env.JWT_SECRET,
        },
        async(payload, done) =>
        {
            try
            {
                // find user by id (findByPk)
                const user = await User.findByPk(payload.userId);
                // if found
                if(user)
                {
                    return done(null, user);
                }
                return done(null, false, { message: 'User not found' });
            }
            catch (error)
            {
                return done(error, false);
            }
        }
    )
)

export default passport;