import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypegooseModule } from '@hirasawa_au/nestjs-typegoose';

@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost/nest', {
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

