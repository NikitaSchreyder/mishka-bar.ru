import { Module } from '@nestjs/common';
import { AboutController } from './about.controller';
import { AboutService } from './about.service';
import { AboutModel } from './models/about.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { FilesModule } from '../files/files.module';

@Module({
  imports: [
    SequelizeModule.forFeature([
      AboutModel
    ]),
    FilesModule
  ],
  controllers: [AboutController],
  providers: [AboutService]
})
export class AboutModule {}
