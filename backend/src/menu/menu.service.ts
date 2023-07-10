import { InjectModel } from '@nestjs/sequelize';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { FilesService } from '../files/files.service';
import { MenuCategoriesModel } from './models/menu-categories.model';
import { CreateMenuCategoryDto, CreateMenuDishDto, RemoveMenuCategoryDto, RemoveMenuDishDto, UpdateMenuCategoryDto, UpdateMenuDishDto } from './dto/menu-categories.dto';

import { transliterate } from '../core/text-utils/translit';
import { MenuDishesModel } from './models/menu-dishes.model';
import { async } from 'rxjs';

@Injectable()
export class MenuService {
    constructor(
        @InjectModel(MenuDishesModel) readonly menuDishesRepository: typeof MenuDishesModel,
        @InjectModel(MenuCategoriesModel) readonly menuCategoriesRepository: typeof MenuCategoriesModel,
        readonly filesService: FilesService
    ) {}

    public categories = {
        get: async () => {
            const categories = await this.menuCategoriesRepository.findAll({where: { isHidden: false } })
            if(!categories) throw new HttpException('Произошла ошибка сервера', HttpStatus.INTERNAL_SERVER_ERROR)
            return categories
        },
        getWithHidden: async () => {
            const categories = await this.menuCategoriesRepository.findAll()
            if(!categories) throw new HttpException('Произошла ошибка сервера', HttpStatus.INTERNAL_SERVER_ERROR)
            return categories
        },
        create: async (dto: CreateMenuCategoryDto, file: Express.Multer.File) => {
            await this.checkCategoryDuplicate(dto.name)
            if(!file) throw new HttpException('Фото категории обязательно', HttpStatus.BAD_REQUEST)
            
            const searchLink = transliterate(dto.name).toLowerCase()
            const thumbUrl = await this.filesService.savePhoto(file)
            const newCategoryData: CreateMenuCategoryDto = { 
                ...dto, 
                searchLink, 
                thumbUrl,
                isHidden: true
            }
            
            const newCategory = await this.menuCategoriesRepository.create(newCategoryData)

            if(!newCategory) throw new HttpException('Произошла ошибка сервера', HttpStatus.INTERNAL_SERVER_ERROR)
            if(newCategory) throw new HttpException(`Категория "${newCategory.name}" успешно создана`, HttpStatus.OK)
        },
        update: async (dto: UpdateMenuCategoryDto, file: Express.Multer.File) => {
            const menuCategory = await this.throwIfCategoryByIdNotFound(dto.id)
                        
            if(!file) {
                const searchLink = dto.name ? transliterate(dto.name).toLowerCase() : menuCategory.searchLink
                const updateData: UpdateMenuCategoryDto = {
                    ...dto,
                    isHidden: dto.isHidden != null ? dto.isHidden : menuCategory.isHidden,
                    searchLink
                } 

                const updateStatus = await menuCategory.update(updateData)

                if(!updateStatus) throw new HttpException('Произошла ошибка сервера', HttpStatus.INTERNAL_SERVER_ERROR)
                if(updateStatus) throw new HttpException(`Категория "${menuCategory.name}" успешно обновлена`, HttpStatus.OK)
            }

            if(file) {
                await this.filesService.removeFile(menuCategory.thumbUrl)

                const thumbUrl = await this.filesService.savePhoto(file)
                const searchLink = dto.name ? transliterate(dto.name).toLowerCase() : menuCategory.searchLink
                const updateData: UpdateMenuCategoryDto = {
                    ...dto,
                    isHidden: dto.isHidden != null ? dto.isHidden : menuCategory.isHidden,
                    searchLink,
                    thumbUrl
                } 

                const updateStatus = await menuCategory.update(updateData)

                if(!updateStatus) throw new HttpException('Произошла ошибка сервера', HttpStatus.INTERNAL_SERVER_ERROR)
                if(updateStatus) throw new HttpException(`Категория "${menuCategory.name}" успешно обновлена`, HttpStatus.OK)
            } 
        },
        remove: async (dto: RemoveMenuCategoryDto) => {
            const menuCategory = await this.throwIfCategoryByIdNotFound(dto.id)
            await this.filesService.removeFile(menuCategory.thumbUrl)
            await menuCategory.destroy()
            
            throw new HttpException(`Категория "${menuCategory.name}" успешно удалена`, HttpStatus.OK)
        }
    }

