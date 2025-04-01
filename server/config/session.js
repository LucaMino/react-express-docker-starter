import session from 'express-session';
import MySQLStore from 'express-mysql-session';
import dotenv from 'dotenv';

// load env vars
dotenv.config();

// initialize MySQLStore with session
const MySQLStoreInstance = MySQLStore(session);

const options = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
};

// create MySQL session store
const sessionStore = new MySQLStoreInstance(options);

// create session middleware
const sessionMiddleware = session({
    secret: process.env.JWT_SECRET,
    resave: false,                                      // prevents session from being saved if not modified
    saveUninitialized: false,                           // avoids creating session
    store: sessionStore,                                // defines the session store (MySQL in this case)
    cookie: {
        httpOnly: true,                                 // avoids client-side access to the cookie
        secure: process.env.APP_ENV === 'production',   // set to true if using HTTPS
        maxAge: 1000 * 60 * 60 * 24                     // 1 day
    }
});

export default sessionMiddleware;