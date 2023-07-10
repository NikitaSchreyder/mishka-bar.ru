import { Body, Controller, Delete, Get, Put, Query, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { StocksService } from './stocks.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateStockDto, RemoveStockDto, UpdateStockDto } from './dto/stocks.dto';
import { AdminGuard } from '../admin/guard/admin.guard';

@Controller('stocks')
export class StocksController {
  constructor(
    private readonly stocksService: StocksService
  ){}

  @Get('')
  getStocks() {
    return this.stocksService.getStocks()
  }

  @Get('/all')
  getStocksWithHidden() {
    return this.stocksService.getStocksWithHidden()
  }

  @Put('/create')
  @UseGuards(new AdminGuard())
  @UseInterceptors(FileInterceptor('photo'))
  createStock(
    @Body() dto: CreateStockDto,
    @UploadedFile() file: Express.Multer.File
  ) {
    return this.stocksService.createStock(dto, file)
  }

  @Put('/update')
  @UseGuards(new AdminGuard())
  @UseInterceptors(FileInterceptor('photo'))
  updateStock(
    @Body() dto: UpdateStockDto,
    @UploadedFile() file: Express.Multer.File
  ) {
    return this.stocksService.updateStock(dto, file)
  }

  @Delete('/remove')
  @UseGuards(new AdminGuard())
  removeStock(
    @Query('id') id: number
  ) {
    const dto: RemoveStockDto = {id}
    return this.stocksService.remove(dto)
  }
}
