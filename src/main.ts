import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TimeOutInterceptor } from './common/interceptors/timeout.interceptor';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix( process.env.API_VERSION );
  app.useGlobalInterceptors( new TimeOutInterceptor() ); // Manejo de maximo tiempo de espera , 2min
  app.useGlobalPipes( new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      validateCustomDecorators: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      }
    })
  );
  app.enableCors();

  /**
   * * Swagger - OPEN API
   */
  const config = new DocumentBuilder()
    .setTitle('Documentation')
    .setDescription('Technical test')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen( process.env.PORT );
  /** to connect with backend in the same network, "dev mode" http://192.168.100.15:3000/ */
}
bootstrap();
