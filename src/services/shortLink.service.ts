import { Request } from 'express';
import { ShortLinkDto } from '@/dtos/shortLink.dto';
import { HttpException } from '@/exceptions/HttpException';
import { ShortLink } from '@/interfaces/shortLink.interface';
import { Linkvisit } from '@/interfaces/linkVisit.interface';
import { getRandomUniqueString, isEmpty } from '@/utils/util';
import shortLinkModel from '@/models/shortLink.model';
import linkVisitModel from '@/models/linkVisit.model';

class shortLinkService {
  public async findLinkByCode(code: string, visitInfo: Linkvisit): Promise<ShortLink> {
    if (isEmpty(code)) throw new HttpException(400, 'code is empty.');

    const findLink: ShortLink = await shortLinkModel.findOne({ code });

    if (!findLink) throw new HttpException(409, "Short link doesn't exist.");

    // This could be done asynchronously using serverlesss.
    await shortLinkModel.updateOne({ _id: findLink._id }, { $inc: { visits: 1 } });
    await linkVisitModel.create({ ...visitInfo, link_id: findLink._id });

    return findLink;
  }

  public async createShortLink(urlData: ShortLinkDto): Promise<ShortLink> {
    if (isEmpty(urlData)) throw new HttpException(400, 'urlData is empty.');

    const randomCode = await getRandomUniqueString();

    const createShortLinkData: ShortLink = await shortLinkModel.create({ ...urlData, code: randomCode });

    return createShortLinkData;
  }
}

export default shortLinkService;
