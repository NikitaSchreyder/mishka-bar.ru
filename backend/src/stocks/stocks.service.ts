import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { StocksModel } from './models/stocks.model';
import { CreateStockDto, RemoveStockDto, UpdateStockDto } from './dto/stocks.dto';
import { FilesService } from '../files/files.service';
import { transliterate } from '../core/text-utils/translit';

@Injectable()
export class StocksService {
  constructor(
    @InjectModel(StocksModel) readonly stocksRepository: typeof StocksModel,
    readonly filesSefvice: FilesService
  ){}

  public async getStocks() {
    const stocks = await this.stocksRepository.findAll({where: {isHidden: false}})
    return stocks
  }

  public async getStocksWithHidden() {
    const stocks = await this.stocksRepository.findAll()
    return stocks
  }

  public async createStock(dto: CreateStockDto, file: Express.Multer.File) {
    if(!file) throw new HttpException('Фото обязательно', HttpStatus.BAD_REQUEST)
    if(!dto.name) throw new HttpException('Название обязателено', HttpStatus.BAD_REQUEST)
    if(!dto.description) throw new HttpException('Описание обязателено', HttpStatus.BAD_REQUEST)

    const thumbUrl = await this.filesSefvice.savePhoto(file)
    const newStockData: CreateStockDto = {...dto, thumbUrl, isHidden: true}
    const newStock = await this.stocksRepository.create(newStockData)
    
    if(!newStock) throw new HttpException('Произошла ошибка сервера', HttpStatus.INTERNAL_SERVER_ERROR)
    if(newStock) throw new HttpException(`Акция "${newStock.name}" успешно создана`, HttpStatus.OK)
  }

  public async updateStock(dto: UpdateStockDto, file: Express.Multer.File) {
    const stock = await this.throwIfStockByIdNotFound(dto.id)

    if(!file) {
      
      const updateStatus = await stock.update({
        ...dto,
        isHidden: dto.isHidden != null ? dto.isHidden : stock.isHidden,
      })

      if(!updateStatus) throw new HttpException('Произошла ошибка сервера', HttpStatus.INTERNAL_SERVER_ERROR)
      if(updateStatus) throw new HttpException(`Категория "${stock.name}" успешно обновлена`, HttpStatus.OK)
    }

    if(file) {
      const thumbUrl = await this.filesSefvice.savePhoto(file)
      const updateData = await stock.update({
        ...dto,
        isHidden: dto.isHidden != null ? dto.isHidden : stock.isHidden,
        thumbUrl
      })

      const updateStatus = await stock.update(updateData)

      if(!updateStatus) throw new HttpException('Произошла ошибка сервера', HttpStatus.INTERNAL_SERVER_ERROR)
      if(updateStatus) throw new HttpException(`Категория "${stock.name}" успешно обновлена`, HttpStatus.OK)
    } 
  }

  public async remove (dto: RemoveStockDto) {
    const dish = await this.throwIfStockByIdNotFound(dto.id)
    await dish.destroy()
    
    throw new HttpException(`Блюдо "${dish.name}" успешно удалено`, HttpStatus.OK)
  }

  private async throwIfStockByIdNotFound(id: number) {
    const dish = await this.stocksRepository.findOne({
        where: {id}
    })
    if(!dish) throw new HttpException('Акция не найдена', HttpStatus.NOT_FOUND)
    return dish
}
}
