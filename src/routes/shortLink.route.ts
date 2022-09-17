import { Router } from 'express';
import ShortLinkController from '@/controllers/shortLink.controller';
import { ShortLinkDto, ShortCodeDto } from '@/dtos/shortLink.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class ShortLinkRoute implements Routes {
  public path = '/short-link';
  public router = Router();
  public shortLinkController = new ShortLinkController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/:code`, validationMiddleware(ShortCodeDto, 'params'), this.shortLinkController.getLinkByCode);
    this.router.post(`${this.path}`, validationMiddleware(ShortLinkDto, 'body'), this.shortLinkController.createShortLink);
  }
}

export default ShortLinkRoute;
