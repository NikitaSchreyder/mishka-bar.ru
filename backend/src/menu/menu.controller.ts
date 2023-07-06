import { FileInterceptor } from '@nestjs/platform-express'
import { Body, Controller, Delete, Get, Param, Put, Query, UploadedFile, UseInterceptors } from '@nestjs/common'

import { MenuService } from './menu.service'
import { CreateMenuCategoryDto, CreateMenuDishDto, RemoveMenuCategoryDto, UpdateMenuCategoryDto } from './dto/menu-categories.dto'

@Controller('menu')
export class MenuController {
    constructor(
        private readonly menuService: MenuService
    ) {}

    @Get('/categories')
    getCategories() {
        return this.menuService.categories.getAll()
    }

    @Put('/categories/create')
    @UseInterceptors(FileInterceptor('photo'))
    createCatogry(
        @Body() dto: CreateMenuCategoryDto,
        @UploadedFile() file: Express.Multer.File
    ) {
        return this.menuService.categories.create(dto, file)
    }

    @Put('/categories/update')
    @UseInterceptors(FileInterceptor('photo'))
    updateCategory(
        @Body() dto: UpdateMenuCategoryDto,
        @UploadedFile() file: Express.Multer.File
    ) {
        return this.menuService.categories.update(dto, file)
    }

    @Delete('/categories/remove')
    removeCategory(
        @Body() dto: RemoveMenuCategoryDto
    ) {
        return this.menuService.categories.remove(dto)
    }

    @Get('/dishes')
    getDishes() {
        return this.menuService.dishes.get()
    }

    @Get('/dishes/by-category')
    getDishesByCategory(
        @Query('categorySearchLink') categorySearchLink: string
    ) {
        return this.menuService.dishes.getByCategory(categorySearchLink)
    }

    @Put('/dishes/create')
    @UseInterceptors(FileInterceptor('photo'))
    createDish(
        @Body() dto: CreateMenuDishDto,
        @UploadedFile() file: Express.Multer.File
    ) {
        return this.menuService.dishes.create(dto, file)
    }
}
