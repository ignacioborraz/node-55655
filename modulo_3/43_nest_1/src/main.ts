import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    const port = 4000
    await app.listen(port);
    console.log("server ready on port "+port)
  } catch(error){
    console.log(error)
  }
}
bootstrap();
