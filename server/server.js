import express from 'express';
import cors from 'cors';

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