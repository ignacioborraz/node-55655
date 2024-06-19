import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as morgan from "morgan"
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    const env = app.get(ConfigService)
    const PORT = env.get("PORT")
    app.use(morgan())
    app.use(cookieParser(env.get("SECRET")))
    app.setGlobalPrefix("api")
    await app.listen(PORT);
    console.log("server ready on port "+PORT)
  } catch(error){
    console.log(error)
  }
}
bootstrap();
