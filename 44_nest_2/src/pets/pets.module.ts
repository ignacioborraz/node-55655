import { Module, RequestMethod } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsController } from './pets.controller';
import IsAdmin from 'src/middlewares/IsAdmin.min';
import { MiddlewareConsumer, NestModule } from '@nestjs/common';

@Module({
  controllers: [PetsController],
  providers: [PetsService],
})
export class PetsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(IsAdmin)
      .forRoutes({ path: 'pets', method: RequestMethod.POST });
  }
}
