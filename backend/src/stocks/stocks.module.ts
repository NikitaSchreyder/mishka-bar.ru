import { Module } from '@nestjs/common';
import { StocksController } from './stocks.controller';
import { StocksService } from './stocks.service';
import { StocksModel } from './models/stocks.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { FilesModule } from '../files/files.module';

@Module({
  imports: [
    SequelizeModule.forFeature([
      StocksModel
    ]),
    FilesModule
  ],
  controllers: [StocksController],
  providers: [StocksService]
})
export class StocksModule {}
