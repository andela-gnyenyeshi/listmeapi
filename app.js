import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import db from './config/config';
import routes from './src/routes/routes';
dotenv.config();

const app = express();
const port = process.env.PORT || 4646;

mongoose.Promise = Promise;
mongoose
  .connect(db.path, {
    keepAlive: true,
    reconnectTries: Number.MAX_VALUE,
    useMongoClient: true
  })
  .then(() => {
    console.log('Database connection established');
  })
  .catch(err => {
    console.log('Error connecting', err);
  });

app.listen(port, err => {
  if (err) console.log('Error connecting');
  console.log('connected on port ' + port);
});

routes(app);
