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
import { AdminModel } from '../admin/models/admin.model'
import { AdminModule } from '../admin/admin.module'
import { StocksModule } from '../stocks/stocks.module'
import { StocksModel } from '../stocks/models/stocks.model'
import { AboutModule } from '../about/about.module'
import { AboutModel } from '../about/models/about.model'
import { AppModel } from './models/app.model'
import { AppController } from './app.controller';
import { AppService } from './app.service';

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
        AdminModel,
        StocksModel,
        AboutModel,
        
      ],
      autoLoadModels: true,
      // sync: { force: true }
    }),
    SequelizeModule.forFeature([
      AppModel
    ]),
    MenuModule,
    InteriorModule,
    FilesModule,
    AdminModule,
    StocksModule,
    AboutModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
