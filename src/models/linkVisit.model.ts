import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose';

@modelOptions({ schemaOptions: { collection: 'link_visit', timestamps: true } })
class LinkVisit {
  @prop({ type: String, required: true })
  public link_id: string;

  @prop({ type: String })
  public referrer!: string;

  @prop({ type: String })
  public ip!: string;

  public created_at?: Date;

  public updated_at?: Date;
}

const LinkVisitModel = getModelForClass(LinkVisit);

export default LinkVisitModel;
