import request from 'supertest';
import App from '@/app';
import ShortLinkRoute from '@routes/shortLink.route';
import ShortLinkModel from '@models/shortLink.model';
import { getRandomUniqueString } from '@utils/util';
import mongoose from 'mongoose';

describe('Testing Get And Post APIS', () => {
  it('GET / => get url by code', async () => {
    const app = new App([new ShortLinkRoute()]);

    const randomCode = await getRandomUniqueString();

    await ShortLinkModel.create({ url: 'www.google.com', code: randomCode });

    const response = await request(app.getServer()).get(`/short-link/${randomCode}`).expect('Content-Type', /json/).expect(200);

    await ShortLinkModel.deleteOne({ code: randomCode });

    return expect(response.body.data).toEqual(
      expect.objectContaining({
        url: 'www.google.com',
      }),
    );
  });

  it('POST /short-link => create new short link', async () => {
    const app = new App([new ShortLinkRoute()]);
    const response: any = await request(app.getServer())
      .post('/short-link')
      .send({
        url: 'www.google.com',
      })
      .expect('Content-Type', /json/)
      .expect(201);

    return expect(response.body.data).toEqual(
      expect.objectContaining({
        url: 'www.google.com',
        code: expect.any(String),
        visits: expect.any(Number),
        _id: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
        __v: expect.any(Number),
      }),
    );
  });
});
