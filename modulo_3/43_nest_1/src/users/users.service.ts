import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  users: Array<User>;
  constructor() {
    this.users = [
      {
        _id: 'abc',
        email: 'igna@coder.com',
        password: 'hola1234',
        role: 1,
        avatar: 'igna.jpg',
      },
      {
        _id: 'abd',
        email: 'jp@coder.com',
        password: 'hola1234',
        role: 1,
        avatar: 'jp.jpg',
      },
    ];
  }
  create(createUserDto: CreateUserDto) {
    const data: User = {
      _id: 'abd' + Math.floor(Math.random() * 10000),
      email: createUserDto.email,
      password: createUserDto.password,
      role: createUserDto.role || 0,
      avatar: createUserDto.avatar || 'avatar.png',
    };
    this.users.push(data);
    return { statusCode: 201, message: 'Created: ' + data._id };
  }

  findAll() {
    return { statusCode: 200, response: this.users };
  }

  findOne(id: string) {
    const one: User = this.users.find((each) => each._id === id);
    return { statusCodes: 200, response: one };
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const one: User = this.users.find((each) => each._id === id);
    for (let prop in updateUserDto) {
      if (updateUserDto[prop]) {
        one[prop] = updateUserDto[prop];
      }
    }
    return { statusCode: 200, response: one };
  }

  remove(id: string) {
    const one: User = this.users.find((each) => each._id === id);
    if (!one) {
      return null
    } else {
      this.users = this.users.filter((each) => each._id !== id);
      return id
    }
  }
}
