import { dbConnection } from '@/databases';
import mongoose from 'mongoose';
import { getRandomUniqueString, isDuplicateShortCode } from '@utils/util';
import ShortLinkModel from '@/models/shortLink.model';

describe('Testing utility functions', () => {
  beforeAll(async () => await mongoose.connect(dbConnection));
  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('Should return random string with given length', async () => {
    const data = await getRandomUniqueString(7);
    expect(data.length).toBe(7);
  });

  it('Should return true if the duplicate exists', async () => {
    const randomCode = await getRandomUniqueString();
    await ShortLinkModel.create({ url: 'www.google.com', code: randomCode });
    const checkIfDuplicate = await isDuplicateShortCode(randomCode);
    await ShortLinkModel.deleteOne({ code: randomCode });
    expect(checkIfDuplicate).toBe(true);
  });

  it('Should return false if the duplicate does not exists', async () => {
    const randomCode = await getRandomUniqueString();
    await ShortLinkModel.deleteOne({ code: randomCode });
    const checkIfDuplicate = await isDuplicateShortCode(randomCode);
    expect(checkIfDuplicate).toBe(false);
  });
});
