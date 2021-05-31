import {
  Controller,
  Get,
  ClassMiddleware,
  Middleware,
} from '@overnightjs/core';
import { Request, Response } from 'express';
import { UserService } from '../../application/services/user.service';
import { BaseController } from './base.controller';

@Controller('user')
export class UserController extends BaseController {
  constructor(private service: UserService) {
    super();
  }

  @Get('all')
  public async all(req: Request, res: Response): Promise<void> {
    try {
      const response = await this.service.all();

      res.send(this.ok(response));
    } catch (error) {
      console.log(error);
      res.send(this.serverError(error));
    }
  }
}
