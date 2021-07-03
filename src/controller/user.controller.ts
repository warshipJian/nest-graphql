import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { Response } from 'express';

@Controller()
export class UserController {
  constructor(private readonly appService: UserService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/user/list')
  userList(@Res() res: Response) {
    const a = 'uk';
    res.status(HttpStatus.OK).json([a]);
  }
}
