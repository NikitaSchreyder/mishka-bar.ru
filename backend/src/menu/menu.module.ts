import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'

import { MenuService } from './menu.service'
import { MenuController } from './menu.controller'
import { FilesModule } from '../files/files.module'
import { MenuCategoriesModel } from './models/menu-categories.model'

@Module({
  imports: [
    SequelizeModule.forFeature([
      MenuCategoriesModel
    ]),
    FilesModule
  ],
  providers: [MenuService],
  controllers: [MenuController]
})
export class MenuModule {}
