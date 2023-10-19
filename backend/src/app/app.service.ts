import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { AppModel } from './models/app.model';
import { async } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(AppModel) private readonly appRepository: typeof AppModel
  ) {}
  
  async getDevStatus() {
    return (await this.appRepository.findOne()).isDev
  }

  async changeDevStatus(status: boolean) {
    const currentStatus = await this.appRepository.findOne()
    if(currentStatus) {
      return await currentStatus.update({isDev: status})    
    }
    await this.appRepository.create({isDev: status})
  }
}
