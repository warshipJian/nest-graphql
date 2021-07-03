import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  const port = 3000;
  await app.listen(port);
  console.log(`Application is running on: 127.0.0.1:${port}`);
}
bootstrap();
