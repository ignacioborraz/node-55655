import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  users: Array<User>;
  constructor(@InjectModel(User.name) private model: Model<User>) {}
  create(createUserDto: CreateUserDto) {
    const data = this.model.create(createUserDto);
    return data;
  }

  findAll() {
    const data = this.model.find();
    return data;
  }

  findOne(id: string) {
    const one = this.model.findById(id);
    return one;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const one = this.model.findByIdAndUpdate(id, updateUserDto, { new: true });
    return one;
  }

  remove(id: string) {
    const one = this.model.findByIdAndDelete(id);
    return one;
  }
}
