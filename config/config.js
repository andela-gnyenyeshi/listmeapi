import dotenv from 'dotenv';
dotenv.config();

const username = process.env.UNAME;
const password = process.env.PWORD;

export default {
  path: `mongodb://${username}:${password}@ds243805.mlab.com:43805/listme`
};
