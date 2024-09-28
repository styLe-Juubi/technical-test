import { DynamicModule, forwardRef, Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Article, ArticleSchema } from './entities/article.schema';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      { name: Article.name, useFactory: () => ( ArticleSchema )},
    ]),
  ],
  controllers: [ArticleController],
  providers: [ArticleService, ConfigService],
  exports: [ArticleService],
})
export class ArticleModule {

  static init( env: ConfigService ): DynamicModule {
    console.log()
    const imports = [];
    return {
      module: ArticleModule,
      imports,
    };
  }
}
