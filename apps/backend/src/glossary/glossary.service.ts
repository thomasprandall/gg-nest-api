import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Glossary } from './schemas/glossary.schema';

@Injectable()
export class GlossaryService {
  constructor(
    @InjectModel(Glossary.name) private glossaryModel: Model<Glossary>,
  ) {}

  async findAll(): Promise<Glossary[]> {
    console.log('Get Glossary');
    return this.glossaryModel.find().exec();
  }

  // async findOne(): Promise<Glossary> {
  //   return this.glossaryModel.find().exec();
  // }
}
