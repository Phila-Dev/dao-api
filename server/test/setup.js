import 'regenerator-runtime/runtime'
import mongoose from 'mongoose';
import seedDb from './seed';

jest.setTimeout(10000)

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URL, {
    autoReconnect: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 1000,
    poolSize: 10,
    useCreateIndex: true,
    useNewUrlParser: true,
  });
  mongoose.Promise = Promise;
});

beforeEach(async () => await seedDb());

afterAll(async () => {
  await mongoose.connection.close();
});