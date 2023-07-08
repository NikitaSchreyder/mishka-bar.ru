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
    
    if(bcrypt.compare(password, admin.password)) {
      return "fggdfgserg654365ytvfgdsad23re423erwqr"
    }
  }

  public async adminCheckToken(token: string) {
    if(token === "fggdfgserg654365ytvfgdsad23re423erwqr") return true
    return false
  }
}
