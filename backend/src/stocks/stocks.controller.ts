import { Body, Controller, Delete, Get, Put, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
import { StocksService } from './stocks.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateStockDto, RemoveStockDto, UpdateStockDto } from './dto/stocks.dto';

@Controller('stocks')
export class StocksController {
  constructor(
    private readonly stocksService: StocksService
  ){}

  @Get('')
  getStocks() {
    return this.stocksService.getStocks()
  }

  @Put('/create')
  @UseInterceptors(FileInterceptor('photo'))
  createStock(
    @Body() dto: CreateStockDto,
    @UploadedFile() file: Express.Multer.File
  ) {
    return this.stocksService.createStock(dto, file)
  }

  @Put('/update')
  @UseInterceptors(FileInterceptor('photo'))
  updateStock(
    @Body() dto: UpdateStockDto,
    @UploadedFile() file: Express.Multer.File
  ) {
    return this.stocksService.updateStock(dto, file)
  }

  @Delete('/remove')
  removeStock(
    @Query('id') id: number
  ) {
    const dto: RemoveStockDto = {id}
    return this.stocksService.remove(dto)
  }
}
