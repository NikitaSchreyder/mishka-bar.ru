import { join } from 'path'
import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'

import { MenuModule } from '../menu/menu.module'
import { InteriorModule } from '../interior/interior.module'

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', '/public'),
      serveRoot: '/public/'
    }),
    MenuModule,
    InteriorModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
