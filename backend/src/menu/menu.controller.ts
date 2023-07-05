import { FileInterceptor } from '@nestjs/platform-express'
import { Body, Controller, Delete, Get, Put, UploadedFile, UseInterceptors } from '@nestjs/common'

import { MenuService } from './menu.service'
import { CreateMenuCategoryDto, RemoveMenuCategoryDto, UpdateMenuCategoryDto } from './dto/menu-categories.dto'

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



































    // @Get('/category-items')
    // getCategoryItems(
    //     @Query('categorySearchLink') categorySearchLink: string
    // ) {
    //     return this.menuService.getCategoryItems(categorySearchLink)
    // }
}
