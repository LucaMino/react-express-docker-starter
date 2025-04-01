import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import passport from 'passport';
import db from './config/database.js';
import routes from './routes/routes.js';
import sessionMiddleware from './config/session.js';

// load env vars
dotenv.config();

// create express app
const app = express();

// set client and server port with fallback
const CLIENT_PORT = process.env.CLIENT_PORT || 3000;
const SERVER_PORT = process.env.SERVER_PORT || 8080;

// set cors options
const corsOptions = {
    origin: `http://localhost:${CLIENT_PORT}`,
    credentials: true
};

// database authentication
db.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

// configure session
app.use(sessionMiddleware);
// initialize passport and session
app.use(passport.initialize());
app.use(passport.session());
// enable cors
app.use(cors(corsOptions));
// set express to parse json body (req.body)
app.use(express.json());
// set routes
app.use(routes);

// start the server and listen on specific port
app.listen(SERVER_PORT, () => {
    console.log(`Server is running on port ${SERVER_PORT}.`);
});