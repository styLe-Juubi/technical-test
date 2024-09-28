import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';

import { join } from 'path';
import { CommonModule } from './common/common.module';
import { ArticleModule } from './modules/article/article.module';
import { EnvConfiguration } from './config/env.config';
import { JoiValidationSchema } from './config/joi-schema.validation';
import { DB_TYPES } from './common/enums/db.enum';

let modules = [
  ConfigModule.forRoot({
    isGlobal: true,
    load: [ EnvConfiguration ],
    validationSchema: JoiValidationSchema
  }),
  CommonModule,
  ArticleModule,
  // MongooseModule.forRoot( process.env.MONGODB ),
];
if ( process.env.DATABASE_SELECTED === DB_TYPES.mongo ) {
  modules.push( MongooseModule.forRoot( process.env.MONGODB ) );
}
@Module({
  imports: modules,
  controllers: [],
  providers: [],
})
export class AppModule {}