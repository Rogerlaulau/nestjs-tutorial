import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypegooseModule } from '@hirasawa_au/nestjs-typegoose';
import { User } from './entities/user.entity';

@Module({
  imports: [TypegooseModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
