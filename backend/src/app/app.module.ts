import { join } from 'path'
import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'

import { MenuModule } from '../menu/menu.module'
import { InteriorModule } from '../interior/interior.module'
import { SequelizeModule } from '@nestjs/sequelize'
import { ConfigModule } from '@nestjs/config'
import { FilesModule } from '../files/files.module'
import { MenuCategoriesModel } from '../menu/models/menu-categories.model'
import { MenuDishesModel } from '../menu/models/menu-dishes.model'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env`
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', '/public'),
      serveRoot: '/public/'
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      models: [
        MenuDishesModel,
        MenuCategoriesModel,
      ],
      autoLoadModels: true,
      // sync: { force: true }
    }),
    MenuModule,
    InteriorModule,
    FilesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
