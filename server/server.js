import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

console.log(process.env.SERVER_PORT)

const app = express();

const PORT = process.env.PORT || 8080;

const corsOptions = {
    origin: `http://localhost:${PORT}`
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});