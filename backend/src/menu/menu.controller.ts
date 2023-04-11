import { Controller, Get, Query } from '@nestjs/common'

import { MenuService } from './menu.service'

@Controller('menu')
export class MenuController {
    constructor(
        private readonly menuService: MenuService
    ) {}

    @Get('/categories')
    getCategories() {
        return this.menuService.getCategories()
    }

    @Get('/category-items')
    getCategoryItems(
        @Query('categorySearchLink') categorySearchLink: string
    ) {
        return this.menuService.getCategoryItems(categorySearchLink)
    }
}
