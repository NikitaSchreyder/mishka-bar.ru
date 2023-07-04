import { InjectModel } from '@nestjs/sequelize';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { FilesService } from '../files/files.service';
import { MenuCategoriesModel } from './models/menu-categories.model';
import { CreateMenuCategoryDto, RemoveMenuCategoryDto, UpdateMenuCategoryDto } from './dto/menu-categories.dto';

import { transliterate } from '../core/text-utils/translit';

@Injectable()
export class MenuService {
    constructor(
        @InjectModel(MenuCategoriesModel) 
        readonly menuCategoriesRepository: typeof MenuCategoriesModel,
        readonly filesSefvice: FilesService
    ) {}

    public categories = {
        get: async () => {
            const categories = await this.menuCategoriesRepository.findAll()
            if(!categories) throw new HttpException('Произошла ошибка сервера', HttpStatus.INTERNAL_SERVER_ERROR)
            return categories
        },
        create: async (dto: CreateMenuCategoryDto, file: Express.Multer.File) => {
            await this.checkCategoryDuplicate(dto.name)
            
            const searchLink = transliterate(dto.name).toLowerCase()
            const thumbUrl = await this.filesSefvice.savePhoto(file)
            const newCategoryData: CreateMenuCategoryDto = { ...dto, searchLink, thumbUrl }
            const newCategory = this.menuCategoriesRepository.create(newCategoryData)

            if(!newCategory) throw new HttpException('Произошла ошибка сервера', HttpStatus.INTERNAL_SERVER_ERROR)
            if(newCategory) throw new HttpException(`Категория "${(await newCategory).name}" успешно создана`, HttpStatus.OK)
        },
        update: async (dto: UpdateMenuCategoryDto, file: Express.Multer.File) => {
            const menuCategory = await this.throwIfCategoryNotFound(dto.id)
            
            if(!file) {
                const updateStatus = await menuCategory.update(dto)
                if(!updateStatus) throw new HttpException('Произошла ошибка сервера', HttpStatus.INTERNAL_SERVER_ERROR)
                if(updateStatus) throw new HttpException(`Категория "${menuCategory.name}" успешно обновлена`, HttpStatus.OK)
            }

            if(file) {
                const thumbUrl = await this.filesSefvice.savePhoto(file)
                const newCategoryData: UpdateMenuCategoryDto = { ...dto, thumbUrl }
                const updateStatus = await menuCategory.update(newCategoryData)
                if(!updateStatus) throw new HttpException('Произошла ошибка сервера', HttpStatus.INTERNAL_SERVER_ERROR)
                if(updateStatus) throw new HttpException(`Категория "${menuCategory.name}" успешно обновлена`, HttpStatus.OK)
            } 
        },
        remove: async (dto: RemoveMenuCategoryDto) => {
            const menuCategory = await this.throwIfCategoryNotFound(dto.id)
            await menuCategory.destroy()
            throw new HttpException(`Категория "${menuCategory.name}" успешно удалена`, HttpStatus.OK)
        }
    }

    private async checkCategoryDuplicate(name: string) {
        const isDuplicate = await this.menuCategoriesRepository.findOne({ where: {name}})
        if(isDuplicate) throw new HttpException('Категория уже существует', HttpStatus.BAD_REQUEST)
    }

    private async throwIfCategoryNotFound(id: number) {
        const menuCategory = await this.menuCategoriesRepository.findOne({
            where: {id}
        })
        if(!menuCategory) throw new HttpException('Категория не найдена', HttpStatus.NOT_FOUND)
        return menuCategory
    }




































    // public getCategories(): TMenuCategory[] {
    //     return menuCategories
    // }

    // public getCategoryItems(categorySearchLink: string) {
    //     const categoryItems = menuItems.filter(item => item.categorySearchLink === categorySearchLink)
    //     const categoryName = menuCategories.filter(item => item.searchLink === categorySearchLink)[0].name
    //     const data = {
    //         categoryItems,
    //         categoryName
    //     }
        
    //     return data
    // }
}
