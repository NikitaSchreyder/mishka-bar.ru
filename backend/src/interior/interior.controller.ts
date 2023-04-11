import { Controller, Get } from '@nestjs/common';
import { InteriorService } from './interior.service';

@Controller('interior')
export class InteriorController {
    constructor(
        private readonly interiorService: InteriorService
    ) {}

    @Get('')
    getInteriorImages() {
        return this.interiorService.getInteriorImages()
    }
}
