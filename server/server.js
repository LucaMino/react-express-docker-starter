import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './config/database.js';
import routes from './routes/routes.js';

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

app.use(cors(corsOptions));
app.use(routes);

// start the server and listen on specific port
app.listen(SERVER_PORT, () => {
    console.log(`Server is running on port ${SERVER_PORT}.`);
});