import * as bcrypt from 'bcrypt'

import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { AdminModel } from './models/admin.model'
import { CreateAdminDto } from './dtos/admin.dto'


@Injectable()
export class AdminService {
  constructor(
    @InjectModel(AdminModel) readonly adminRepository: typeof AdminModel
  ){}

  public async create(login: string, password: string) {
    const hashPassword = await bcrypt.hash(password, 5)
    const admin: CreateAdminDto = {
      login,
      password: hashPassword
    }

    const result = await this.adminRepository.create(admin)
    return result
  }

  public async signIn(login: string, password: string) {
    const admin = await this.adminRepository.findOne({where: {login}})
    if(!admin) throw new HttpException('Неверный логин или пароль', HttpStatus.NOT_FOUND)
    return await this.comparePassword(password, admin.password)    
  }

  private async comparePassword(password: string, adminPassword: string) {
    const compareResult = await bcrypt.compare(password, adminPassword)
    if(compareResult) return 'nfbfdsjgbskdfjg35igtu3w45h9t3htfgjgh'
  }

  public async adminCheckToken(token: string) {
    if(token === "nfbfdsjgbskdfjg35igtu3w45h9t3htfgjgh") return true
    return false
  }
}
