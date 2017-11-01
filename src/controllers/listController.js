import List from '../models/list';
import mongoose from 'mongoose';

export default {
  createList(req, res) {
    const data = { age: 23 };
    res.send(data);
  }
};
