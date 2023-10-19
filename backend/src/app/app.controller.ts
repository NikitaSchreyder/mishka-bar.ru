import { Body, Controller, Get, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(
    private readonly appSevice: AppService
  ){}

  @Get('/is-dev')
  async getDevStatus() {
    return this.appSevice.getDevStatus()
  }

  @Put('/is-dev/change')
  async changeDevStatus(
    @Body() body: any
  ) {
    const { status } = body    
    return this.appSevice.changeDevStatus(status)
  }
}
