import * as fs from 'fs'
import * as uuid from 'uuid'
import * as path from 'path'
import { Injectable } from '@nestjs/common';

@Injectable()
export class FilesService {
  public async savePhoto(file: Express.Multer.File): Promise<string> {
    const fileName = uuid.v4() + '.png'
    const filePath = path.resolve(__dirname, '..', '..', 'public')

    if(!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, {recursive: true})
    }
    
    fs.writeFileSync(path.join(filePath, fileName), file.buffer)
    return `http://public.mishkabar.localhost/${fileName}`
  }

  public async removeFile(filename: string) {
    const clearFilename = filename.split('/')
    const filePath = path.resolve(__dirname, '..', '..', 'public', clearFilename[clearFilename.length - 1])
    fs.unlink(filePath, () => {})
  }
}
