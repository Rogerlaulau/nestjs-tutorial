import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService){}

    @Get()
    getUsers() {
        return this.userService.findAll();
    }

    @Get(':id')
    getUserById(@Param('id') id: string ){
        return this.userService.findById(Number(id));
    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto){
        return this.userService.createUser(createUserDto);
    }

    @Put(':id')
    updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto){
        return this.userService.updateUser(Number(id), updateUserDto);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string) {
      return this.userService.deleteUser(Number(id));
    }


}
