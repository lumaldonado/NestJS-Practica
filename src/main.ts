import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //el 3000 hace referencia al puerto que estamos usando
  await app.listen(3000);
}
bootstrap();