    public dishes = {
        get: async () => {
            const dishes = await this.menuDishesRepository.findAll({where: { isHidden: false } })
            if(!dishes) throw new HttpException('Произошла ошибка сервера', HttpStatus.INTERNAL_SERVER_ERROR)
            return dishes
        },
        getWithHidden: async () => {
            const dishes = await this.menuDishesRepository.findAll()
            if(!dishes) throw new HttpException('Произошла ошибка сервера', HttpStatus.INTERNAL_SERVER_ERROR)
            return dishes
        },
        getByCategory: async (categorySearchLink: string) => {
            const dishesByCategory = await this.menuDishesRepository.findAll({
                where: {
                    categorySearchLink,
                    isHidden: false
                }
            })
            if(!dishesByCategory) throw new HttpException('Не найдены блюда в категории', HttpStatus.NOT_FOUND)
            const categoryName = (await this.menuCategoriesRepository.findOne({where: {searchLink: categorySearchLink}})).name
            const data = {
                categoryItems: dishesByCategory,
                categoryName 
            }
            return data
        },
        create: async (dto: CreateMenuDishDto, file: Express.Multer.File) => {
            await this.checkDishDuplicate(dto.name)

            if(!file) throw new HttpException('Фото блюда обязательно', HttpStatus.BAD_REQUEST)
            if(!dto.price) throw new HttpException('Цена блюда обязательна', HttpStatus.BAD_REQUEST)
            if(!dto.composition) throw new HttpException('Состав блюда обязателен', HttpStatus.BAD_REQUEST)

            const category = await this.throwIfCategoryBySearchLinkNotFound(dto.categorySearchLink)
            const searchLink = transliterate(dto.name).toLowerCase()
            const thumbUrl = await this.filesService.savePhoto(file)
            const newDishData: CreateMenuDishDto = {
                ...dto, 
                searchLink, 
                thumbUrl, 
                categorySearchLink: category.searchLink,
                isHidden: true
            }
            const newDish = await this.menuDishesRepository.create(newDishData)
            
            if(!newDish) throw new HttpException('Произошла ошибка сервера', HttpStatus.INTERNAL_SERVER_ERROR)
            if(newDish) throw new HttpException(`Блюдо "${newDish.name}" успешно создано`, HttpStatus.OK)

            return newDish
        },
        update: async (dto: UpdateMenuDishDto, file: Express.Multer.File) => {
            const dish = await this.throwIfDishByIdNotFound(dto.id)

            if(dto.categorySearchLink && dto.categorySearchLink !== dish.categorySearchLink) 
                await this.throwIfCategoryBySearchLinkNotFound(dto.categorySearchLink)

            if(!file) {
                const searchLink = dto.name ? transliterate(dto.name).toLowerCase() : dish.searchLink
                const updateData: UpdateMenuDishDto = {
                    ...dto,
                    isHidden: dto.isHidden != null ? dto.isHidden : dish.isHidden,
                    searchLink
                } 

                const updateStatus = await dish.update(updateData)

                if(!updateStatus) throw new HttpException('Произошла ошибка сервера', HttpStatus.INTERNAL_SERVER_ERROR)
                if(updateStatus) throw new HttpException(`Категория "${dish.name}" успешно обновлена`, HttpStatus.OK)
            }

            if(file) {
                await this.filesService.removeFile(dish.thumbUrl)

                const searchLink = dto.name ? transliterate(dto.name).toLowerCase() : dish.searchLink
                const thumbUrl = await this.filesService.savePhoto(file)
                
                const updateData: UpdateMenuDishDto = {
                    ...dto,
                    searchLink,
                    isHidden: dto.isHidden != null ? dto.isHidden : dish.isHidden,
                    thumbUrl
                } 

                const updateStatus = await dish.update(updateData)

                if(!updateStatus) throw new HttpException('Произошла ошибка сервера', HttpStatus.INTERNAL_SERVER_ERROR)
                if(updateStatus) throw new HttpException(`Категория "${dish.name}" успешно обновлена`, HttpStatus.OK)
            } 
        },
        remove: async (dto: RemoveMenuDishDto) => {
            const dish = await this.throwIfDishByIdNotFound(dto.id)
            await this.filesService.removeFile(dish.thumbUrl)
            await dish.destroy()
            
            throw new HttpException(`Блюдо "${dish.name}" успешно удалено`, HttpStatus.OK)
        }
    }

    private async checkDishDuplicate(name: string) {
        const isDuplicate = await this.menuDishesRepository.findOne({ where: {name}})
        if(isDuplicate) throw new HttpException('Блюдо уже существует', HttpStatus.BAD_REQUEST)
    }

    private async throwIfDishByIdNotFound(id: number) {
        const dish = await this.menuDishesRepository.findOne({
            where: {id}
        })
        if(!dish) throw new HttpException('Блюдо не найдено', HttpStatus.NOT_FOUND)
        return dish
    }

    private async checkCategoryDuplicate(name: string) {
        const isDuplicate = await this.menuCategoriesRepository.findOne({ where: {name}})
        if(isDuplicate) throw new HttpException('Категория уже существует', HttpStatus.BAD_REQUEST)
    }

    private async throwIfCategoryByIdNotFound(id: number) {
        const menuCategory = await this.menuCategoriesRepository.findOne({
            where: {id}
        })
        if(!menuCategory) throw new HttpException('Категория не найдена', HttpStatus.NOT_FOUND)
        return menuCategory
    }

    private async throwIfCategoryBySearchLinkNotFound(searchLink: string) {
        const menuCategory = await this.menuCategoriesRepository.findOne({
            where: {searchLink}
        })
        if(!menuCategory) throw new HttpException('Категория не найдена', HttpStatus.NOT_FOUND)
        return menuCategory
    }
}
