import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
//import { UsersService } from '../users/users.service';

@Injectable()
export default class IsAdmin implements NestMiddleware {
  constructor(/* private readonly usersService: UsersService */) {
    /* aca se requiere el servicio de usuarios para buscar el usuario logueado y verificar su rol */
  }
  async use(req: Request, res: Response, next: NextFunction) {
    try {
      if (req.body.role === 'admin') return next();
      const error = new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
      return next(error)
    } catch (error) {
      throw new HttpException(error, error.message);
    }
  }
}
