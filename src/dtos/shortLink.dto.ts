import { IsUrl, IsString, Length } from 'class-validator';

export class ShortLinkDto {
  @IsUrl()
  public url: string;
}

export class ShortCodeDto {
  @IsString()
  @Length(7, 7)
  public code: string;
}
