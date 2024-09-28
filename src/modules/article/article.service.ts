import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PaginateModel } from 'mongoose';
import { Article } from './entities/article.schema';

import * as argon2 from "argon2";
import { v4 as uuid } from 'uuid';
import { GenericService } from 'src/common/providers/generic.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ArticleService extends GenericService {

  constructor(
    @InjectModel( Article.name ) readonly articleSchema: PaginateModel<Article>,
    private readonly configService: ConfigService,
  ) { 
    super( 
      configService.get( 'pagination' ), 
      'ArticleService',
      configService.get( 'db' ),
      articleSchema,
      undefined,
    )
  }

}
