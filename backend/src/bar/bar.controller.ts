import { Controller, Get, Query } from '@nestjs/common';
import { BarService } from './bar.service';

@Controller('bar')
export class BarController {
    constructor(
        private readonly barService: BarService
    ){}

    @Get('/categories')
    getCategories() {
        return this.barService.getCategories()
    }

    @Get('/category-items')
    getCategoryItems(
        @Query('categorySearchLink') categorySearchLink: string
    ) {
        return this.barService.getCategoryItems(categorySearchLink)
    }
}
