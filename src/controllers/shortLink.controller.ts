import { NextFunction, Request, Response } from 'express';
import { ShortLinkDto } from '@dtos/shortLink.dto';
import { ShortLink } from '@/interfaces/shortLink.interface';
import shortLinkService from '@/services/shortLink.service';

class ShortLinkController {
  public shortLinkService = new shortLinkService();

  public getLinkByCode = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const code: string = req.params.code;
      const findOneUrlData: ShortLink = await this.shortLinkService.findLinkByCode(code, { referrer: req?.headers?.referer, ip: req?.ip });

      res.status(200).json({
        data: {
          url: findOneUrlData.url,
        },
        message: 'findOne',
      });
    } catch (error) {
      next(error);
    }
  };

  public createShortLink = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const urlData: ShortLinkDto = req.body;
      const createUrlData: ShortLink = await this.shortLinkService.createShortLink(urlData);

      res.status(201).json({ data: createUrlData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };
}

export default ShortLinkController;
