import { Injectable, InternalServerErrorException, BadRequestException} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@hirasawa_au/nestjs-typegoose';
import { Ref, ReturnModelType } from '@typegoose/typegoose';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private readonly userModel: ReturnModelType<typeof User>,
  ) { }

    async findAll() {
        return await this.userModel.find();
    }

    async findOne(id: string){
        return await this.userModel.findOne({ _id: id })
    }

    async createUser(createUserDto: CreateUserDto){
      try {
        return await this.userModel.create(createUserDto);
      } catch (e) {
        console.error('API Fail:', e);
        throw new InternalServerErrorException({
          Error: 'Internal Server Error',
        });
      }
    }

    async updateUser(id: string, updateUserDto: UpdateUserDto){
      return await this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true });
    }

    async deleteUser(id: string) {
      return await this.userModel.deleteOne({_id: id});
    }
}
