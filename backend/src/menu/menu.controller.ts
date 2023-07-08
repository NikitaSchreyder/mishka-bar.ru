import { FileInterceptor } from '@nestjs/platform-express'
import { Body, Controller, Delete, Get, Put, Query, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common'

import { MenuService } from './menu.service'
import { CreateMenuCategoryDto, CreateMenuDishDto, RemoveMenuCategoryDto, RemoveMenuDishDto, UpdateMenuCategoryDto, UpdateMenuDishDto } from './dto/menu-categories.dto'
import { AdminGuard } from '../admin/guard/admin.guard'

@Controller('menu')
export class MenuController {
    constructor(
        private readonly menuService: MenuService
    ) {}

    /**
     * 
     *  MENU ROUTES
     */

    @Get('/categories')
    getCategories() {
        return this.menuService.categories.getAll()
    }

    @Put('/categories/create')
    @UseGuards(new AdminGuard())
    @UseInterceptors(FileInterceptor('photo'))
    createCatogry(
        @Body() dto: CreateMenuCategoryDto,
        @UploadedFile() file: Express.Multer.File
    ) {
        return this.menuService.categories.create(dto, file)
    }

    @Put('/categories/update')
    @UseGuards(new AdminGuard())
    @UseInterceptors(FileInterceptor('photo'))
    updateCategory(
        @Body() dto: UpdateMenuCategoryDto,
        @UploadedFile() file: Express.Multer.File
    ) {
        return this.menuService.categories.update(dto, file)
    }

    @Delete('/categories/remove')
    @UseGuards(new AdminGuard())
    removeCategory(
        @Query('id') id: number
    ) {
        const dto: RemoveMenuCategoryDto = {id}
        return this.menuService.categories.remove(dto)
    }


    /**
     * 
     *  DISHES ROUTES
     */

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
    @UseGuards(new AdminGuard())
    @UseInterceptors(FileInterceptor('photo'))
    createDish(
        @Body() dto: CreateMenuDishDto,
        @UploadedFile() file: Express.Multer.File
    ) {
        return this.menuService.dishes.create(dto, file)
    }

    @Put('/dishes/update')
    @UseInterceptors(FileInterceptor('photo'))
    @UseGuards(new AdminGuard())
    updateDish(
        @Body() dto: UpdateMenuDishDto,
        @UploadedFile() file: Express.Multer.File
    ) {
        return this.menuService.dishes.update(dto, file)
    }

    @Delete('/dishes/remove')
    @UseGuards(new AdminGuard())
    async removeDish(
        @Query('id') id: number
    ) {
        const dto: RemoveMenuDishDto = {id}
        return this.menuService.dishes.remove(dto)
    }
}
