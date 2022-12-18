import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { InjectModel } from '@hirasawa_au/nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose/lib/types';


@Controller('users')
export class UsersController {
    constructor(
        @InjectModel(User)
        private model: ReturnModelType<typeof User>,
        private readonly userService: UsersService,
      ) { }
    
    @Get()
    getUsers() {
        return this.userService.findAll();
    }

    @Get(':id')
    getUserById(@Param('id') id: string ){
        return this.userService.findOne(id);
    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto){
        return this.userService.createUser(createUserDto);
    }

    @Put(':id')
    updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto){
        return this.userService.updateUser(id, updateUserDto);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string) {
      return this.userService.deleteUser(id);
    }


}
