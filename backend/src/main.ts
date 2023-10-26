import { join } from 'path';
import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express';

import { AppModule } from './app/app.module'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  app.enableCors()
  app.setGlobalPrefix('api')
  app.useStaticAssets(join(__dirname, '..', 'public'));
  await app.listen(3007)
}
bootstrap()
