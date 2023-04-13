import { Module } from '@nestjs/common';
import { InteriorService } from './interior.service';
import { InteriorController } from './interior.controller';

@Module({
  providers: [InteriorService],
  controllers: [InteriorController]
})
export class InteriorModule {}
