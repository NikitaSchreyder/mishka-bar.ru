import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'

import { MenuService } from './menu.service'
import { MenuController } from './menu.controller'
import { FilesModule } from '../files/files.module'

import { MenuDishesModel } from './models/menu-dishes.model'
import { MenuCategoriesModel } from './models/menu-categories.model'

@Module({
  imports: [
    SequelizeModule.forFeature([
      MenuDishesModel,
      MenuCategoriesModel
    ]),
    FilesModule
  ],
  providers: [MenuService],
  controllers: [MenuController]
})
export class MenuModule {}
