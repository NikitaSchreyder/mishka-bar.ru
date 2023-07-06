import { Body, Controller, Post, Put } from '@nestjs/common';
import { AdminService } from './admin.service';

class AdminCreateDto  {
  readonly login: string
  readonly password: string
}

class AdminDto  {
  readonly login: string
  readonly password: string
}

class AdminTokenDto  {
  readonly token: string
}

@Controller('admin')
export class AdminController {
  constructor(
    private readonly adminService: AdminService
  ) {}

  @Put('/create')
  async adminCreate(@Body() dto: AdminDto) {
    const {login, password} = dto
    return this.adminService.create(login, password)    
  }

  @Post('/signin')
  async adminSignIn(@Body() dto: AdminDto) {
    const {login, password} = dto
    return this.adminService.signIn(login, password)    
  }

  @Post('/check-token')
  async adminCheckToken(@Body() dto: AdminTokenDto) {
    const {token} = dto
    return this.adminService.adminCheckToken(token)    
  }
}
