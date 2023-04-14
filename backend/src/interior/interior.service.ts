import { Injectable } from '@nestjs/common';
import { readdirSync } from 'fs';
import { extname, join } from 'path';

@Injectable()
export class InteriorService {
  public async getImages() {
    const path = '../../public/img/hall'
    const imagesNames = readdirSync(join(__dirname, path), { withFileTypes: false })
    const images = imagesNames.map(item => {
      if (extname(item) == ".jpg") {
        return {
          src: '/public/img/hall/min/' + item,
          original: '/public/img/hall/' + item,
          width: 320,
          height: 213,
          caption: ''
        }
      }
    }).filter(item => item != undefined)
    
    return images
  }
}
