import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type GlossaryDocument = HydratedDocument<Glossary>;

@Schema({ collection: 'glossary' })
export class Glossary {
  @Prop()
  name: string;

  @Prop()
  slug: string;

  @Prop()
  definition: string;
}

export const GlossarySchema = SchemaFactory.createForClass(Glossary);
