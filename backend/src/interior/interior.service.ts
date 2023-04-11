import * as fs from 'fs'
import { Injectable } from '@nestjs/common'

@Injectable()
export class InteriorService {
    public async getInteriorImages() {
        const files = []
        const folderPath = './public/img/interior'
        const returnedPath = '/public/img/interior'
        
        fs.readdir(folderPath, (err, files) => {
            console.log(err);
            fs.open(folderPath + '/' + files[0], (err, file) => {
                console.log(file);
                
            })
        })
    }
}
