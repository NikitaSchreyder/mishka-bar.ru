import { join } from 'path'
import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'

import { BarModule } from '../bar/bar.module'
import { MenuModule } from '../menu/menu.module'

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', '/public'),
      serveRoot: '/public/'
    }),
    BarModule, 
    MenuModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
