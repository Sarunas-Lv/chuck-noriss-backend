import mongoose from 'mongoose';
const { Schema } = mongoose;

const jokeSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const Joke = mongoose.model('joke', jokeSchema);
export default Joke;
