import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './todo/model/todo';

@Module({
  imports: [
    TodoModule,
    // TypeOrm root 설정
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [Todo],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
