import { HttpException, HttpStatus, Injectable, InternalServerErrorException } from '@nestjs/common';
import { AboutModel } from './models/about.model';
import { InjectModel } from '@nestjs/sequelize';
import { FilesService } from '../files/files.service';
import { UpdateAboutDto } from './dtos/about.dto';
import { transliterate } from '../core/text-utils/translit';
import { UpdateMenuCategoryDto } from '../menu/dto/menu-categories.dto';

@Injectable()
export class AboutService {
  constructor(
    @InjectModel(AboutModel) private readonly aboutRepository: typeof AboutModel,
    private readonly filesService: FilesService
  ) {}

  public async getAbout() {
    const data = await this.aboutRepository.findOne();
    return data
  }

  public async updateAbout(dto: UpdateAboutDto, file: Express.Multer.File) {
    const aboutData = await this.aboutRepository.findOne()

    if(!aboutData) {
      if(!file) {
        const updateStatus = this.aboutRepository.create(dto) 
  
        if(!updateStatus) throw new HttpException('Произошла ошибка сервера', HttpStatus.INTERNAL_SERVER_ERROR)
        if(updateStatus) throw new HttpException(`Описание обновлено`, HttpStatus.OK)
      }
  
      if(file) {
        const thumbUrl = await this.filesService.savePhoto(file)
        const updateData: UpdateAboutDto = {
          description: dto.description || '',
          thumbUrl
        } 
  
        const updateStatus = this.aboutRepository.create(updateData) 
  
        if(!updateStatus) throw new HttpException('Произошла ошибка сервера', HttpStatus.INTERNAL_SERVER_ERROR)
        if(updateStatus) throw new HttpException(`Описание обновлено`, HttpStatus.OK)
      } 
    }

    if(aboutData) {
      if(!file) {
        const updateStatus = aboutData.update({
          ...dto,
          thumbUrl: aboutData.thumbUrl
        }) 
  
        if(!updateStatus) throw new HttpException('Произошла ошибка сервера', HttpStatus.INTERNAL_SERVER_ERROR)
        if(updateStatus) throw new HttpException(`Описание обновлено`, HttpStatus.OK)
      }
  
      if(file) {
        if(aboutData.thumbUrl) await this.filesService.removeFile(aboutData.thumbUrl)
        
        const thumbUrl = await this.filesService.savePhoto(file)
        const updateData: UpdateAboutDto = {
          ...dto,
          thumbUrl
        } 
  
        const updateStatus = await aboutData.update(updateData)
  
        if(!updateStatus) throw new HttpException('Произошла ошибка сервера', HttpStatus.INTERNAL_SERVER_ERROR)
        if(updateStatus) throw new HttpException(`Описание обновлено`, HttpStatus.OK)
      } 
    }
  }

  public async removePhoto() {
    const aboutData = await this.aboutRepository.findOne()
    await this.filesService.removeFile(aboutData.thumbUrl)

    const remove = await aboutData.update({
      thumbUrl: ''
    })
    if(!remove) throw new InternalServerErrorException('Ошибка при удалении фото')
    throw new HttpException('Фото удалено', HttpStatus.OK)
  }
} 
