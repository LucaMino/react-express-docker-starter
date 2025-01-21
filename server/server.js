import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './config/database.js';

// load env vars
dotenv.config();

// create express app
const app = express();

const CLIENT_PORT = process.env.CLIENT_PORT || 3000;
const SERVER_PORT = process.env.SERVER_PORT || 8080;

const corsOptions = {
    origin: `http://localhost:${CLIENT_PORT}`,
    credentials: true
};

db.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

app.use(cors(corsOptions));

app.get("/api/get-data", (req, res) => {
  res.json([1, 100, 43]);
});

app.listen(SERVER_PORT, () => {
    console.log(`Server is running on port ${SERVER_PORT}.`);
});