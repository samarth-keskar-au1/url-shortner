import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose';

@modelOptions({ schemaOptions: { collection: 'short_link', timestamps: true } })
class ShortLink {
  @prop({ type: String, required: true })
  public url: string;

  @prop({ type: String, required: true, unique: true })
  public code: string;

  public createdAt?: Date;

  public updatedAt?: Date;
}

const ShortLinkModel = getModelForClass(ShortLink);

export default ShortLinkModel;
