import express, { response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import colors from 'colors';
import mongoose from 'mongoose';

// models
import Joke from './models/JokeModel.js';

// starters
dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Middlewares
app.use(cors());
app.use(express.json());

// Connecting DB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((response) => {
    console.log(`Connected to MongoDB`.blue.underline.bold);
    // Starting server
    app.listen(PORT, () =>
      console.log(`Server is running on port ${PORT}...`.yellow.underline.bold)
    );
  });

// Routes
app.get('/', (req, res) => res.send('React egzam API is running...'));

// GET all jokes
app.get('/api/jokes', (req, res) =>
  res.send(Joke.find({}).then((data) => res.json(data)))
);

// GET get given amount of jokes
app.get('/api/jokes/amount/:numb', (req, res) => {
  let amount = +req.params.numb;
  Joke.find({})
    .then((data) => res.send(data.slice(0, amount)))
    .catch((err) => console.log(err));
});
// GET joke by category
app.get('/api/jokes/:category', (req, res) => {
  let reqCategory = req.params.category;
  Joke.find({ category: reqCategory })
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
});
// GET given amount of jokes by category
app.get('/api/jokes/:category/:amount', (req, res) => {
  let reqCategory = req.params.category;
  let amount = +req.params.amount;
  Joke.find({ category: reqCategory })
    .then((data) => res.send(data.slice(0, amount)))
    .catch((err) => console.log(err));
});
