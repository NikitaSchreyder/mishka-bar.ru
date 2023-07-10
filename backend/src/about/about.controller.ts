import { Body, Controller, Get, Put, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { AdminGuard } from '../admin/guard/admin.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { UpdateAboutDto } from './dtos/about.dto';
import { AboutService } from './about.service';

@Controller('about')
export class AboutController {
  constructor(
    private readonly aboutService: AboutService
  ){}

  @Get('')
  getAbout() {
    return this.aboutService.getAbout()
  }

  @Put('')
  @UseGuards(new AdminGuard())
  @UseInterceptors(FileInterceptor('photo'))
  updateAbout(
    @Body() dto: UpdateAboutDto,
    @UploadedFile() file: Express.Multer.File
  ) {
    return this.aboutService.updateAbout(dto, file)
  }
}
