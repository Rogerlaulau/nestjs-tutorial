import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    private users = [{id: 0, name: "Roger"}];

    findAll() {
        return this.users;
    }

    findById(id: number){
        return this.users.find(user => user.id === id);
    }

    createUser(createUserDto: CreateUserDto){
        // const newUser = {id: Date.now(), name: createUserDto.name};
        const newUser = { id: Date.now(), ...createUserDto };
        this.users.push(newUser);
        return newUser;
    }

    updateUser(id: number, updateUserDto: UpdateUserDto){
        const indexOfObject = this.users.findIndex((object) => {
            return object.id === id;
          });
          if (indexOfObject !== -1) {
            this.users[indexOfObject].name = updateUserDto.name;
            return this.users[indexOfObject];
          } else{
            return;
          }
    }

    deleteUser(id: number) {
        let removedUser;
    
        const indexOfObject = this.users.findIndex((object) => {
          return object.id === id;
        });
        
        if (indexOfObject !== -1) {
          removedUser = this.users.splice(indexOfObject, 1); // argument 1 indicates removing 1 object only
        }
        return removedUser;
      }

}
