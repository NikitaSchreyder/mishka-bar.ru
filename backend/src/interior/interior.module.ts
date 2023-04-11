import { Module } from '@nestjs/common';
import { InteriorController } from './interior.controller';
import { InteriorService } from './interior.service';

@Module({
  controllers: [InteriorController],
  providers: [InteriorService]
})
export class InteriorModule {}
