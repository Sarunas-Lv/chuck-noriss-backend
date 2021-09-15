import mongoose from 'mongoose';
import Joke from './models/JokeModel.js';
import dotenv from 'dotenv';

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((response) => {
    let jokes = [
      {
        id: 1,
        value:
          'Chuck Norris doesn’t read books. He stares them down until he gets the information he wants.',
        category: 'education',
      },
      {
        id: 2,
        value: 'Time waits for no man. Unless that man is Chuck Norris.',
        category: 'education',
      },
      {
        id: 3,
        value:
          'In the Beginning there was nothing … then Chuck Norris roundhouse kicked nothing and told it to get a job.',
        category: 'theology',
      },
      {
        id: 4,
        value: 'When God said, “Let there be light!” Chuck said, “Say Please.”',
        category: 'theology',
      },
      {
        id: 5,
        value:
          'Chuck Norris once roundhouse kicked someone so hard that his foot broke the speed of light',
        category: 'education',
      },
      {
        id: 6,
        value: 'Chuck Norris can dribble a bowling ball.',
        category: 'sports',
      },
      {
        id: 7,
        value: 'Chuck Norris can do a wheelie on a unicycle.',
        category: 'sports',
      },
      {
        id: 8,
        value:
          'Once a cobra bit Chuck Norris’ leg. After five days of excruciating pain, the cobra died.',
        category: 'animals',
      },
      {
        id: 9,
        value: 'Chuck Norris can drown a fish...',
        category: 'animals',
      },
      {
        id: 10,
        value:
          'Chuck Norris once went skydiving, but promised never to do it again. One Grand Canyon is enough.',
        category: 'sports',
      },
    ];

    Joke.insertMany(jokes);

    console.log('Data sucessfully sent to MongoDB');
  });
