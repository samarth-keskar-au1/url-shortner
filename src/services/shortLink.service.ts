import { ShortLinkDto } from '@/dtos/shortLink.dto';
import { ShortLink } from '@/interfaces/shortLink.interface';

class shortLinkService {
  public async findLinkByCode(code: string): Promise<ShortLink> {
    return { _id: 'csaomcdbcbhd', code: 'codcdd', url: 'www.google.com' };
  }

  public async createShortLink(urlData: ShortLinkDto): Promise<ShortLink> {
    return { _id: 'csaomcdbcbhd', code: 'codcdd', url: 'www.google.com' };
  }
}

export default shortLinkService;
