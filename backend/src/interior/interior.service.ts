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
          src: 'http://trade-good.ru/public/img/hall/min/' + item,
          original: 'http://trade-good.ru/public/img/hall/' + item,
          width: 320,
          height: 213,
          caption: '',
          order: 0
        }
      }
    }).filter(item => item != undefined)
    const orderedImages = images.map(item => {
      const test = item.src.split('-')[1]
      const withoutDots = Number(test.split('.')[0])
      item.order = withoutDots
      return item
    })

    const sortedImages = orderedImages.sort((a, b) => a.order - b.order)

    return sortedImages
  }
}
