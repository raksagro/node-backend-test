import { Controller, Get, Post, Put } from '@overnightjs/core';
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
      res.send(this.serverError(error));
    }
  }

  @Post('')
  public async create(req: Request, res: Response): Promise<void> {
    try {
      const { body } = req;
      const response = await this.service.store(body);

      res.send(this.ok(response));
    } catch (error) {
      res.send(this.serverError(error));
    }
  }

  @Put('')
  public async update(req: Request, res: Response): Promise<void> {
    try {
      const { body } = req;
      const response = await this.service.update(body);

      res.send(this.ok(response));
    } catch (error) {
      res.send(this.serverError(error));
    }
  }
}
