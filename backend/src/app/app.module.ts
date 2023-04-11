import { Module } from '@nestjs/common'

import { BarModule } from '../bar/bar.module'
import { MenuModule } from '../menu/menu.module'

@Module({
  imports: [BarModule, MenuModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
