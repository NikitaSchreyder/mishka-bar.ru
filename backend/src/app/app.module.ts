import { Module } from '@nestjs/common'

import { BarModule } from '../bar/bar.module'
import { MenuModule } from '../menu/menu.module'
import { InteriorModule } from 'src/interior/interior.module'

@Module({
  imports: [BarModule, MenuModule, InteriorModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
