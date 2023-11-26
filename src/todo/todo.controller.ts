import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  async createTodo(
    @Body('title') title: string,
    @Body('content') content: string,
  ) {
    return this.todoService.createTodo(title, content);
  }

  @Get()
  async fetchTodos() {
    return this.todoService.fetchTodos();
  }

  @Get(':id')
  async fetchTodo(@Param('id') id: number) {
    return this.todoService.fetchTodo(id);
  }

  @Patch(':id')
  async updateTodo(
    @Param('id') id: number,
    @Body('title') title: string,
    @Body('content') content: string,
  ) {
    return this.todoService.updateTodo(id, title, content);
  }

  @Delete(':id')
  async removeTodo(@Param('id') id: number) {
    return this.todoService.removeTodo(id);
  }
}
