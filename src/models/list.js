import mongoose from 'mongoose';

let Schema = mongoose.Schema;
const listSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  items: {
    type: Array
  }
});

export default mongoose.model('List', listSchema);
